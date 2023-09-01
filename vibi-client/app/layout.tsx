import "./globals.css";
import type { Metadata } from "next";


/* import axios from "axios";

axios.defaults.baseURL = import.meta.env.API_BASEURL || "http://localhost:3001"; */

export const metadata: Metadata = {
  title: "Vibi",
  description: "Generated by create next app",
};
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html lang="en">
        <body className={"font-normal max-w-[1280px] m-auto text-[#102C57]"}>
          {children}
        </body>
      </html>

  );
}
