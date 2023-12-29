import { TypographyInterface } from "@/interfaceTypes"
import { FC } from "react"

export const Paragraph: FC<TypographyInterface> = ({ text, className }) => (
  <p className={`paragraph-text ${className}`}>{text}</p>
)