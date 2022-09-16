import { useEffect, useContext } from "react";
import { UserContext } from "@utils/useUser";
import Router from "next/router";
import nookies from 'nookies'

export default function Logout() {
  const user = useContext(UserContext);

  useEffect(() => {
    user.setUsername("");
    user.setToken("");
    localStorage.removeItem("next-jwt-auth-token");
    nookies.destroy(null, 'cookieToken')
    nookies.destroy(null, 'cookieTokens')
    nookies.destroy(null, 'cookieUsername')
    document.cookie = 'cookieToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = 'cookieTokens=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = 'cookieUsername=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    Router.replace("/login");
  }, []);

  return ("")
}