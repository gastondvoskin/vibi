import { HiOutlineShieldCheck } from "react-icons/hi";
import ButtonVariants from "../../commons/ButtonVariants";
import "../../../styles/imgShapes.css"
import { SubText, SubTitle, Text, Title } from "./commons/LandingTexts";


export default function Sells() {
  return (
    <>
      <div className="bg-mygrey py-11 px-44 shadow-sm">
        <section className="flex">
          <section className="flex flex-col justify-between relative w-8/12 h-full m-auto">
            <section>
            <Title text="QUIERO VENDER MÍ CASA"/>
            <SubTitle text="Vendemos tu casa" showColor={true}/>
            <SubTitle text="al mejor precio." showColor={false}/>
            <Text text="En Vibi te ayudamos a maximizar la rentabilidad de tu propiedad de
              la mano de nuestro equipo de expertos."/>
              </section>
            <section className="flex space-x-3 py-6">
              <ButtonVariants
                border={false}
                bgColor="bg-primary"
                txColor="text-vibiWhite"
                text="Empieza a vender"
              />
              <ButtonVariants
                border={true}
                bgColor="bg-white"
                txColor="text-vibiDarkBlue"
                text="Cotiza tu casa gratis"
              />
            </section>
            <section className="flex space-x-1 items-center">
              <HiOutlineShieldCheck />
              <SubText text="Tu información esta protegida y no se compartirá."/>
            </section>
          </section>
          <section className="w-6/12 h-80 flex justify-center">
          
          </section>
        </section>
      </div>
    </>
  );
}
