"use client";
import React from "react";
import {RiWhatsappFill} from "react-icons/ri"
import NavButton from "../commons/NavButton";
import Image from "next/image";
import ButtonVariants from "../commons/ButtonVariants";
import NavBarProfile from "./navbar/NavBarProfile";


export default function NavBar() {

  return (
    <>
      <nav className="w-full flex shadow-sm">
        <section>
          <Image src={"/logo.png"} className="mx-20 my-8" width={96} height={32} alt="Logo ViBi"></Image>
        </section>
        <section className="m-auto text-base flex">
          <NavButton name="¿Cómo comprar?" route="/home" />
          <NavButton name="Compra" route="/compra" />
          <NavButton name="Vende" route="/vende" />
        {/* "Financia" and "Nuestros servicios" sections will be commented until they are developed */}
        {/* <NavButton name="Financia" route="/financia" />
        <NavButton name="Nuestros servicios" route="/servicios" /> */}
        </section> 
        <section className="relative  m-auto flex space-x-4">
          <NavBarProfile/>
          <ButtonVariants leftIcon={<RiWhatsappFill/>} border={false} bgColor="bg-vibiGreen" txColor="text-vibiWhite" text="Contáctanos" onClick={() => alert("Próximamente")}/>
        </section>
      </nav>
    </>
  );
}
