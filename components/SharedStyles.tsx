import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled.div`
  height: 92vh;
  position: relative;
`
export const Logo = styled(animated.div)<{$large?: boolean, $header?:boolean}>`
  background-color: #f00;
  height: ${props => props.$large? "79px": props.$header? "35px": "23px"};
  width: ${props => props.$large? "238px": props.$header? "108px": "89px"};
  padding: ${props => props.$large? "19px 90px 0 0" : "0px 37px 0px 0px"};
`
export const LogoTitle = styled.div<{$large?: boolean, $header?: boolean}>`
  font-size: ${props => props.$large? "55px": props.$header? "30px": "21px"};
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`
export const Shadow = styled.div<{$home?: boolean}>`
  width: 100%;
  height: 100%;
  background: ${props => props.$home? "linear-gradient(87deg,#000,#000,#000000c2)": "linear-gradient(to left, #000, transparent)"};
`