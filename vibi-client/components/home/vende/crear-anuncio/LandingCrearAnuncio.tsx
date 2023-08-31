import Image from "next/image";

export default function LandingCrearAnuncio(){
    return(
        <>
        <section>
            <Image src={"/landingcrear.png"} alt="landingcrear" width={2500} height={2500} className="w-full"></Image>
        </section>
        </>
    )
}