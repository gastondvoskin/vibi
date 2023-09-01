'use client'
import AuthFooter from "../../components/auth/AuthFooter";
import AuthHeader from "../../components/auth/AuthHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <AuthHeader />
      <main className={"font-normal max-w-screen h-full text-[#102C57] bg-[#F7F8FA]"}>
        {children}
      </main>
      <AuthFooter />
    </>
  );
}
