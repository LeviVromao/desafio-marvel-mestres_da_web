import { Container } from "@/components/SharedStyles"
import Header from "@/components/Header"
import Main from "@/components/Main"
import { GetServerSideProps } from "next"
import path from "path"
import fs from "fs/promises"
import { IProps } from "@/services/interfaces"

export default function Heroes({page, images}: IProps) {
  return (
    <Container>
      <Header/>
      <Main page={page} images={images}/>
    </Container> 
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const filePath = path.join(process.cwd(), "services")
  const { req, params } = ctx
  const url = req.url?.split("/").pop()?.split(".").shift()
  const fileContent = await fs.readFile(`${filePath}/Images.json`, "utf8")
  const data = JSON.parse(fileContent)
  return {
    props: {
      images: data.image,
      page: url
    }
  }
}