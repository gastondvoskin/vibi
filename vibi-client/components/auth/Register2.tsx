'use client'
import { useState } from "react"
import type { ChangeEvent } from "react"
import InputRegister from "./common/Inputs"
import { Title, SubTitle } from "./common/Texts"
import ButtonVariants from "../commons/ButtonVariants"
const Register2 = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
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
                <div className="w-[306px] flex flex-col gap-8">
                    <div>
                        <Title text='Vamos a crear tu cuenta' showColor />
                        <SubTitle text='Completa los datos solicitados.' showColor />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="text-xs text-vibiDarkBlue">Nombre</label>
                            <InputRegister placeholder="Escribe tu nombre" onChange={handleOnChange} value={form.name} name='name' />
                        </div>
                        <div>
                            <label className="text-xs text-vibiDarkBlue">Nombre</label>
                            <InputRegister placeholder="Escribe tu correo" onChange={handleOnChange} value={form.email} name='email' />
                        </div>
                        <div>
                            <label className="text-xs text-vibiDarkBlue">Nombre</label>
                            <InputRegister placeholder="9 dígitos" onChange={handleOnChange} value={form.phone} name='phone' />
                        </div>
                        <div>
                            <label className="text-xs text-vibiDarkBlue">Nombre</label>
                            <InputRegister placeholder="Escribe tu correo" onChange={handleOnChange} value={form.password} name='password' />
                        </div>
                        <ButtonVariants text="Envia tus datos" bgColor="bg-vibiOrange" txColor="text-white" width="w-full" border brColor="border-slate-400" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center mt-6">
                <p >¿Ya tienes una cuenta? <a href="#" className="font-semibold text-base underline decoration-red-500">Inicia sesión</a></p>
            </div>
        </div >
    )
}

export default Register2