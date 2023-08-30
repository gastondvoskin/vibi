
interface Props {
    placeholder : string
    value: string
    onChange: ()=>void
}

export default function InputAddress ({placeholder, value, onChange}: Props) {
    return(
        <>
        <input className="pl-4 pr-2 py-[13px] border w-full text-sm border-vibiGreyInput rounded-[4px] outline-none focus:border-primary" placeholder={placeholder} value={value} onChange={onChange}></input>
        </>
    )
}