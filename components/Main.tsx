import styled from "styled-components"
import { Shadow } from "./SharedStyles"
import Cards from "./Cards"
import Carousel from "./Carrossel"
import { IProps } from "@/services/interfaces"
export default function Main({page, images}: IProps) {
  return (
    <ContainerImage>
      <Shadow $home>
        <Carousel>
          <Cards page={page} images={images}/>
        </Carousel>
      </Shadow>
    </ContainerImage>
  )
}
const ContainerImage = styled.div ` 
  background-image: url("./marvel_banner.png");
  background-repeat: no-repeat;
  background-position: right center;
  height: 100%;
`