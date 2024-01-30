/* eslint-disable */
'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface Props {
    text: string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    border: boolean,
    bgColor: string,
    brColor?: string,
    txColor: string,
    width?: string,
    txtCenter?: string,
    href?: string,
    // eslint-disable-next-line no-unused-vars
    onClick?: (...args: any[]) => any

}
export default function ButtonVariants({ text, leftIcon, rightIcon, bgColor, txColor, border, brColor, width, href, onClick }: Props) {
    const pathname = usePathname()
    if (onClick) {
        return (
            <button onClick={onClick} className={border ? `border ${brColor} ${bgColor}  rounded-[4px] px-6 py-3 flex  justify-center ${width} text-center` : ` ${bgColor}  rounded-[4px] px-6 py-3 flex justify-center ${width} text-center`}>
                <section className={`${txColor} ` + "text-[24px]"}>
                    {leftIcon}
                </section>
                <span className={`${rightIcon ? 'mr-2' : ''} ${leftIcon ? 'ml-2' : ''} ${txColor}`} >{text}</span>
                <section className={`${txColor}` + "text-[24px]"}>
                    {rightIcon}
                </section>
            </button>
        )
    }; 
    return (

        // <Link href={pathname + href}>
        //     <div className={border ? `border ${brColor} ${bgColor} rounded-[4px] px-6 py-3 flex justify-center ${width} text-center` : ` ${bgColor} rounded-[4px] px-6 py-3 flex justify-center ${width} text-center`}>
        //         <section className={`${txColor} ` + "text-[24px]"}>
        //             {leftIcon}
        //         </section>
        //         <span className={`${rightIcon ? 'mr-2' : ''} ${leftIcon ? 'ml-2' : ''} ${txColor}`} >{text}</span>
        //         <section className={`${txColor}` + "text-[24px]"}>
        //             {rightIcon}
        //         </section>
        //     </div>
        // </Link>

        <Link href={"" + href} className={border ? `border ${brColor} ${bgColor}  rounded-[4px] px-6 py-3 flex  justify-center ${width} text-center` : ` ${bgColor}  rounded-[4px] px-6 py-3 flex justify-center ${width} text-center`}>
            <section className={`${txColor} ` + "text-[24px]"}>
                {leftIcon}
            </section>
            <span className={`${rightIcon ? 'mr-2' : ''} ${leftIcon ? 'ml-2' : ''} ${txColor}`} >{text}</span>
            <section className={`${txColor}` + "text-[24px]"}>
                {rightIcon}
            </section>
        </Link>
    )
}