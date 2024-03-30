import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/config/prisma";
// import dbConnect from "@/config/db";
// import userModel from "@/model/user";
export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};
async function fetchUser() {
  try {
    // await dbConnect(); // Ensure database connection
    // const data = await userModel.find();
    const allUsers = await prisma.profile.findMany()
    return allUsers;
  } catch (error) {
    console.log("Error fetching user data:", error);
    throw error;
  }
}
export default async function Home() {
  const user = await getServerSession()
  console.log("🚀 ~ Home ~ user:", user)
  if (!user) {
    redirect("/auth/signin")
  }
  // try {
  //   const data = await fetchUser();
  //   console.log("User data:", data);
  // } catch (error) {
  //   console.error("Error in Home page:", error);
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
