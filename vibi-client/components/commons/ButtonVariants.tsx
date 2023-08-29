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
export default function ButtonVariants({text, leftIcon, rightIcon, bgColor, txColor, border, brColor}:Props){
    return(
        <>
        <button className={ border ? `border ${brColor} ${bgColor}  rounded-[4px] px-6 py-3 flex` : ` ${bgColor}  rounded-[4px] px-6 py-3 flex`}>
            <section className={`${txColor} ` + "text-[24px]"}>
                {leftIcon}
            </section>
            <span className={`mx-2 ${txColor} `} >{text}</span>
            <section  className={`${txColor} ` + "text-[24px]"}>
                {rightIcon}
            </section>
        </button>
        </>
    )
}