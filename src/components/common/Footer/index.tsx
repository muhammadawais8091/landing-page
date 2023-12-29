import { FOOTER_LINKS, RESOURCE_LIST, SOLUTIONS_LIST, SUCCESS_STORIES_LIST } from "@/constants";
import { FacebookLogo, FooterLogo, InstagramLogo, TwitterLogo } from "@/svg";
import { getCurrentYear } from "@/utils";
import Link from "next/link";
import React from "react";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => (
  <footer className="bg-[#202020] py-[30px] md:pt-[94px] md:pb-[60px]">
    <div className="max-w-[955px] mx-auto px-[15px]">
      <div className="flex md:gap-4 flex-col md:flex-row">
        <div className="flex-1 max-w-[250px] mb-[40px] md:mb-[0px]">
          <Link href='/'><FooterLogo /></Link>

          {/* <div className="flex social-icons gap-[15px] pt-[25px]">
            <Link href="#"><InstagramLogo /></Link>
            <Link href="#" className="facebook-icon"><FacebookLogo /></Link>
            <Link href="#"><TwitterLogo /></Link>
          </div> */}
        </div>

        {/* <div className="flex-1 max-w-[270px] mb-[20px] md:mb-[0px]">
          <FooterLinks title="Solutions" links={SOLUTIONS_LIST} />
        </div>

        <div className="flex-1 max-w-[190px] mb-[20px] md:mb-[0px]">
          <FooterLinks title="RESOURCES" links={RESOURCE_LIST} />
        </div> */}

        <div className="flex-1 max-w-[190px] mb-[20px] md:mb-[0px]">
          <FooterLinks title="Success Stories" links={SUCCESS_STORIES_LIST} />
        </div>
      </div>

      <div className="flex pt-[0] md:pt-[55px] md:justify-between justify-start items-start  md:items-center flex-col md:flex-row">
        <span className="block text-[#707070] text-[13px] leading-[12.58px] mb-[20px] md:mb-0 text-AvalonDemi">
          {getCurrentYear()} <Link title="caba operator" href='/'>operator.</Link>, All Rights Reserved.
        </span>

        <div className="footer-links">
          <div className="flex gap-[10px] flex-col md:flex-row">
            <FooterLinks links={FOOTER_LINKS} customClass />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

