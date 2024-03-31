import prisma from "@/config/prisma"
import { userSchema } from "@/constants/ValidationSchema/FormSchema"
import { hash } from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email,fullname, username, password } = userSchema.parse(body)
        // chack email already exiest
        const existingUserByEmail =await prisma.user.findUnique({
            where:{email: email}
        })
        if (existingUserByEmail) {
            return NextResponse.json({user:null, message:"User with this email already exist!"},{status:409})
        }
        // chack username already exiest
        const existingUserByUsername =await prisma.user.findUnique({
            where:{username: username}
        })
        if (existingUserByUsername) {
            return NextResponse.json({user:null, message:"User with this username already exist!"},{status:409})
        }
        const hashPassowrd = await hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                email,
                fullname,
                username,
                password: hashPassowrd
            },
        })
        const { password:newUserPassword, ...rest } = newUser
        return NextResponse.json({ user: rest, message: "User created successfuly" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({  message: "something went wrong" }, { status: 500 })
    }
}