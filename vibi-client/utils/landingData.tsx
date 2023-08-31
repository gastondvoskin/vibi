import { ReactNode } from 'react';
import {HiDocumentCheck,HiBanknotes,HiDocumentMagnifyingGlass,HiVideoCamera,HiCamera,HiPresentationChartBar} from 'react-icons/hi2'
interface Option {
  icon: ReactNode;
  text: string;
}



export const section_2_vende = [
    {
      "image": "/svg/Frame1.svg",
      "subtitle": "Registra tu vivienda en nuestra plataforma.",
      "text": "Completa el formulario ingresando la información solicitada sobre tu vivienda."
    },
    {
      "image": "/svg/Frame2.svg",
      "subtitle": "Anunciamos y promocionamos tu propiedad.",
      "text": "Recibe prospectos previamente verificados por nuestro equipo para que no pierdas tiempo en visitas interminables."
    },
    {
      "image": "/svg/Frame3.svg",
      "subtitle": "Vende tu vivienda sin complicaciones y de forma segura.",
      "text": "Te acompañamos en todo el proceso brindándote asesoría a través de nuestro equipo especializado."
    }
  ]
  export const section_3_vende: Option[] = [
    {
      icon: <HiDocumentMagnifyingGlass/>,
      text: "Identificamos y perfilamos a cada prospecto para encontrar tu comprador ideal."
  },
  {
      icon: <HiBanknotes/>,
      text: "Promocionamos tu propiedad en todos nuestros canales digitales aplicando diferentes estrategias."
  },
  {
    icon: <HiDocumentCheck/>,
    text: "Te asesoramos con los trámites burocráticos a través de nuestro equipo legal."
},
{
  icon: <HiVideoCamera/>,
  text: "Generamos el recorrido virtual en 3D de su vivienda.¡Prepárate para ver tu casa virtualmente!*"
},
{
  icon: <HiCamera/>,
  text: "Realizamos fotos profesional con la ayuda de expertos.¡Permítanos hacer que su casa se vea genial!*"
},
{
  icon: <HiPresentationChartBar/>,
  text: "Nuestro equipo de soporte especializado lo acompañara en el proceso hasta que venda su casa."
},
  ]