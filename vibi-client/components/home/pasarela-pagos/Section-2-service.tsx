"use client";

import ButtonVariants from "../../commons/ButtonVariants";
import { FeaturedText } from "../vende/commons/LandingTexts";

export default function Section2() {
  return (
    <>
      <section className=" flex flex-col w-[743px] pb-8">
        <FeaturedText
          text="Destaca de los demás y mejora tu anuncio en pocos minutos."
          color="font-semibold text-base "
        />
        <section className="flex justify-between">
          <section className="w-7/12">
            <FeaturedText
              text="Selecciona los servicios que te interesan para solicitar más información, un asesor se pondrá en contacto contigo."
              color="text-sm font-normal text-vibiDarkGrey"
            />
          </section>
          <ButtonVariants
            bgColor="bg-vibiGreyWhite"
            border={true}
            brColor="border-[#ACB7C6]"
            text="Quiero más información"
            txColor="text-white"
          />
        </section>
      </section>
    </>
  );
}
