"use client";
import React, { ReactNode } from "react";
import { CardText } from "./LandingTexts";

interface Option {
  icon: ReactNode;
  text: string;
}
interface Props {
  options: Option[];
}

export default function Section3map({ options }: Props) {
  return (
    <div className="flex flex-wrap justify-around px-10 py-6">
      {options?.map((option,index) => (
        <div key={index} className="w-96 h-48 px-6 py-10 justify-center bg-white mb-4">
        <div className="flex w-72 space-x-3">
            <div className="text-vibiOrange text-2xl">
            {option.icon}
            </div>
          <CardText text={option.text}/>
        </div>
        </div>
      ))}
    </div>
  );
}
