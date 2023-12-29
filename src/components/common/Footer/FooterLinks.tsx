'use client'

import { FC } from "react";
import { FooterLinkProps, LinksProps } from "@/interfaceTypes";
import { handleClickLink } from "@/utils";
import Link from "next/link";
import { Heading6 } from "../Typography/Heading6";

export const FooterLinks: FC<FooterLinkProps> = ({ title, links, customClass }) => (
  <>
    {title &&
      <Heading6 className="footer-heading" text={title} />
    }

    <ul className={customClass ? "flex gap-[10px] flex-col md:flex-row" : "footer-list"}>
      {links.map((item: LinksProps) => (
        <li key={item.title}>
          <Link target={item.target} href={item.url} onClick={item.hasSection ? (event) => handleClickLink(event, item.url) : undefined}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </>
);
