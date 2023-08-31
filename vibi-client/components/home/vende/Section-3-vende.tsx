"use client";
import { SubTitle2, Title } from "./commons/LandingTexts";
import Section3map from "./commons/Section-3-map";
import { section_3_vende } from "../../../utils/landingData";
export default function Section3() {
  return (
    <>
      <div className="py-20">
        <section className="text-center">
          <Title text="¿POR QUÉ ELEJIRNOS?" />
          <SubTitle2
            text="Hacemos la diferencia en el mercado"
            showColor={true}
          />
        </section>
        <section className="bg-mygrey">
          <Section3map options={section_3_vende} />
        </section>
      </div>
    </>
  );
}
