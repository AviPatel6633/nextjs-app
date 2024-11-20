import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const validateURL = process.env.NEXT_PUBLIC_BACKEND_URL + "/validate-token";

export async function middleware(request) {
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token');

  // If the user is already on the login page, don't check the token
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }

  // If no token exists, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Check token validity by calling the backend (API)
  const isValid = await validateToken(token.value);

  // If the token is invalid, redirect to login
  if (!isValid) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // If the token is valid, proceed
  return NextResponse.next();
}

// API to validate token by sending it to backend
async function validateToken(token) {
  const response = await fetch(validateURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Send token in Authorization header
    },
  });

  const data = await response.json();
  return data.isValid; // Check if the backend returns the token as valid
}

export const config = {
  matcher: ['/admin/:path*'],
};
