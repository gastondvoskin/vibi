"use client";
import { SubText, SubTitle2, Title } from "./commons/LandingTexts";
import Section3map from "./commons/Section-3-map";
import { section_3_vende } from "../../../utils/landingData";
export default function Section3() {
  return (
    <>
      <div className="py-20 bg-mygrey">
        <section className="text-center pb-4">
          <Title text="¿POR QUÉ ELEJIRNOS?" />
          <SubTitle2
            text="Hacemos la diferencia en el mercado"
            showColor={true}
          />
        </section>
        <section className="">
          <Section3map options={section_3_vende} />
          <section className="ml-16">
            <SubText text="* Contacta con nuestro equipo para verificar si el servicio esta disponible en tu ciudad." />
            </section>
        </section>
      </div>
    </>
  );
}
