// https://nextjs.org/docs/advanced-features/middleware
// https://nextjs.org/docs/messages/middleware-upgrade-guide

import { NextResponse } from 'next/server';

// CONDITIONAL STATEMENT
// https://nextjs.org/docs/advanced-features/middleware#conditional-statements
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('token');
    console.log(token)
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
};

// MATCHER
// https://nextjs.org/docs/advanced-features/middleware#matcher
// export default async function middleware(request) {
//   const token = await request.cookies.get('token')

//   if (token !== undefined) {
//     return NextResponse.next()
//   }

//   const loginUrl = new URL('/login', request.url)
//   loginUrl.searchParams.set('from', request.nextUrl.pathname)

//   return NextResponse.redirect(loginUrl)
// }
// export const config = {
//   matcher: ['/admin/:path*'],
// }

// // MATCHER
// // https://nextjs.org/docs/advanced-features/middleware#matcher
// export default function middleware(request) {
//   // const url = request.nextUrl.clone()
//   // url.pathname = '/login'
//   // // Getting cookies from the request
//   // const token = request.cookies.get('token')
//   // console.log("Accessing /admin")
//   // console.log("checking token")
//   // if (!token) {
//   //   console.log("no token, redirect to /login")
//   //   return NextResponse.redirect(url)
//   //   // return NextResponse.redirect(new URL('/login', request.url))
//   // }
//   // console.log("Token okey")
//   // console.log("Continue to /admin")
//   // return NextResponse.next()
// }
// // Middleware will be invoked for every route in the app, and a custom matcher can be used to define matching filters.
// // The following is an example for a Middleware that triggers for /about/* and /dashboard/:path*,
// // the custom matcher is defined in an exported config object:
// // Supports both a single string value or an array of matchers
// export const config = {
//   matcher: ['/admin/:path*'],
// }
