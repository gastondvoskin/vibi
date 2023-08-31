"use client";
import { ReactNode } from "react";
import { Text } from "./LandingTexts";

interface Props {
  icon: ReactNode;
  text: string;
  bgColor:string;
  txColor: string;
}

export default function ContactCard({ icon, text,bgColor,txColor }: Props) {
  return (
    <>
      <section className="text-center items-center flex flex-col">
        <section className={ `${bgColor} ${txColor} w-12 h-12 rounded-full items-center flex justify-center text-2xl` }>{icon}</section>
        <Text text={text} />
      </section>
    </>
  );
}
