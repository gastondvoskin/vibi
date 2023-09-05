"use client";
import Section1 from "./Section-1-service";
import Section2 from "./Section-2-service";
import Section3 from "./Section-3-service";

export default function Services() {
  return (
    <>
      <div className="w-10/12">
        <Section1/>
        <Section2/>
        <Section3/>
      </div>
    </>
  );
}
