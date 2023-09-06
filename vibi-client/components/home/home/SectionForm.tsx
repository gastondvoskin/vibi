'use client'

import { useState } from "react"
import { SubTitle } from "../vende/commons/LandingTexts";
import Form from "./SectionForm/Form";
import Type from "./common/Type";
const SectionForm = () => {
    const [form, setForm] = useState({
        department: '',
        district: '',
        budget: '',
        budgetAlquiler: '',
        rooms: ''
    })
    const [buy, setBuy] = useState(true)

    const clearForm = () => {
        setForm({
            department: '',
            district: '',
            budget: '',
            budgetAlquiler: '',
            rooms: ''
        })
    }
    const handleChangeBuy = (value: boolean) => {
        setBuy(value)
        clearForm()
    }

    const handleChangeForm = (value: string, name: string) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleChangeDepartment = (value: string) => {
        setForm({
            ...form,
            department: value,
            district: ''
        })
    }

    return (
        <div className="w-full bg-[url('/home1.png')] bg-cover h-[620px]">
            <div className="relative top-12 left-[72px] w-[464px] h-[524px] bg-white rounded-lg px-6 pt-8 space-y-5">
                <div className="flex flex-col items-start">
                    <SubTitle text="Buscamos la mejor oferta." showColor={true} size='text-3xl' />
                    <div className="flex flex-row gap-2">
                        <SubTitle text="Tu nuevo hogar" showColor={false} size="text-3xl" />
                        <SubTitle text="te espera." showColor={true} size="text-3xl" />
                    </div>
                </div>
                <div className="flex flex-row gap-5 border-b-2">
                    <button onClick={() => handleChangeBuy(true)}>
                        <Type text='Quiero comprar' selected={buy} />
                    </button>
                    <button onClick={() => handleChangeBuy(false)}>
                        <Type text='Quiero alquilar' selected={!buy} />
                    </button>
                </div>
                <Form form={form} handleChangeForm={handleChangeForm} buy={buy} handleChangeDepartment={handleChangeDepartment} />
            </div>

        </div>
    )



}

export default SectionForm;