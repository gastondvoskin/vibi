import Image from "next/image";
import Link from "next/link";

const AuthHeader = () => {
    return (
        <div className="flex flex-row justify-around h-24 items-center">
            <div >
                <Link href={'/'}>
                    <Image src={'/logo.png'} alt="Logo" width={95} height={32} />
                </Link>
            </div>
            <div className="w-fit h-12 px-6 py-3 flex rounded border border-slate-400 justify-center items-center">
                <div className="text-center text-blue-950 text-base font-medium leading-none">Vuelve a Vibi</div>
            </div>
        </div>
    );
}

export default AuthHeader;