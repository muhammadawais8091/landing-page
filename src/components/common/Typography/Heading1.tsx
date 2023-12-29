import { TypographyInterface } from '@/interfaceTypes'
import { FC } from 'react'

export const Heading1: FC<TypographyInterface> = ({ text, className }) => (
  <h1 className={`heading1 ${className}`}>{text}</h1>
)
