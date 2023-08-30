import Image from "next/image";

export default function FooterLogoText() {
  return (
    <>
    <section className="w-72 h-36 mr-28 mb-20">
      <Image
        src={"/logo.png"}
        className="mb-5"
        width={96}
        height={32}
        alt="Logo ViBi"
      ></Image>
      <p className="text-base font-normal">
        Ayudando a innovar la compra venta de viviendas para todos a través de
        la tecnología.
      </p>
      </section>
    </>
  );
}
