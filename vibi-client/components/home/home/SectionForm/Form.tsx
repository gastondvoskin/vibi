
import { InputAutocomplete } from "../common/InputAutocomplete";
import ButtonVariants from "../../../commons/ButtonVariants"
export interface option {
    value: string
    label: string
}
import { departmentsPeru, budgets, budgetsAlquiler, districts, roomsOptions,propertyOptions } from "../../../../utils/homeFormData";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../../../redux/hooks";
import { setCityFilter,setMaxPriceFilter,setPropertyTypeFilter,setRoomsFilter } from "../../../../redux/actions/filterActions";
import { setCurrentPageAction } from "../../../../redux/actions/publicationActions";
// import { useRouter } from "next/router";
interface Districts {
    department: string
    districts: option[]
}
interface FormProps {
    form: {
        propertyType:string
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

    const router = useRouter()
    const { department, budget, budgetAlquiler, district, rooms,propertyType } = form
    const districtData: Districts[] = districts.filter((item) => item.department.toLowerCase() === department)
    const dispatch = useAppDispatch()

    function capitalizeFirstLetter(string : string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    const propertyConverted = capitalizeFirstLetter(form.propertyType);
    const departamentConverted = capitalizeFirstLetter(form.department);
      
    const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(form);
        console.log(propertyOptions);
        
        e.preventDefault()
        dispatch(setCityFilter(departamentConverted))
        dispatch(setPropertyTypeFilter(propertyConverted))
        dispatch(setMaxPriceFilter(Number(form.budget)))
        dispatch(setRoomsFilter(Number(form.rooms)))
        dispatch(setCurrentPageAction(1))
        router.push('/compra')
    }
    return (
        <form className="space-y-4" onSubmit={handleSubmmit}>
            <div>
            <InputAutocomplete data={propertyOptions} label="Tipo de propiedad"  name='propertyType' value={propertyType} setValue={handleChangeForm}  />

                {/* TODO: Cambiar a provincias el flujo por ahora solo cambie el label */}
                <InputAutocomplete data={departmentsPeru} label="Provincias" name='department' value={department} setValue={handleChangeDepartment} disabled={!propertyType}/>
            </div>
            {/* <div>
                <InputAutocomplete data={districtData[0]?.districts} label="Distritos" name='district' value={district} setValue={handleChangeForm} disabled={!department} />
            </div> */}
            <div className="flex flex-row gap-10 ">
                {buy && <InputAutocomplete data={budgets} label="Presupuesto" size='small' name='budget' value={budget} setValue={handleChangeForm} disabled={!department} extraText={true} />}
                {!buy && <InputAutocomplete data={budgetsAlquiler} label="Alquiler" size='small' name='budgetAlquiler' value={budgetAlquiler} setValue={handleChangeForm} disabled={!district} extraText={true} />}
                <InputAutocomplete data={roomsOptions} label="N de dormitorios" size='small' name='rooms' value={rooms} setValue={handleChangeForm} disabled={!budget && !budgetAlquiler} />
            </div>

            <ButtonVariants text="Buscar propiedades" onClick={() => console.log('N')} border bgColor='bg-primary' txColor="text-white" width="w-full" />
        </form>
    )

}

export default Form