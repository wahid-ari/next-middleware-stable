// https://nextjs.org/docs/advanced-features/middleware
// https://nextjs.org/docs/messages/middleware-upgrade-guide

import { NextResponse } from 'next/server'

// CONDITIONAL STATEMENT
// https://nextjs.org/docs/advanced-features/middleware#conditional-statements
// export function middleware(request) {
//   const url = request.nextUrl.clone()
//   url.pathname = '/login'

//   const token = request.cookies.get('token')
//   const response = NextResponse.next()

//   if (request.nextUrl.pathname.startsWith('/admin')) {
//     // console.log("admin middleware")
//     // console.log("token :", token)
//     if (token == undefined) {
//       return NextResponse.redirect(url)
//       // return NextResponse.redirect(new URL('/login', request.url))
//     }
//     return NextResponse.next()
//   }
  
//   if (request.nextUrl.pathname.startsWith('/logout')) {
//     // console.log("logout middleware")
//     // Deleting cookies
//     response.cookies.delete('token')
//     response.cookies.delete('username')
//     response.cookies.clear()
//     NextResponse.redirect(new URL('/login', request.url))
//   }
// return NextResponse.next()
  
// }

// MATCHER
// https://nextjs.org/docs/advanced-features/middleware#matcher
export default function middleware(request) {
  const url = request.nextUrl.clone()
  url.pathname = '/login'
  // Getting cookies from the request
  const token = request.cookies.get('token')
  if (!token) {
    return NextResponse.redirect(url)
    // return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}
// Middleware will be invoked for every route in the app, and a custom matcher can be used to define matching filters.
// The following is an example for a Middleware that triggers for /about/* and /dashboard/:path*,
// the custom matcher is defined in an exported config object:
// Supports both a single string value or an array of matchers
export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'],
}
