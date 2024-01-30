"use client";

import { RiWhatsappFill } from "react-icons/ri";
import {FaRegCalendar} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import ButtonVariants from "../../commons/ButtonVariants";
import ContactCard from "./commons/Contactcard";
import { SubTitle2, Text, Title } from "./commons/LandingTexts";

export default function SectionContact() {
  return (
    <>
      <div className="flex py-16 items-center justify-center">
        <section className=" w-6/12 px-24">
          <Title text="¿necesitas ayuda con tu venta?" />
          <SubTitle2
            text="Déjalo en manos de un agente profesional"
            showColor={true}
          />
          <Text text="Tenemos un equipo de expertos que te ayudará con todo el proceso de venta. ¡Solo preocúpate de rentabilizar tu propiedad!" />
        </section>

        <section className="flex">
        <section className="w-64 h-60 items-center justify-center text-center flex flex-wrap">
          <ContactCard icon={<FaRegCalendar/>} text="Agenda una reunión con nuestro equipo." bgColor="bg-primary" txColor="text-white"/>
          <ButtonVariants
            leftIcon={<RiWhatsappFill />}
            border={false}
            bgColor="bg-primary"
            txColor="text-vibiWhite"
            text="Programa una llamada"
            onClick={() => alert("Próximamente")}
          />
          </section>
          <section className="w-64 h-60 items-center justify-center text-center flex flex-wrap">
          <ContactCard icon={<BsWhatsapp/>} text="Agenda una reunión con nuestro equipo." bgColor="bg-vibiGreen" txColor="text-white"/>
            <ButtonVariants
            leftIcon={<RiWhatsappFill />}
            border={false}
            bgColor="bg-vibiGreen"
            txColor="text-vibiWhite"
            text="Conversemos"
            onClick={() => alert("Próximamente")}
          />
          </section>
          </section>
          
        
      </div>
    </>
  );
}
