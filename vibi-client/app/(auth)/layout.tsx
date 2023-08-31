'use client'
import AuthHeader from "../../components/auth/AuthHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <AuthHeader />
      <main className={"font-normal max-w-[1280px] m-auto text-[#102C57] bg-[#F7F8FA]"}>
        {children}
      </main>
    </>
  );
}
