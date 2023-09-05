import React, { useState } from "react";
import Image from "next/image";
import { serviceData } from "../../../utils/pasarelaData";
import CheckBox from "./commons/CheckBox";
import { Portal } from "react-portal";
import { ModalContent } from "./ModalContent";

interface Service {
  image: string;
  text: string;
}

export default function Section3() {
  const [checkBoxes, setCheckBoxes] = useState<boolean[]>(
    serviceData.map(() => false)
  );

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckBoxChange = (index: number) => {
    const updatedCheckBoxes = [...checkBoxes];
    updatedCheckBoxes[index] = !updatedCheckBoxes[index];
    setCheckBoxes(updatedCheckBoxes);
  };

  const isHovered = (index: number) => {
    return hoveredIndex === index;
  };

  return (
    <div className="">
      <div className="flex flex-wrap w-[743px] justify-between z-10 relative">
        {serviceData.map((e: Service, index: number) => (
          <div
            key={index}
            className={`relative w-60 h-full my-2 bg-gray-100 border-2 rounded-md p-2 ${
              checkBoxes[index] ? "border-primary" : ""
            }`}
          >
            <Image
              src={e.image}
              alt={e.image}
              width={80}
              height={80}
              className="w-56 h-40"
            />
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                className={`${
                  isHovered(index)
                    ? "bg-primary text-white"
                    : "bg-white text-vibiDarkBlue"
                } py-1 px-4 absolute top-24 right-10 transform translate-y-1/2 rounded-xl`}
                onClick={openModal}
              >
                {isHovered(index) ? "Más Información" : e.text}
              </button>
            </div>

            <div className="pt-3">
              <CheckBox
                checked={checkBoxes[index]}
                label="Seleccionar este servicio"
                onChange={() => handleCheckBoxChange(index)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="relative z-50">
        {isModalOpen && (
          <Portal>
            <ModalContent onClose={closeModal} content={hoveredIndex !== null ? serviceData[hoveredIndex]?.text || "" : ""} />
          </Portal>
        )}
      </div>
    </div>
  );
}
