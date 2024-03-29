import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Logo, LogoTitle } from "./SharedStyles";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useRouter } from "next/router";

export default function Header(){
  const router = useRouter()
  const [viewportSize, setViewportSize] = useState<number>()
  const sliderNavRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    setViewportSize(window.innerWidth)
    sliderNavRef.current?.childNodes.forEach(child => {
      if(child.textContent?.toLowerCase().replace("'", "") === window.location.href.split("/")[3]) {
        const childDivElement = child as HTMLDivElement
        childDivElement.style.color = "#FFF"
      }
    })
  }, [])

  useEffect(() => {
    function handleResize() {
      setViewportSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [viewportSize])

  const handleExit = () => {
    localStorage.removeItem("user")
    router.push("/");
  }
  return (
    <ContainerHeader>
      <PagesLink href="/">
        <Logo $header={viewportSize! > 873}>
          <LogoTitle $header={viewportSize! > 873}>
            mar<br/>vel
          </LogoTitle>
        </Logo>
      </PagesLink>
      <ContainerRightSideHeader>
        <ContainerMenuPages>
          <ContainerMenuBurguer>
            <IoMenu 
              style={{
                color: "#84848D", 
                fontSize: "35px", 
                position: "absolute", 
                zIndex: 9999
              }}
            />
            <IoClose style={{color: "#84848D", fontSize: "35px", opacity: 0}}/>
          </ContainerMenuBurguer>
          <ContainerNav>
            <PagesLink href="/personagens">Personagens</PagesLink>
            <PagesLink href="/filmes">Filmes</PagesLink>
            <PagesLink href="/hqs">HQ's</PagesLink>
          </ContainerNav>
        </ContainerMenuPages>
        <ContainerPages  ref={sliderNavRef}>
          <PagesLink href="/personagens">Personagens</PagesLink>
          <PagesLink href="/filmes">Filmes</PagesLink>
          <PagesLink href="/hqs">HQ's</PagesLink>
        </ContainerPages>
          <ContainerUserAndExit>
            <UserImage src="https://c.tenor.com/TjyPKjIjaJQAAAAC/luffy-monkey-d-luffy.gif"/>
            <ExitString onClick={handleExit}>Sair</ExitString>
          </ContainerUserAndExit>
      </ContainerRightSideHeader>
    </ContainerHeader>
  )    
}

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7px 0 7px;
  background: #000000;
  border-bottom: 2px solid #F00;
`
const ContainerPages = styled.div`
  display: flex;
  gap: 10px;
  @media (min-width: 738px) {
    gap: 26px;
    font-size: 22px;
  }
  @media (max-width: 390px) {
    display: none;
  }
`
const PagesLink = styled.a`
  color: #84848D;
  cursor: pointer;
  &:hover{
    color: #FFF;
  };
  @media (max-width: 390px){
    padding: 0;
  }
  padding: 16px 0 0 0;
`
const ContainerUserAndExit = styled.div `
  display: flex;
  align-items: end;
  gap: 5px;
`
const ExitString = styled.p `
  cursor: pointer;
  color: #84848D;
  &:hover {
    color: #FFF
  }
`
const UserImage = styled.img`
  width: 45px;
  height: 45px;
  min-width: 50px;
  border-radius: 50%;
`
const ContainerRightSideHeader = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 870px) {
    align-items: center;
    justify-content: space-around;
    width: 36%;
  }
  @media (max-width: 390px) {
    gap: 27px;
  }
`
const ContainerNav = styled.div `
  position: absolute;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 140px;
  height: 104px;
  transform: translateY(40px);
  z-index: 9999;
  transition: all 1s ease-out;
  background: black;
  border-radius: 17px;
  padding: 8px;
`
const ContainerMenuPages = styled.div`
  display: none;
  align-items: center;
  flex-direction: column;
  position: relative;
  justify-content: center;
  @media (max-width: 390px){
    display: flex;
  }
  &:hover ${ContainerNav}{
    transform: translateY(83px);
    transition: all 1s ease-out;
    visibility: visible;
  }
`
const ContainerMenuBurguer = styled.div`
  position: relative;
  z-index: 9999999;
`