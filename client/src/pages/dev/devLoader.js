import { GEN_URL } from "../../constants/urlConstants";
import { useAuthStore } from "../../store/authStore";
import { useEffect } from "react";

const DevLoader = ({ request }) => {
  const { isAuthenticated, checkAuth } = useAuthStore();

  useEffect(() => {
    const url = new URL(request.url);

    const handleAuth = async (token) => {
      await checkAuth(); // Check authentication status
      url.searchParams.delete("token"); // Remove the token parameter
      window.history.replaceState({}, document.title, url); // Update the URL without reloading
    };

    const getToken = () => {
      let token = localStorage.getItem("token");
      if (!token) {
        token = url.searchParams.get("token");
      }
      return token;
    };

    const token = getToken();

    if (!token) {
      window.location.href = `${GEN_URL}/login?logout=true`; // Redirect if no token is found
    } else {
      localStorage.setItem("token", token); // Store the token in local storage
      handleAuth(token); // Proceed with the token
    }
  }, []); // Added dependencies for useEffect

  return true;
};

export default DevLoader;

