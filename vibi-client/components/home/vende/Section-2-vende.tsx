"use client";

import ButtonVariants from "../../commons/ButtonVariants";
import { SubTitle2, Title } from "./commons/LandingTexts";
import Section2map from "./commons/Section-2-map";
import { section_2_vende } from "../../../utils/landingData";

export default function Section2() {
  return (
    <>
      <div className="flex flex-col items-center py-20">
        <section className="text-center">
          <Title text="¿QUÉ TENGO QUE HACER?" />
          <SubTitle2 text="Vende en 3 simples pasos" showColor={true} />
        </section>
        <section className="py-8">
          <Section2map options={section_2_vende} />
          </section>
        <ButtonVariants
          border={false}
          bgColor="bg-primary"
          txColor="text-vibiWhite"
          text="Empieza ahora"
        />
      </div>
    </>
  );
}
