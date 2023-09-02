"use client";

import Image from "next/image";
import { serviceData } from "../../../utils/pasarelaData";

export default function Section3() {
  return (
    <>
      <div className="flex flex-wrap w-[743px] justify-between">
        {serviceData.map((e)=><Image src={e.image} alt={e.image} width={80} height={80} className="w-52 h-40 my-2"></Image>)}
      </div>
    </>
  );
}
