import { TypographyInterface } from '@/interfaceTypes'
import { FC } from 'react'

export const Heading2: FC<TypographyInterface> = ({ text, className }) => (
  <h2 className={`heading2 ${className}`}>{text}</h2>
)
