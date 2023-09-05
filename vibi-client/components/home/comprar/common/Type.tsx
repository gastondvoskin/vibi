
interface TypeProps {
    text: string
    underline?: boolean
}

const Type = ({ text, underline }: TypeProps) => {

    return (
        <div className="flex-col justify-start items-start gap-3 ">
            <div className="justify-start items-start gap-2 pb-3">
                <p className="text-blue-950 text-base font-medium ">{text}</p>
            </div>
            <div className={`self-stretch h-[3px]  bg-rose-600 ${!underline && 'invisible'}`} />
        </div>
    )


}

export default Type;