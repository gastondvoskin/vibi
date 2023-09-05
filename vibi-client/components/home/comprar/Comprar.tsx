'use client'

import useBuy from "../../../hooks/useBuy";
import { InputAutocomplete } from "./InputAutocomplete";
import ButtonVariants from "../../commons/ButtonVariants"

const citiesPeru = [
    {
        value: "lima",
        label: "Lima",
    },
    {
        value: "callao",
        label: "Callao",
    },
    {
        value: "ica",
        label: "Ica",
    },
    {
        value: "arequipa",
        label: "Arequipa",
    },
    {
        value: "trujillo",
        label: "Trujillo",
    },
]

const districtLima = [
    {
        value: "miraflores",
        label: "Miraflores",
    },
    {
        value: "sanisidro",
        label: "San Isidro",
    },
    {
        value: "sanborja",
        label: "San Borja",
    },
    {
        value: "surco",
        label: "Surco",
    },
    {
        value: "surquillo",
        label: "Surquillo",
    },
    {
        value: "barranco",
        label: "Barranco",
    },
    {
        value: "chorrillos",
        label: "Chorrillos",
    },
    {
        value: "sanmiguel",
        label: "San Miguel",
    },
    {
        value: "jesusmaria",
        label: "Jesus Maria",
    },
    {
        value: "magdalena",
        label: "Magdalena",
    },
    {
        value: "pueblolibre",
        label: "Pueblo Libre",
    },
]

const budgets = [
    {
        value: "100,000",
        label: "100,000",
    },
    {
        value: "200,000",
        label: "200,000",
    },
    {
        value: "300,000",
        label: "300,000",
    },
    {
        value: "400,000",
        label: "400,000",
    },
    {
        value: "500,000",
        label: "500,000",
    },
    {
        value: "600,000",
        label: "600,000",
    },
    {
        value: "700,000",
        label: "700,000",
    },
]
const roomsOptions = [
    {
        value: "1",
        label: "1",
    },
    {
        value: "2",
        label: "2",
    }, {
        value: "3",
        label: "3",
    }, {
        value: "4",
        label: "4",
    }, {
        value: "5",
        label: "5",
    },
]

const Comprar = () => {
    const { city, budget, district, rooms, setBudget, setCity, setDistrict, setRooms } = useBuy()

    return (
        <div className="w-full bg-[url('/parejaHome.png')] bg-cover h-[620px]">
            <form className="relative top-12 left-[72px] w-[464px] h-[524px] bg-white rounded-lg px-6 pt-8 space-y-4">
                <div className="flex flex-col items-start space-y-4">
                    <h1>Buscamos la mejor oferta</h1>
                    <p>Tu nuevo hogar te espera</p>
                </div>
                <div className="flex flex-row pb-4">
                    <div>
                        <p>Quiero comprar</p>
                    </div>
                    <div>
                        <p>Quiero alquilar</p>
                    </div>
                </div>
                <div>
                    <InputAutocomplete citiesPeru={citiesPeru} label="Departamentos" value={city} setValue={setCity} />
                </div>
                <div>
                    <InputAutocomplete citiesPeru={districtLima} label="Distritos" value={district} setValue={setDistrict} disabled={!city} />
                </div>
                <div className="flex flex-row gap-10 ">
                    <InputAutocomplete citiesPeru={budgets} label="Presupuesto" size='small' value={budget} setValue={setBudget} disabled={!district} />
                    <InputAutocomplete citiesPeru={roomsOptions} label="N de dormitorios" size='small' value={rooms} setValue={setRooms} disabled={!budget} />
                </div>


                <ButtonVariants text="Buscar propiedades" border bgColor='bg-vibiOrange' txColor="text-white" width="w-full" />


            </form>

        </div>
    )



}

export default Comprar;