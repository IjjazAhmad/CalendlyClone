import { prisma } from "@/config/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";

const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {},
        async authorize(credentials, req) {
          const { email, password }:any = credentials;
          console.log("🚀 ~ authorize ~ password:", password)
          console.log("🚀 ~ authorize ~ email:", email)
          try {
            const user = await prisma.user.findFirst({ where: { email: email } });
            console.log("🚀 ~ authorize ~ user:", user)
            if (!user) {
              return null;
            }
            if (password !== user.password) {
              return null;
            }
            return user;
          } catch (error) {
            console.log("🚀 ~ authorize ~ error:", error);
            throw new Error("Failed to authenticate");
          }
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/auth/signin",
    },
  };
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await NextAuth(req, res, authOptions);
};

export default handler;

