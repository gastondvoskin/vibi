import Image from "next/image";
import agenteVivi from "../../../assets/agenteVivi.png";
import check from "../../../assets/check-circle.png";
import ButtonVariants from "../../commons/ButtonVariants";
import {RiWhatsappFill} from "react-icons/ri"


interface AdvertisingProps {
    current_price: number | undefined;
    previous_price: number | undefined;
}

const Advertising = ({current_price, previous_price}: AdvertisingProps) => {
  return (
    <div className="w-96 h-96 p-7 bg-white rounded-lg border border-slate-200 flex-col justify-start items-start gap-5 inline-flex">
      <div className="flex-col justify-start items-start gap-6 flex">
        <div className="h-48 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch h-28 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch h-20 flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch h-20 flex-col justify-start items-start gap-5 flex">
                <div className="p-1.5 bg-white rounded border border-rose-600 justify-start items-start gap-2.5 inline-flex">
                  <div className="text-rose-600 text-xs font-semibold uppercase leading-none tracking-tight">
                    Precio destacado
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-zinc-900 text-4xl font-bold">
                    $ {current_price}
                  </div>
                  <div className="text-slate-500 text-base font-medium line-through">
                    $ {previous_price}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px border border-slate-200"></div>
          </div>
          <div className="self-stretch justify-start items-start gap-3 inline-flex">
            <div className="w-12 h-12 justify-center items-center flex">
              <div className="w-12 h-12 relative">
                <Image
                  className="w-12 h-12 left-0 top-0 absolute rounded-full border border-rose-600"
                  src={agenteVivi}
                  alt="Agente Vivi"
                />
                <div className="w-5 h-5 left-[28px] top-[28px] absolute">
                  <div className="w-3.5 h-3.5 left-[2.50px] top-[2.50px] absolute bg-neutral-50 rounded-full" />
                  <Image
                    className="w-5 h-5 left-0 top-0 absolute"
                    src={check}
                    alt="verified"
                  />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch text-blue-950 text-lg font-semibold leading-normal">
                Agente Vibi asignado
              </div>
              <div className="self-stretch text-slate-500 text-sm font-normal leading-none tracking-tight">
                Solicita una visita gratuita y sin compromiso.{" "}
              </div>
            </div>
          </div>
        </div>

        <ButtonVariants text="Solicita una visita" onClick={() => alert('Próximamente')} border bgColor='bg-primary' txColor="text-white" width="w-full" />
        <ButtonVariants text="Contacta a un agente" onClick={() => alert('Próximamente')} leftIcon={<RiWhatsappFill/>} border={false} bgColor="bg-vibiGreen" txColor="text-vibiWhite" width="w-full"/>
      </div>
    </div>
  );
};

export default Advertising;
