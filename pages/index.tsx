import Head from "next/head";
import { Logo, LogoTitle, Shadow } from "@/components/SharedStyles";
import FormLogin from "@/components/FormLogin";
import styled from "styled-components";
import ContainerLogin from "@/components/ContainerLogin";
import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";

export default function Home() {
  const [browserWidth, setBrowserWidth] = useState<number>(0)
  useEffect(() => {
    const actualBrowserWidth = window.innerWidth || document.body.clientWidth
    setBrowserWidth(actualBrowserWidth)
  }, [browserWidth])

  const appearComponent = useSpring({
    from: { opacity: 0 },
    to: async (next) => {
      await next({opacity: 0})
      await new Promise((resolve) => setTimeout(resolve, 1000))
      await next({opacity: 1})
    },
    config: {
      duration: 1000,
      tension: 140,
      friction: 25,
    },
  })

  const LogoAnimation = useSpring({
  from: { transform: browserWidth <= 733? "translate(0px, 254px)":"translate(385px, 287px)"},
  to: async (next) => {
    await next({transform: browserWidth <= 733? "translate(0px, 254px)":"translate(385px, 287px)"})
    await new Promise((resolve) => setTimeout(resolve, 1000))
    await next({transform: browserWidth <= 733? "translate(0px, 254px)":"translate(0px, 287px)"})
    await new Promise((resolve) => setTimeout(resolve, 1000))
    await next({transform: "translate(0,0)"})
  },
  config: {
    duration: 1000,
    tension: 10,
    friction: 26,
  }
});
  
  return (
    <ContentContainer>
      <ContainerLogin >
       <LogoAndFormContainer>
          <Logo $large style={LogoAnimation}> 
            <LogoTitle $large>
              mar<br/>vel
            </LogoTitle>
          </Logo>
          <FormLogin/>
       </LogoAndFormContainer>
       <ContainerImage style={appearComponent}>
        <Shadow/>
       </ContainerImage>
      </ContainerLogin>
    </ContentContainer>
  );
}

const ContainerImage = styled(animated.div)`
  background-image: url("./marvel_banner.png");
  height: 100vh;
  width: 50%;
  background-position: right;
  background-repeat: no-repeat;
  @media (max-width: 733px) {
    display: none;
  }
`
const LogoAndFormContainer = styled.div`
  height: 90%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 71px;
  justify-content: center;
`
const ContentContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #000;
`