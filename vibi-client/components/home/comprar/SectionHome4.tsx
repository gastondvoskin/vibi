import ButtonVariants from "../../commons/ButtonVariants";

const SectionHome4 = () => {
    return (
        <div className="mx-12">
            <div className="flex flex-row justify-between max-h-[540px] shadow_home bg-white ps-4">
                <div className="w-[35%] py-10 px-7">
                    <div className="mb-10">
                        <div className="mb-2">
                            <p className="font-bold text-4xl text-vibiDarkBlue pb-0.5">
                                Vende tu casa y <strong className="text-primary pb-0.5 font-bold">olvídate de trámites</strong> interminables
                            </p>
                        </div>
                        <p className="font-normal">
                            Te asesoramos en todo el proceso de venta de tu propiedad de forma segura, transparente y sobre todo online.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <ButtonVariants text="Iniciar registro de propiedad" border bgColor="bg-primary" txColor="text-white" width="w-[85%]" />
                        <ButtonVariants text="Ayúdame a vender con un agente" border brColor="border-primary" bgColor="bg-white" txColor="text-primary" width="w-[85%]" />
                    </div>
                </div>
                <div className="w-[40%] bg-[url('/home4.png')] h-[474px]">
                    <div className="relative top-[47%] w-[90%] mx-auto bg-white z-10 p-6 rounded-sm">

                        <h2 className="text-2xl mb-2 font-bold text-vibiDarkBlue">
                            Realiza la tasación de tu casa
                        </h2>
                        <p className="font-normal mb-4">
                            Nuestra herramienta esta disponible para que puedas realizar la tasación de tu propiedad online de forma segura y confidencial.
                        </p>
                        <ButtonVariants text="Empezar con la tasación" border brColor="border-primary" bgColor="bg-white" txColor="text-primary" width="w-[75%]" />
                    </div>


                </div>
            </div>
        </div>

    )
}
export default SectionHome4;