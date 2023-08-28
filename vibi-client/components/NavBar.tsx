"use client";
import React from "react";
import {RiWhatsappFill} from "react-icons/ri"
import NavButton from "./commons/NavButton";
import Image from "next/image";
import ButtonVariants from "./commons/ButtonVariants";

export default function NavBar() {

  return (
    <>
      <nav className="w-full flex">
        <section>
          <Image src={"/logo.png"} className="mx-20 my-8" width={96} height={32} alt="Logo ViBi"></Image>
        </section>
        <section className="m-auto text-base flex">
        <NavButton name="¿Cómo comprar?" route="/home" />
        <NavButton name="Comprar" route="/compra" />
        <NavButton name="Vende" route="/vende" />
        <NavButton name="Financia" route="/financia" />
        <NavButton name="Nuestros servicios" route="/servicios" />
        </section> 
        <section>
          <ButtonVariants leftIcon={<RiWhatsappFill/>} border={true} rightIcon={<RiWhatsappFill/>} bgColor="vibiGreen" txColor="myWhite" text="Contáctanos"/>
        </section>
      </nav>
    </>
  );
}
