import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import ButtonVariants from "../../commons/ButtonVariants";
import { SubTitle2, Title } from "../vende/commons/LandingTexts";

export default function ViewPlan() {
  return (
    <div className="py-10">
      <section>
        <SubTitle2 text="¡Enhorabuena! Estás a un paso de terminar" />
        <Title text="¿Cómo quieres tu anuncio?" />
      </section>
      <section>
        <table className="w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th>Completo</th>
              <th>Destacado</th>
              <th>Básico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>S/ 469</td>
              <td>S/ 10</td>
              <td>S/ 0</td>
            </tr>
            <tr>
              <td>Sin publicidad en tu anuncio</td>
              <td>Sin publicidad en tu anuncio</td>
              <td>Sin publicidad en tu anuncio</td>
              <td>Sin publicidad en tu anuncio</td>
            </tr>
            <tr>
              <td>Posición destacada en las búsquedas</td>
              <td>
                <BsCheckCircle />
              </td>
              <td>
                <BsCheckCircle />
              </td>
              <td>
                <BsCheckCircle />
              </td>
            </tr>
            <tr>
              <td>Book de fotos profesionales</td>
              <td>
                <BsCheckCircle />
              </td>
              <td>
                <BsCheckCircle />
              </td>
              <td>
                <BsCheckCircle />
              </td>
            </tr>
            <tr>
              <td>Video profesional</td>
              <td>
                <BsCheckCircle />
              </td>
              <td>
                <BsCheckCircle />
              </td>
              <td>
                <BsCheckCircle />
              </td>
            </tr>
            <tr>
              <td>Cartel exterior</td>
              <td>
                <BsCheckCircle />
              </td>
              <td>
                <BsCheckCircle />
              </td>
              <td>
                <BsCheckCircle />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
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
                  brColor="text-vibiDarkGrey"
                  bgColor="bg-white"
                  txColor="text-vibiDarkBlue"
                  text="Publicar"
                />
              </td>

              <td>
                <ButtonVariants
                  border={true}
                  brColor="text-vibiDarkGrey"
                  bgColor="bg-white"
                  txColor="text-vibiDarkBlue"
                  text="Publicar"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
