
interface TypeProps {
    text: string
    selected?: boolean
}

const Type = ({ text, selected }: TypeProps) => {

    return (
        <div className="flex-col justify-start items-start gap-3 ">
            <div className="justify-start items-start gap-2 pb-3">
                <p className={`text-blue-950 text-base ${selected && 'font-bold'} `}>{text}</p>
            </div>
            <div className={`self-stretch h-[3px]  bg-rose-600 ${!selected && 'invisible'}`} />
        </div>
    )


}

export default Type;