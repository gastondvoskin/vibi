import Image from "next/image";
import ButtonVariants from "../../commons/ButtonVariants";

const SectionHome5 = () => {
    return (
        <div>
            <div className="flex flex-row max-h-[540px] mx-12 bg-white shadow_home">

                <div className="w-[40%]  bg-[#F7C6DD] p-16">
                    <Image src="/calculator.svg" width={500} height={500} alt='calculator' />
                </div>
                <div className="w-[45%] py-10 px-16">
                    <div className="mb-12">
                        <div className="mb-3">
                            <p className="font-bold text-4xl text-primary pb-0.5 line-clamp-3 ">
                                Financia tu propiedad <strong className="text-vibiDarkBlue pb-0.5">¡Que el dinero no de detenga!</strong>
                            </p>
                        </div>
                        <p className="font-normal mb-3">
                            Escoge el lugar y propiedad ideal, agenda tu visita virtual o presencial y cierra el trato.
                        </p>
                        <p>
                            ¡Listo! Sin intermediarios y garantía.
                        </p>
                    </div>
                    {/* <div className="flex flex-col items-start gap-4">
                        <ButtonVariants text="Ver propiedades para alquilar" border bgColor="bg-primary" txColor="text-white" width="w-[75%]" />
                        <ButtonVariants text="Quiero saber más" border brColor="border-primary" bgColor="bg-white" txColor="text-primary" width="w-[75%]" />
                    </div> */}
                </div>
            </div>
        </div>

    )
}
export default SectionHome5;