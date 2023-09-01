import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";

export const planData = [
    {
      header: "Sin publicidad en tu anuncio",
      completo: <p className="text-primary">Sin publicidad</p>,
      destacado: <p className="text-primary">Sin publicidad</p>,
      basico: "Con publicidad",
    },
    {
      header: "Posición destacada en las búsquedas",
      completo: <BsFillCheckCircleFill color="#EC255A"/>,
      destacado: <HiXMark />,
      basico: <HiXMark />,
    },
    {
      header: "Book de fotos profesionales",
      completo: <BsFillCheckCircleFill color="#EC255A"/>,
      destacado: <HiXMark />,
      basico: <HiXMark />,
    },
    {
      header: "Video profesional",
      completo: <BsFillCheckCircleFill color="#EC255A"/>,
      destacado: <HiXMark />,
      basico: <HiXMark />,
    },
    {
      header: "Cartel exterior",
      completo: <BsFillCheckCircleFill color="#EC255A"/>,
      destacado: <HiXMark />,
      basico: <HiXMark />,
    },
  ];