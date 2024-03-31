import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default async function Home() {
  // const user = await getServerSession()
  // console.log("🚀 ~ Home ~ user:", user)
  // if (!user) {
  //   redirect("/auth/signin")
  // }
  
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
