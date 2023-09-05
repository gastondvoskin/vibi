import Image from "next/image";
import { SubTitle2, Title } from "../commons/LandingTexts";
import AddressBar from "./AddressBar";
import Section2map from "../commons/Section-2-map";
import { section_2_vende } from "../../../../utils/landingData"; 

export default function LandingCrearAnuncio() {


  return (
    <>
      <div className="flex flex-col">
        <section className="relative w-full h-[371px] mb-16">
          <Image
            src={"/landingcrear.png"}
            alt="landingcrear"
            width={2500}
            height={2500}
            className="w-full"
          ></Image>
          <div className="absolute top-1/2 w-full text-center">
            <Title color="text-white" text="¿Quieres anunciar por ti mismo?" />
            <SubTitle2
              text="Vende en 3 simples pasos"
              showColor={true}
              color="text-white"
            />
          </div>
          <section className="absolute w-full -bottom-10 flex justify-center">
            <AddressBar />
          </section>
        </section>
        {/* Sector cartas */}
        <section className="pt-16 text-center m-auto">
          <Title text="¿Por qué Vibi?"></Title>
          <SubTitle2 text="Somos tu aliado perfecto" showColor={true}></SubTitle2>
          <section className="py-20 mb-20">
          <Section2map options={section_2_vende} noDetails={true} />
          </section>
        </section>
      </div>
    </>
  );
}
