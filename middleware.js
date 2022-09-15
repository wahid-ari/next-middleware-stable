// https://nextjs.org/docs/advanced-features/middleware
// https://nextjs.org/docs/messages/middleware-upgrade-guide

import { NextResponse } from 'next/server'

// CONDITIONAL STATEMENT
// https://nextjs.org/docs/advanced-features/middleware#conditional-statements
export default function middleware(request) {
  // Getting cookies from the request
  const token = request.cookies.get('token')
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if(!token){
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}

// // MATCHER
// // https://nextjs.org/docs/advanced-features/middleware#matcher
// export default function middleware(request) {
//   // Getting cookies from the request
//   const token = request.cookies.get('token')
//   if (!token) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }
// }
// // Middleware will be invoked for every route in the app, and a custom matcher can be used to define matching filters.
// // The following is an example for a Middleware that triggers for /about/* and /dashboard/:path*,
// // the custom matcher is defined in an exported config object:
// // Supports both a single string value or an array of matchers
// export const config = {
//   matcher: ['/admin/:path*', '/dashboard/:path*'],
// }
