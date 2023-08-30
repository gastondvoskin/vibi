import Image from "next/image";

export default function FooterLogo() {
  return (
    <>
    
      <section className="flex justify-between w-full items-center px-24 py-1">
      <Image
        src={"/logo.png"}
        className=""
        width={96}
        height={32}
        alt="Logo ViBi"
      >
      </Image>
      <p>Vibi Copyright © 2000-2023</p>
      </section>
      
    </>
  );
}
