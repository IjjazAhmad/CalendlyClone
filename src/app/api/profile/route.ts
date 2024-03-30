import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  const body = await req.json();
  console.log("🚀 ~ POST ~ body:", body);
  
  try {
    const createdUser = await prisma.profile.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });

    return NextResponse.json({ message: "User added successfully", user: createdUser });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong", error: error });
  }
};
