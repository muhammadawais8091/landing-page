import { MouseEvent } from "react"

export const getCurrentYear = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()

  return year
}

export const handleClickLink = (event: MouseEvent<HTMLAnchorElement>, linkId: string) => {
  event.preventDefault();
  document?.getElementById(linkId)?.scrollIntoView({ behavior: 'smooth' });
}

export const openPopupWidget = (hookVideo: boolean, designAdvice: boolean, customerSupport: boolean) => {
  window.cabaPopup.open({ hookVideo: hookVideo, designAdvice: designAdvice, customerSupport: customerSupport });
}