import Image from "next/image";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function NavBarProfile() {
  const userLogged = localStorage.getItem("isLogged")
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="flex space-x-2">
        <Image
          src={"/Avatar.png"}
          width={48}
          height={48}
          alt="profileImage"
          className="rounded-full border border-[#C1CBDA]"
        />
        {!userLogged ? <button onClick={toggleMenu} className="">
          <BsChevronDown color={"text-vibiDarkGrey"} />
        </button> : ""}
      </section>
      {isOpen ? (
        <section>
          <div className="absolute bg-vibiWhite flex flex-col px-8 shadow-lg rounded-lg">
            <button className="border-b border-mygrey py-4">
              {" "}
              Inicia sesión
            </button>
            <div className="my-4 flex flex-col space-y-1">
              <button className="text-vibiDarkGrey">
                ¿Eres nuevo en Vibi?
              </button>
              <button> Registrate </button>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
