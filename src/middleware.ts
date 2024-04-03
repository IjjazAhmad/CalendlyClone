import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname

  const isPublicPath = path === "/signin" || path === "/signup" || path === "/forgotpassword"
  console.log("🚀 ~ middleware ~ isPublicPath:", isPublicPath)

  const token = req.cookies.get("token")?.value || ''
  console.log("🚀 ~ middleware ~ token:", token)
  if (isPublicPath || token) {
    // If the path is a public path or a token exists, allow access
    return NextResponse.next();
  } else {
    // If neither a public path nor a token exists, redirect to "/signin"
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }
}

export const config = {
  matcher: [
    "/", "/profile", "/adddetail", "/availability",
    "/selecttime", "/settings", 
  ]
}
