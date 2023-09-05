/* eslint-disable no-unused-vars */
import { InputAutocomplete } from "../common/InputAutocomplete";
import ButtonVariants from "../../../commons/ButtonVariants"
export interface option {
    value: string
    label: string
}
import { citiesPeru, budgets, budgetsAlquiler, districts, roomsOptions } from "../../../../utils/homeFormData";
interface Districts {
    city: string
    districts: option[]
}
interface FormProps {
    form: {
        city: string
        district: string
        budget: string
        rooms: string
        budgetAlquiler: string
    }
    handleChangeForm: (value: string, name: string) => void
    handleChangeCity: (value: string, name: string) => void
    buy: boolean
}

const Form = ({ form, handleChangeForm, buy, handleChangeCity }: FormProps) => {


    const { city, budget, budgetAlquiler, district, rooms } = form
    const districtData: Districts[] = districts.filter((item) => item.city.toLowerCase() === city)

    const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form)
    }
    return (
        <form className="space-y-4" onSubmit={handleSubmmit}>
            <div>
                <InputAutocomplete data={citiesPeru} label="Departamentos" name='city' value={city} setValue={handleChangeCity} />
            </div>
            <div>
                <InputAutocomplete data={districtData[0]?.districts} label="Distritos" name='district' value={district} setValue={handleChangeForm} disabled={!city} />
            </div>
            <div className="flex flex-row gap-10 ">
                {buy && <InputAutocomplete data={budgets} label="Presupuesto" size='small' name='budget' value={budget} setValue={handleChangeForm} disabled={!district} extraText={true} />}
                {!buy && <InputAutocomplete data={budgetsAlquiler} label="Alquiler" size='small' name='budgetAlquiler' value={budgetAlquiler} setValue={handleChangeForm} disabled={!district} extraText={true} />}
                <InputAutocomplete data={roomsOptions} label="N de dormitorios" size='small' name='rooms' value={rooms} setValue={handleChangeForm} disabled={!budget && !budgetAlquiler} />
            </div>

            <ButtonVariants text="Buscar propiedades" border bgColor='bg-primary' txColor="text-white" width="w-full" />
        </form>
    )

}

export default Form