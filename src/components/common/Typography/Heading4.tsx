import { TypographyInterface } from '@/interfaceTypes'
import { FC } from 'react'

export const Heading4: FC<TypographyInterface> = ({ text, className }) => (
  <h4 className={className}>{text}</h4>
)