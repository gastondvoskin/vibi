import SectionForm from "../../../../components/home/comprar/SectionForm";
import SectionHome2 from "../../../../components/home/comprar/SectionHome2";
import SectionHome3 from "../../../../components/home/comprar/SectionHome3";
import SectionHome4 from "../../../../components/home/comprar/SectionHome4";
import SectionHome5 from "../../../../components/home/comprar/SectionHome5";

export default function Page() {
    return (
        <main className="space-y-10  tracking-[-0.16px]">
            <SectionForm />
            <SectionHome2 />
            <SectionHome3 />
            <SectionHome4 />
            <SectionHome5 />
        </main>

    );
}
