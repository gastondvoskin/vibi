export const Title = ({ text, showColor }: { text: string, showColor?: boolean }) => {
    return (
        <h1 className={`text-xl font-bold ${showColor ? "text-vibiDarkBlue" : "text-slate-800"}`}>{text}</h1>
    )
}

export const SubTitle = ({ text, showColor }: { text: string, showColor?: boolean }) => {
    return (
        <h2 className={`text-lg font-normal ${showColor ? "text-vibiDarkBlue" : "text-slate-800"}`}>{text}</h2>
    )
}
