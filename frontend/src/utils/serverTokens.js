import Cookies from "js-cookie";

// Get token from client-side cookies
export const getToken = () => {
  return Cookies.get();
};

// Set token in client-side cookies
export const setToken = (token) => {
  return Cookies.set("auth_token", token, { expires: 7 });
};

// Remove token from client-side cookies
export const clearToken = () => {
  return Cookies.remove("auth_token");
};
