import { TypographyInterface } from '@/interfaceTypes'
import { FC } from 'react'

export const Heading6: FC<TypographyInterface> = ({ text, className }) => (
  <h6 className={`heading6 ${className}`}>{text}</h6>
)
