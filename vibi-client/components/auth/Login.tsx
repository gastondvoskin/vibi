"use client"
import ButtonVariants from "../commons/ButtonVariants"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { SubTitle, Title } from "./common/Texts"
import InputRegister from "./common/Inputs"
import { useState } from "react"
import type { ChangeEvent } from "react"


const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="max-w-[552px] mx-auto ">
            <div className="flex flex-col gap-8 items-center bg-white w-full border border-slate-300  rounded-xl py-12">
                <div>
                    <Title text='¡Bienvenido otra vez!' />
                    <SubTitle text='Ingresa tus datos para iniciar sesión.' />
                </div>
                <div className="flex flex-col gap-4 max-w-[306px]">
                    <div>
                        <label className="text-xs text-vibiDarkBlue">Email</label>
                        <InputRegister placeholder="Escribe tu email" onChange={handleOnChange} value={form.email} name='email' />
                    </div>
                    <div>
                        <label className="text-xs text-vibiDarkBlue">Contraseña</label>
                        <InputRegister placeholder="Escribe tu contraseña" onChange={handleOnChange} value={form.password} name='password' />
                    </div>
                    <ButtonVariants text="Regístrate con tu celular" border={false} bgColor="bg-[#EC255A]" txColor="text-white" width="w-full" onClick={() => alert("Próximamente")}/>
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
                <p className="font-semibold text-base underline decoration-red-500">¿Olvidaste tu contraseña?</p>
                <p >¿Ya tienes una cuenta? <a href="#" className="font-semibold text-base underline decoration-red-500">Inicia sesión</a></p>
            </div>
        </div>

    )
}

export default Login