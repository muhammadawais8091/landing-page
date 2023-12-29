import { Dispatch, SetStateAction } from "react";

export type ButtonType = {
  className?: string;
  buttonText: string;
  buttonType?: string;
  onClick?: () => void
}

export interface TypographyInterface {
  className?: string;
  text: string;
}

export interface TitleInterface {
  title: string,
  subTitle?: string
}

export interface OnsiteDataInterface {
  id: string,
  tabIndex: number,
  title: string,
  Icon: JSX.Element,
  imageUrl: string
  textFirst: string,
  textSecond?: string
}

export interface DrawerProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export interface FooterLinkProps {
  title?: string,
  links: LinksProps[]
  customClass?: boolean,
}

export interface LinksProps {
  title: string;
  url: string;
  hasSection?: boolean,
  target?: string
}

export interface VideoInterface {
  url: string;
}

export interface TabContentInterface {
  currentContent: OnsiteDataInterface
}