
import SectionForm from "../../../components/home/home/SectionForm";
import SectionHome2 from "../../../components/home/home/SectionHome2";
import SectionHome3 from "../../../components/home/home/SectionHome3";
import SectionHome4 from "../../../components/home/home/SectionHome4";
import SectionHome5 from "../../../components/home/home/SectionHome5";

export default function Page() {
  return (
    <main className="space-y-10  tracking-[-0.16px] bg-[#F7F8FA]">
      <SectionForm />
      <SectionHome2 />
      <SectionHome3 />
      <SectionHome4 />
      <SectionHome5 />
    </main>

  );
}

