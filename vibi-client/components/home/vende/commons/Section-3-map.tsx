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
    <div className="flex flex-wrap justify-center">
      {options.map((option) => (
        <div className="w-96 h-48 px-6 py-10 justify-center">
        <div className="flex w-72">
            <div className="text-vibiOrange text-2xl">
            {option.icon}
            </div>
            <div>
          <CardText text={option.text} />
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}
