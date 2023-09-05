
import { InputAutocomplete } from "../common/InputAutocomplete";
import ButtonVariants from "../../../commons/ButtonVariants"
export interface option {
    value: string
    label: string
}
import { departmentsPeru, budgets, budgetsAlquiler, districts, roomsOptions } from "../../../../utils/homeFormData";
interface Districts {
    department: string
    districts: option[]
}
interface FormProps {
    form: {
        department: string
        district: string
        budget: string
        rooms: string
        budgetAlquiler: string
    }
    // eslint-disable-next-line no-unused-vars
    handleChangeForm: (value: string, name: string) => void
    // eslint-disable-next-line no-unused-vars
    handleChangeDepartment: (value: string, name: string) => void
    buy: boolean
}

const Form = ({ form, handleChangeForm, buy, handleChangeDepartment }: FormProps) => {


    const { department, budget, budgetAlquiler, district, rooms } = form
    const districtData: Districts[] = districts.filter((item) => item.department.toLowerCase() === department)

    const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form)
    }
    return (
        <form className="space-y-4" onSubmit={handleSubmmit}>
            <div>
                {/* TODO: Cambiar a provincias el flujo por ahora solo cambie el label */}
                <InputAutocomplete data={departmentsPeru} label="Provincias" name='department' value={department} setValue={handleChangeDepartment} />
            </div>
            <div>
                <InputAutocomplete data={districtData[0]?.districts} label="Distritos" name='district' value={district} setValue={handleChangeForm} disabled={!department} />
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