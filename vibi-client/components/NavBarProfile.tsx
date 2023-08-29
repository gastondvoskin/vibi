import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function NavBarProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [userLogged, setUserLogged] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    localStorage.setItem("isLogged", "false");
    setUserLogged(false);
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const aux = localStorage.getItem("isLogged") || "false";
      setUserLogged(JSON.parse(aux));
    }
  }, []);

  return (
    <>
      <section className=" flex space-x-2">
        <Image
          src={"/Avatar.png"}
          width={48}
          height={48}
          alt="profileImage"
          className="rounded-full border border-[#C1CBDA]"
        />

        <button onClick={toggleMenu} className="">
          <BsChevronDown color={"#C1CBDA"} />
        </button>
      </section>
      {isOpen ? (
        !userLogged ? (
          <section className="">
            <div className="absolute top-20   bg-vibiWhite flex flex-col px-8 shadow-lg rounded-lg">
              <Link href="/login" className="border-b border-mygrey py-4 m-auto">
                Inicia sesión
              </Link>
              <div className="my-4 flex flex-col space-y-1">
                <Link href="/register" className="text-vibiDarkGrey text-xs m-auto">
                  ¿Eres nuevo en Vibi?
                </Link>
                <Link href="/register" className="m-auto">
                  Regístrate
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <section className="">
            <div className="absolute top-20 right-[350px] bg-vibiWhite flex flex-col px-8 shadow-lg rounded-lg">
              <Link href="/user/profile" className="border-b border-mygrey py-4 m-auto">
                Ve a tu perfil
              </Link>
              <Link href={"/home"} onClick={logOut} className="text-vibiDarkGrey my-4 m-auto">
                Cerrar sesión
              </Link>
            </div>
          </section>
        )
      ) : (
        <section className=""></section>
      )}
    </>
  );
}
