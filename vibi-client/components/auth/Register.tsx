import ButtonVariants from "../commons/ButtonVariants"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { SubTitle, Title } from "./common/Texts"

const Register = () => {
    return (
        <div className="max-w-[552px] mx-auto ">
            <div className="flex flex-col gap-8 items-center bg-white w-full border border-slate-300  rounded-xl py-12">
                <div>
                    <Title text='¡Bienvenido a Vibi!' />
                    <SubTitle text='Vamos a crear una cuenta para ti.' />
                </div>
                <div className="flex flex-col gap-4 max-w-[306px]">
                    <ButtonVariants text="Regístrate con tu celular" border={false} bgColor="bg-[#EC255A]" txColor="text-white" width="w-full" />
                    <div className="w-[306px] h-[22px] justify-center items-center gap-2 inline-flex">
                        <div className="w-[140px] h-0 border border-slate-400"></div>
                        <div className="text-slate-400 text-lg font-normal leading-snug">o</div>
                        <div className="w-[139px] h-0] border border-slate-400"></div>
                    </div>
                    <ButtonVariants leftIcon={<FcGoogle />} text="Continua con Google" border brColor="border-slate-400" bgColor="bg-white" txColor="text-[#102C57]" width="w-full" />
                    <ButtonVariants leftIcon={<FaFacebook />} text="Continua con Facebook" border brColor="border-slate-400" bgColor="bg-white" txColor="text-[#102C57]" width="w-full" />

                </div>
            </div>
            <div className="flex flex-row justify-between mt-6">
                <p className="font-semibold text-base">¿Olvidaste tu contraseña?</p>
                <p >¿Ya tienes una cuenta? <a href="#" className="font-semibold text-base">Inicia sesión</a></p>
            </div>
        </div>
    )
}
export default Register