import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token)
  },
  {
    // callbacks: {
    //   authorized: ({ token }) => token?.role === "admin",
    // },
    secret: process.env.NEXTAUTH_SECRET
  }
)

export const config = { matcher: ["/","/settings","/about","/availability"] }