import ButtonVariants from "../../commons/ButtonVariants";
import olvidate from "../../../assets/icons/olvidate-de-buscar.svg"; 
import Image from "next/image";

const OlvidateDeBuscar = () => {
  return (
    <div className="w-64 h-96 relative">
      <div className="w-64 h-96 left-0 top-0 absolute bg-red-50 border border-rose-600" />
      <div className="w-64 h-80 left-0 top-[27px] absolute flex-col justify-start items-center gap-10 inline-flex">
        <div className="w-28 h-28 relative"><Image src={olvidate} alt="Olvidate de buscar"/></div>
        <div className="h-44 px-4 flex-col justify-center items-center gap-6 flex">
          <div className="self-stretch h-24 flex-col justify-center items-center gap-4 flex my-3">
            <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-center text-blue-950 text-base font-semibold leading-tight">
                ¡Olvídate de buscar!
              </div>
              <div className="self-stretch text-center">
                <span className="text-blue-950 text-sm font-normal leading-none">
                  Te enviamos notificaciones con los mejores resultados que
                  coincidan con tus requerimientos, todo esto por{" "}
                </span>
                <span className="text-blue-950 text-sm font-semibold leading-none">
                  WhatsApp
                </span>
                <span className="text-blue-950 text-sm font-normal leading-none">
                  .
                </span>
              </div>
            </div>
          </div>
          <ButtonVariants
            border={true}
            bgColor="bg-primary"
            txColor="text-vibiWhite"
            text="Empezar ahora"
            href={"/whatsapp"}
          />
          {/* <div className="self-stretch h-12 px-6 py-3 bg-rose-600 rounded border border-rose-600 justify-center items-center gap-2 inline-flex">
            <div className="w-28 justify-center items-center gap-2 flex">
              <div className="text-center text-white text-base font-medium leading-none">
                Empezar ahora
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OlvidateDeBuscar;
