import { GEN_URL } from "../../constants/urlConstants";
import { useAuthStore } from "../../store/authStore";
import { useEffect } from "react";

const DevLoader = async ({request}) => {
  const { isAuthenticated, checkAuth} = useAuthStore();
  useEffect( () => {
    const url = new URL(request.url);
    const namerfunc= async (token) => {
      await checkAuth()
      if(isAuthenticated){
        await checkAuth(token)  
      }
      url.searchParams.delete("token"); // Remove the token parameter
      window.history.replaceState({}, document.title, url); // Update the URL without reloading
    }
    let token = localStorage.getItem("token")
    console.log("token from storage: ", token);
    if(!token){
      token = url.searchParams.get("token")
      console.log("token from search: ", token);

    if (!token) {
      window.location.href =`${GEN_URL}/login?logout=true`
    }
  } 
  namerfunc(token)
  }, [])  
  return true
  
}

export default DevLoader
