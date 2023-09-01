"use client";
import Image from "next/image";
import ButtonVariants from "../../commons/ButtonVariants";
import { FeaturedText, SubTitle2 } from "../vende/commons/LandingTexts";
import SectionText from "./commons/Section-text";
import ButtonMiniVariants from "../../commons/ButtonMiniVariants";

export default function ViewFeatured() {
  return (
    <div className="items-center text-center py-14 flex flex-col">
      <section className="items-center text-center flex flex-col py-4">
        <Image
          src={"/daco.png"}
          alt="party"
          width={80}
          height={80}
          className="w-12 h-12"
        />
        <div className="text-center">
          <SubTitle2 text="¡Ya casi terminas!" />
        </div>
        <SubTitle2 text="Sigue estas indicaciones para vender tu casa." />
      </section>
      <section>
        <SectionText />
      </section>
      <section className="flex justify-center py-4">
        <ButtonVariants
          border={false}
          bgColor="bg-primary hover:bg-darkprimary"
          txColor="text-vibiWhite "
          text="¿Cómo realizar el pago del plan?"
        />
      </section>
      <section className="w-96 flex justify-center text-center items-center">
        <FeaturedText
          text="Validado el pago  por nuestro equipo, un experto de Vibi se contactará al número 90240387."
          color="text-vibiDarkGrey text-sm"
        />
      </section>

      <section className="py-4">
        <ButtonMiniVariants border={true} brColor="border-primary" bgColor="bg-[#FEF1F4]"  text="Agregar otro numero" txColor="text-primary"/>
      </section>
    </div>
  );
}
