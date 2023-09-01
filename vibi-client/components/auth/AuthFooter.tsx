import Image from "next/image";
import Link from "next/link";

const AuthFooter = () => {
    return (
        <div className="flex flex-row justify-around h-28 items-center fixed bottom-0 w-full bg-[#F7F8FA]">
            <div >
                <Link href={'/'}>
                    <Image src={'/logo.png'} alt="Logo" width={95} height={32} />
                </Link>
            </div>
            <div className="w-fit h-12 px-6 py-3 flex  justify-center items-center">
                <div className="text-center text-blue-950 text-sm leading-none">Vibi Copyright © 2000-2023</div>
            </div>
        </div>
    );
}

export default AuthFooter;