import { ReactNode } from "react"

interface Props {
    text : string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    border: boolean,
    bgColor: string,
    brColor?: string,
    txColor: string
}
export default function ButtonMiniVariants({text, leftIcon, rightIcon, bgColor, txColor, border, brColor}:Props){
    return(
        <>
        <button className={ border ? `border-2 h-9 ${brColor} ${bgColor}  rounded-[4px]` : ` ${bgColor}  rounded-[4px]`}>
            <section className={`${txColor} ` + "text-[24px]"}>
                {leftIcon}
            </section>
            <span className={`px-6 py-3 ${txColor} `} >{text}</span>
            <section  className={`${txColor} ` + "text-[24px]"}>
                {rightIcon}
            </section>
        </button>
        </>
    )
}