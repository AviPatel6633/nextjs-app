import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request) {
  // Get the token from the cookies
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token');

  // Check if the current path is '/admin/login' and allow it
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }

  // If token exists and is valid, allow the request to proceed
  if (token && token.value) {
    return NextResponse.next();
  }

  // Redirect to login page if no valid token is found
  return NextResponse.redirect(new URL('/admin/login', request.url));
}

// Define which routes the middleware applies to
export const config = {
  matcher: ['/admin/:path*'],
};
