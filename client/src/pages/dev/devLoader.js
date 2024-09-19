import { useAuthStore } from "../../store/authStore";
import { useEffect } from "react";

const DevLoader = async ({request}) => {
  const { setCookie, error, checkCookie, cookieExists, cookieError, checkAuth, isAuthenticated} = useAuthStore();
  useEffect( () => {
    const url = new URL(request.url);
    const token = url.searchParams.get("token")
    const namerfunc= async () => {
      await checkAuth()
      console.log("cookieExists: ", cookieExists) 
      if(!cookieExists){
        await setCookie(token)  
      }
      // url.searchParams.delete("token"); // Remove the token parameter
      // window.history.replaceState({}, document.title, url); // Update the URL without reloading
    }
    namerfunc() 
  }, [])  
  return true
  
}

export default DevLoader
