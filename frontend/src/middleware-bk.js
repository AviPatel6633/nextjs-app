import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

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
  const response = await fetch('http://localhost:4000/validate-token', {
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

// nodejs routing
// Add a new route to validate the token
// router.post('/validate-token', jwtAuthMiddleware, (req, res) => {
//   res.json({ isValid: true });  // If jwtAuthMiddleware doesn't throw an error, the token is valid
// });

//serverTokens.js file
// import Cookies from "js-cookie";

// // Get token from client-side cookies
// export const getToken = () => {
//   return Cookies.get();
// };

// // Set token in client-side cookies
// export const setToken = (token) => {
//   return Cookies.set("auth_token", token, { expires: 7 });
// };

// // Remove token from client-side cookies
// export const clearToken = () => {
//   return Cookies.remove("auth_token");
// };

//extra
// axiosClient.defaults.headers.common.Authorization = `Bearer ${userToken}`;
// import axios from "axios";
// const axiosClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL + "api/v1/",

//   // headers: {
//   //   Accept: "application/json",
//   //   "Content-Type":
//   //     "multipart/form-data; boundary=<calculated when request is sent>",
//   // },
// });

// ?GET METHOD
// export const studentList = (data) => axiosClient.get("admin/students", data);

//import
// studentList().then((res) => {
//   setStudent(res.data.result.data);
// })

// ?POST METHOD
// export const studentCreate = (data) => axiosClient.post("admin/students", data);
// studentCreate(formData)


