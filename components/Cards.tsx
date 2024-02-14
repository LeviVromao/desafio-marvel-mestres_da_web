import { useRef } from "react"
import styled from "styled-components"
import { IProps } from "@/services/interfaces"

export default function Cards({page, images}: IProps) {
  const containerCardRef = useRef<HTMLDivElement>(null)
  const containerDetailRef = useRef<HTMLDivElement>(null)

  const handleOverrideContentOnMouseOver = () => { // checa se containerDetail ultrapassa o ContainerCard em largura
    const containerDetailRect = containerDetailRef.current?.getBoundingClientRect() || new DOMRect() // pega o tamanho do componente no Rect
    const containerCardRect = containerCardRef.current?.getBoundingClientRect() || new DOMRect()
    const newPositionRight = containerDetailRect.right + 237 // testa se com 237 a mais de pixel ele ultrapassa
    const lastChild = containerCardRef.current?.childNodes[containerCardRef.current?.childNodes.length - 1] as HTMLDivElement // resgata o ultimo filho containerCard
    const containerDetail = lastChild.children[0] as HTMLDivElement
    lastChild.onmouseover = ((ev: MouseEvent) => {
      if(newPositionRight > containerCardRect.right) { // se ultrapassar
        containerDetail.style.transform = "translateX(-282px)"
        containerDetail.style.borderRadius = "24px 0px 0px 24px" // move os elementos
        lastChild.style.borderRadius = "0 24px 24px 0"
      } else {
        containerDetail.style.transform = "translateX(237px)" 
        lastChild.style.borderRadius = "24px 0px 0px 24px"
      }
    })
  } 

  const handleOverrideContentOnMouseOut = () => {
    const lastChild = containerCardRef.current?.childNodes[containerCardRef.current?.childNodes.length - 1] as HTMLDivElement
    const containerDetail = lastChild.children[0] as HTMLDivElement
    lastChild.onmouseout = ((ev: MouseEvent) => {
      containerDetail.style.transform = "translateX(0)"
      containerDetail.style.borderRadius = "0px 24px 24px 0px"
      lastChild.style.borderRadius = "24px"
    })
  }

  return (
      <ContainerCard ref={containerCardRef}>
        {images.filter(image => image.page === page).map((image, i) => (
          <Card 
            $image={`${image.src}`} 
            key={i} 
            onMouseOver={handleOverrideContentOnMouseOver} 
            onMouseOut={handleOverrideContentOnMouseOut}
          >
            {page === image.page?(
              <> 
                <ContainerDetail ref={containerDetailRef}>
                  <div> 
                    <Title>{image.name}</Title>
                    <Paragraph>Aparições:</Paragraph>
                    {
                      page === "personagens"? 
                      image.aparicoes?.map((appearences, index) => (
                      <Paragraph key={index}>{appearences}</Paragraph>
                    )): 
                    (
                      <Paragraph>{image.story}</Paragraph>
                    )
                    }
                  </div>
                  <ContainerPublicRate>
                    <Title>Avaliações dos Fãs</Title>
                    <ContainerStars>  
                      <Stars xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="28" height="28"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" fill="rgb(16, 185, 129)"></path></Stars>
                      <Stars xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="28" height="28"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" fill="rgb(16, 185, 129)"></path></Stars>
                      <Stars xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="28" height="28"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" fill="rgb(16, 185, 129)"></path></Stars>
                      <Stars xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="28" height="28"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" fill="rgb(16, 185, 129)"></path></Stars>
                      <Stars xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="28" height="28"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" fill="rgb(16, 185, 129)"></path></Stars>
                    </ContainerStars>
                  </ContainerPublicRate>
                </ContainerDetail>
                <ContainerStory>
                  <ContainerDescriptions>
                    <Title>{image.name}</Title>
                    <Paragraph>{image.story}</Paragraph>
                  </ContainerDescriptions>
                    <Paragraph>Ver Detalhes</Paragraph>
                </ContainerStory>
              </>
            ): ("")
            }
          </Card>
       ))}
    </ContainerCard>
  )
}
const ContainerCard = styled.div `
  display: flex;
  gap: 38px;
  overflow-x: auto;
  padding: 0 0 0 25px;
  position: relative;
  width: 100%;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`
const ContainerStory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 26px;
  background: linear-gradient(to bottom, rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0.5));
  width: 234px;
  height: 73%;
`
const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 47px 0 0 24px;
  opacity: 0;
  height: 100%;
  width: 282px;
  transform: translateX(0);
  border-radius: 0 24px 24px 0;
  transition: all 1s ease-out;
  position: absolute;
  background: linear-gradient(236deg,rgba(255,30,0,1) 0%,rgba(255,30,0,1) 24%,rgba(0,0,0,1) 95%,rgba(2,6,42,1) 100%);
  transition: all 1s ease-out;
  &:hover{
    opacity: 1;
    transition: all 1s ease-out;
    transform: translateX(237px);
  }
`
const Card = styled.div<{$image: string}>`
  background: ${props => `url('${props.$image}')`};
  background-size: cover;
  background-repeat: no-repeat;
  color: #FFF;
  border-radius: 24px;
  display: flex;
  align-items: end;
  height: 372px;
  cursor: pointer;
  &:hover{
    border-radius: 24px 3px 3px 24px;
  }
  &:hover ${ContainerStory}{
    transition: all 1s ease-out;
    opacity: 0;
  }
  &:hover ${ContainerDetail}{
    transition: all 1s ease-out;
    transform: translateX(237px);
    opacity: 1;
  }
`
const ContainerDescriptions = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px;
`
const Title = styled.h1`
  font-size: 18px;
  margin: 0;
`
const Paragraph = styled.p`
  font-size: 15px;
  margin: 0;
`
const ContainerPublicRate = styled.div`
  
`
const ContainerStars = styled.div`
  
`
const Stars = styled.svg`
  
`
const ArrowRight = styled.img`
  
`