import Footer from "../../components/home/Footer";
import NavBar from "../../components/home/NavBar";


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  
  return (
    <html lang="en">
      <body className={"font-normal max-w-[1280px] m-auto text-[#102C57]"}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
