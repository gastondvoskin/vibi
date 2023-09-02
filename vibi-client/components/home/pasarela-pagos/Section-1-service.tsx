"use client";

import Image from "next/image";
import { FText, SubTitle2 } from "../vende/commons/LandingTexts";
import ButtonMiniVariants from "../../commons/ButtonMiniVariants";

export default function Section1() {
  return (
    <>
      <section className="flex justify-between items-center pt-10 pb-6 space-x-20">
        <section className="flex space-x-3 ">
          <Image
            src={"/daco.png"}
            alt="party"
            width={80}
            height={80}
            className="w-8 h-8"
          />
          <FText text="¡Enhorabuena! Tu anuncio esta listo" color="text-xl font-bold"/>
        </section>
        <ButtonMiniVariants
          bgColor=""
          border={true}
          brColor="border-[#ACB7C6]"
          text="Ve cómo quedo tu anuncio"
          txColor=""
        />
      </section>
    </>
  );
}
