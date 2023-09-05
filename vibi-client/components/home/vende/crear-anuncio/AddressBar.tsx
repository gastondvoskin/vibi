import ButtonVariants from "../../../commons/ButtonVariants";
import InputAddress from "./InputAddress";
import SelectAddress from "./SelectAddress";


export default function AddressBar() {


  return (
    <>
      <section className="flex py-4 px-6 space-x-4 w-fit bg-white shadow rounded-lg ">
        <label className="min-w-[320px] max-w-[329px]">
          <InputAddress onChange={() => a} placeholder="Escribe tu dirección" value=""/>
        </label>
        <label>
          <InputAddress onChange={() => a} placeholder="Número" value="" />
        </label>
        <SelectAddress first="Ciudad" onSelect={()=>a} options={["a","b","c"]} />
        <SelectAddress first="Ciudad" onSelect={()=>a} options={["a","b","c"]} />
        <ButtonVariants bgColor="bg-primary" text="Confirmar dirección" txColor="text-vibiWhite" border={false}/>
      </section>
    </>
  );
}
