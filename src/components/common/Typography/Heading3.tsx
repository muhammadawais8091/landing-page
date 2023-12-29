import { TypographyInterface } from '@/interfaceTypes'
import { FC } from 'react'

export const Heading3: FC<TypographyInterface> = ({ text, className }) => (
  <h3 className={`heading3 ${className}`}>{text}</h3>
)