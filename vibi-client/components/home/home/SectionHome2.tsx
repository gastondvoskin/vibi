"use client"; 

import ButtonVariants from "../../commons/ButtonVariants";

const SectionHome2 = () => {
    return (
        <div className="mx-12">
            <div className="flex flex-row justify-between max-h-[540px] shadow_home bg-white ps-4">
                <div className="w-1/3 py-10 mx-7">
                    <div className="mb-12">
                        <div className="mb-3">
                            <p className="font-bold text-4xl text-vibiDarkBlue pb-0.5 ">
                                Elige dónde quieres vivir <strong className="text-primary pb-0.5">¡Tu futuro hogar te espera!</strong>
                            </p>
                        </div>
                        <p className="font-normal">
                            Cuéntanos que estás buscando y nuestro sistema te mostrará las mejores alternativas e información para que tomes la decisión adecuada. ¡Sigamos logrando finales felices!
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-4 h-40" >
                        {/* h-40 added to replace the unfunctional buttons */}
                       {/*  <ButtonVariants 
                            border={true}
                            bgColor="bg-primary" 
                            txColor="text-white" 
                            width="w-[85%]" 
                            href={"/compra"}
                            text="Ver propiedades para comprar" 
                        /> */}
                        {/* <ButtonVariants text="¿Cómo comprar en Vibi?" border brColor="border-primary" bgColor="bg-white" txColor="text-primary" width="w-[85%]" onClick={() => alert("Próximamente")}/> */}
                    </div>
                </div>
                <div className="w-[40%] bg-[url('/home2.png')]">
                    <div className="relative top-[45%] w-[90%] mx-auto bg-white z-10 p-6 rounded-sm">

                        <h2 className="text-2xl mb-2 font-bold text-vibiDarkBlue">
                            ¿Es tu primera vivienda?
                        </h2>
                        <p className="font-normal mb-4">
                            Sino eres propietario o copropietario de una vivienda en todo el país y tus ingresos familiares mensuales que no excedan el valor de<strong> S/ 3,715.00. Accede al financiamiento que otorga el Estado.</strong></p>
                        <ButtonVariants text="Aplica a este programa" border brColor="border-primary" bgColor="bg-white" txColor="text-primary" width="w-[75%]" onClick={() => alert("Próximamente")}/>
                    </div>


                </div>
            </div>
        </div>

    )
}
export default SectionHome2;