import Footer from "../../components/home/Footer";
import NavBar from "../../components/home/NavBar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (

    <div className={"font-normal max-w-[1280px] flex flex-col justify-center m-auto bg-white text-[#102C57]"}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
