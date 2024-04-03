import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/constants/authProvider";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/signin")
  }
  
  return (
    <>
      <DefaultLayout>
        <h1>Home</h1>
        {/* {
          data.map((item:any)=>{
            return(
              <h1>{item.username}</h1>
            )
          })
        } */}
      </DefaultLayout>
    </>
  );
}
