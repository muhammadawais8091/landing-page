import { TypographyInterface } from '@/interfaceTypes'
import { FC } from 'react'

export const Heading5: FC<TypographyInterface> = ({ text, className }) => (
  <h5 className={`heading5 ${className}`}>{text}</h5>
)
