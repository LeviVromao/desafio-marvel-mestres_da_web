import { ReactNode } from "react"
export interface ICards {
  page: string
  src: string
  name: string
  story: string
  aparicoes?: Array<string>
}

export interface  IProps{
  page: string,
  images: Array<ICards>
}

export interface IcontainerProps {
  children: ReactNode
}

export interface ICarouselProps {
  children: ReactNode
}