import styled from "styled-components"
import { ICarouselProps } from "@/services/interfaces"
import { useEffect, useRef, useState } from "react"

export default function Carousel({children}: ICarouselProps) {
  const [currentItem, setCurrentItem] = useState<number>(0)
  const containerCarouselRef = useRef<HTMLDivElement>(null)
  const arrowRightRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const childrens = containerCarouselRef.current?.childNodes[0].childNodes
    const item = childrens![currentItem] as HTMLDivElement
    const prevItem = document.querySelector('.highlight')
    if(prevItem) {
      prevItem.classList.remove('highlight')
    }
    item.classList.add('highlight')
  }, [currentItem])

  const handleRightClick = () => {
    const childrens = containerCarouselRef.current?.childNodes[0].childNodes
    setCurrentItem((prevItem) => {
      let newIndex = prevItem + 1
      if(newIndex === childrens?.length!) {
        newIndex = 0;
      }
      return newIndex
    })
    const item = childrens![currentItem] as HTMLDivElement
    console.log(item.classList.contains('active'))
    item.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    })
  }

  return (
    <ContainerCarousel ref={containerCarouselRef}>
      {children}
      <Arrow src="./arrow-right.png" ref={arrowRightRef} onClick={handleRightClick}/>
    </ContainerCarousel>
  )
}
const ContainerCarousel = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%
`
const Arrow = styled.img`
  position: absolute;
  right: 29px;
  height: 40px;
  cursor: pointer;
`