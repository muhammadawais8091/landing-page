"use client"

import { motion, AnimatePresence } from "framer-motion";
import { LETS_TALK, HEADER_LINKS } from "@/constants";
import { HamburgerIcon, HeaderLogo } from "@/svg";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../Button";
import { Drawer } from "./Drawer";
import { handleClickLink, openPopupWidget } from "@/utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-lg">
      <nav className="full-container py-[0px] md:py-[15px]">
        <div className="flex justify-between items-center">
          <div className="flex py-[20px] md:py-0 ">
            <Link href="/">
              <HeaderLogo />
            </Link>

            <div className="pl-[25px] lg:pl-[72px] md:flex items-center md:gap-[25px] lg:gap-[45px] hidden navbar-links-desktop">
              {HEADER_LINKS.map((link) => (
                <Link onClick={link.hasSection ? (event) => handleClickLink(event, link.dat) : undefined} className="text-[var(----font-avlon-medium)]" title={link.title} key={link.id} href={`#${link.dat}` || ''}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="items-center gap-[12px]">
            <div className="hidden md:block">
              <Link href="https://portal.operator.work/login" className="text-[12px] lg:text-[15px] uppercase lg:mr-[40px] mr-[10px] text-primary text-AvalonBold">Login</Link>

              <Button buttonText={LETS_TALK} onClick={()=>openPopupWidget(true, true, true)} />
            </div>

            <button onClick={() => setIsOpen(true)} className="block md:hidden mr-3" type="button">
              <HamburgerIcon />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen &&
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "just" }}
              className={`drawer-section z-40 horizontal-draw`}>
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
            </motion.div>
          }
        </AnimatePresence>

        {isOpen && <div className={`drawer-classes ${isOpen ? "drawer-open transform translate-x-100" : "drawer-close"}`} />}
      </nav>
    </header >
  )
}