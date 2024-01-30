import { HiOutlineMail } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";

export default function FooterContact() {
  return (
    <>
    <section className="w-56 mb-20">
      <p className="font-semibold h-5 mb-4">Contacto</p>
      <div className="flex mb-4 items-center">
        <div className="mr-2">
          <HiOutlineMail />
        </div>
        <span>info@vibi.com</span>
      </div>
      <div className="flex items-center">
        <div className="mr-2">
          <RiWhatsappFill />
        </div>
        <span>Contacta con un agente</span>
      </div>
      </section>
    </>
  );
}
