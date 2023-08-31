"use client";
import Image from "next/image";
import React from "react";
import { SubTitle2, Text } from "./LandingTexts";
interface Option{
    image:string;
    subtitle:string;
    text:string;
}
interface Props {
    options:Option[];
    noDetails?:boolean
}
export default function Section2map({options,noDetails}:Props) {
  return (
    <div className="flex">
      {options?.map((option, index) => (
        <div key={index} className="flex flex-col items-center w-72 text-center mx-7">
          <div className="w-64 h-64 bg-gray-50 rounded-[100px] flex items-center justify-center">
          <Image src={option.image} alt={`Option ${index + 1}`} className="w-44 h-36 " width={10} height={10} />
          </div>
          <div className="pt-8">
          <SubTitle2 text={option.subtitle} />
          {!noDetails ? <Text text={option.text} /> : ""}
          </div>
        </div>
      ))}
    </div>
  );
}
