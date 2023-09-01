import { SubTitle, Title } from "./common/Texts"
import { FaCircleInfo } from "react-icons/fa6"

const Register3 = () => {
    return (
        <div className="max-w-[552px] mx-auto ">
            <div className="flex flex-col items-center gap-8  bg-white border border-slate-300  rounded-xl py-12">
                <div className="w-[316px] flex flex-col gap-5">
                    <div>
                        <Title text='¡Último paso! Revisa tu correo electrónico.' />
                        <SubTitle text='Te hemos enviado un mensaje de confirmación al correo edgar.vibi@gmail.com.' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-1">
                            <FaCircleInfo color='#E74646' />
                            <p>¿No recibiste el correo?</p>
                        </div>
                        <p>
                            Sino encuentras el mensaje de confirmación en tu bandeja o carpeta de spam, vuelve a enviar el correo.
                        </p>
                        <button className="text-vibiOrange font-semibold text-base text-start">Reenviar correo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register3