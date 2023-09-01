"use client";
import React from "react";
import ButtonVariants from "../../commons/ButtonVariants";
import { SubTitle2, Title } from "../vende/commons/LandingTexts";
import { planData } from "../../../utils/pasarelaData";

export default function ViewPlan() {
  return (
    <div className="py-10">
      <section>
        <SubTitle2 text="¡Enhorabuena! Estás a un paso de terminar" />
        <Title text="¿Cómo quieres tu anuncio?" />
      </section>
      <section className="items-center text-center flex justify-center">
        <table className="w-[835px] text-center">
          <thead>
            <tr className="flex justify-around">
              <th className="w-40"></th>
              <th className="font-semibold">Completo</th>
              <th className="font-semibold">Destacado</th>
              <th className="font-semibold">Básico</th>
            </tr>
            <tr className="flex justify-around py-2">
              <td className="w-40"></td>
              <td className="font-bold text-2xl">S/ 469</td>
              <td className="font-bold text-2xl">S/ 10</td>
              <td className="font-bold text-2xl">S/ 0</td>
            </tr>
          </thead>
          <tbody>
            {planData?.map((row, index) => (
              <tr
                key={index}
                className={
                  index === 1 || index === 3
                    ? "border-y flex justify-around bg-gray-100"
                    : "border-y flex justify-around"
                }
              >
                <td className="text-sm py-2 px-4 w-72 text-start">
                  {row.header}
                </td>
                <td className="m-auto p-1">{row.completo}</td>
                <td className="m-auto p-1">{row.destacado}</td>
                <td className="m-auto p-1">{row.basico}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="flex justify-around py-5">
              <td className="w-60"></td>
              <td className="text-center">
                <ButtonVariants
                  border={false}
                  bgColor="bg-primary"
                  txColor="text-vibiWhite"
                  text="Publicar"
                />
              </td>
              <td>
                <ButtonVariants
                  border={true}
                  brColor="text-vibiDarkGrey border-2"
                  bgColor="bg-white"
                  txColor="text-vibiDarkBlue"
                  text="Publicar"
                />
              </td>
              <td>
                <ButtonVariants
                  border={true}
                  brColor="text-vibiDarkGrey border-2"
                  bgColor="bg-white"
                  txColor="text-vibiDarkBlue"
                  text="Publicar"
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </div>
  );
}
