import { ReactNode } from "react"

interface Props {
    text : string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    border: boolean,
    bgColor: string,
    txColor: string
}
export default function ButtonVariants({text, leftIcon, rightIcon, bgColor, txColor, border}:Props){
    const bg =  "bg-"+bgColor
    console.log(bg)
    return(
        <>
        <button className={ + border ? `border border-${txColor} ${bg}  rounded-[4px] px-6 py-3 flex` : ""}>
            <section className={`text-${txColor} text-[24px]`}>
                {leftIcon}
            </section>
            <span className={`mx-2 text-${txColor}`} >{text}</span>
            <section  className={`text-${txColor} text-[24px]`}>
                {rightIcon}
            </section>
        </button>
        </>
    )
}