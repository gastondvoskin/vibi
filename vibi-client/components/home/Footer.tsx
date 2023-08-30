"use client";
import React from "react";
import FooterExplore from "./footer/FooterExplore";
import FooterContact from "./footer/FooterContact";
import FooterTerm from "./footer/FooterTerm";
import FooterLogoText from "./footer/FooterLogo-Text";
import FooterLogo from "./footer/FooterLogo";
import { usePathname } from "next/navigation";
import { pathnames } from "../../utils/footerData";


export default function Footer() {
  const footerData = pathnames
  const pathname = usePathname();
  const showLogoFooter = footerData.includes(pathname)
  return (
    <div className="w-full m-auto flex bg-[#F7F8FA] flex-wrap py-14 px-20 text-vibiDarkGrey">
      {!showLogoFooter ? (
        <FooterLogo />
      ) : (
        <>
          <FooterLogoText />
          <FooterExplore />
          <FooterContact />
          <FooterTerm />
        </>
      )}
    </div>
  );
}
