import type { ChangeEvent } from "react"

interface Props {
    placeholder: string;
    value: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

export default function InputRegister({ placeholder, value, name, onChange }: Props) {

    return (
        <>
            <input className="pl-4 pr-2 py-[13px] border w-full text-sm border-vibiGreyInput rounded-[4px] outline-none hover:border-primary focus:border-primary" placeholder={placeholder} value={value} onChange={onChange} name={name}></input>
        </>
    )
}