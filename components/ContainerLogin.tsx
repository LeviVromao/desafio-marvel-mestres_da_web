import { ReactNode } from "react";
import styled from "styled-components";
import { IcontainerProps } from "@/services/interfaces";

export default function ContainerLogin({children}: IcontainerProps) {
  return (
    <Container $flex>
      {children}
    </Container>
  )
}

const Container = styled.div<{$flex: boolean}>`
  background-color: #000;
  display: ${props => props.$flex? "flex": "block"};
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  user-select: none;
  max-width: 1641px;
  margin: 0 auto;
  @media (max-width: 733px) {
    justify-content: center;
  }
`