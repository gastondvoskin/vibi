"use client";
import React from "react";
import FooterExplore from "./footer/FooterExplore";
import FooterContact from "./footer/FooterContact";
import FooterTerm from "./footer/FooterTerm";
import FooterLogoText from "./footer/FooterLogo-Text";
import FooterLogo from "./footer/FooterLogo";
interface Props {
  showLogoFooter?: boolean;
}

export default function Footer({ showLogoFooter }: Props) {
  return (
    <div className="w-full m-auto flex bg-[#F7F8FA] flex-wrap py-14 px-20 text-vibiDarkGrey">
      {showLogoFooter ? (
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
