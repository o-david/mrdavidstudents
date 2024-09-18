import { create } from "zustand";
import axios from "axios";
import { API_URL, GEN_URL } from "../constants/urlConstants";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,
  token: null,
  cookieExists: false,
  cookieError: false,

  signup: async (email, firstName, lastName) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}`, {
        email,
        firstName,
        lastName,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },
  checkCookie: async () => {
    set({ isloading: true });
    try {
      const cookies = document.cookie.split("; "); // Split cookies into an array
      console.log(cookies);
      for (let cookie of cookies) {
        const [name, value] = cookie.split("="); // Split each cookie into name and value
        if (name === "token") {
          set({
            cookieExists: true,
            isLoading: false,
            error: null,
          });
        } else {
          set({
            cookieExists: false,
            isLoading: false,
            error: null,
          });
        }
      }
    } catch (error) {
      set({ isLoading: false, error: error, cookieExists: false });
    }
  },
  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },
  setCookie: async (token) => {
    console.log(token);
    set({ isLoading: true });
    try {
      await axios.post(`${API_URL}/set-cookie`, {
        token,
      });
      set({ cookieExists: true, isLoading: false, error: null });
    } catch (err) {
      set({ isLoading: false, cookieExists: false, cookieError: err });
      console.log("error dey ooh", err);
      //   window.location.href = `${GEN_URL}/login?signout=true`;
    }
  },
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      set({
        isAuthenticated: true,
        user: response.data.user,
        token: response.data.token,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  // logout: async () => {
  // 	set({ isLoading: true, error: null });
  // 	try {
  // 		await axios.post(`${API_URL}/logout`);
  // 		set({ user: null, isAuthenticated: false, error: null, isLoading: false });
  // 	} catch (error) {
  // 		set({ error: "Error logging out", isLoading: false });
  // 		throw error;
  // 	}
  // },
  // verifyEmail: async (code) => {
  // 	set({ isLoading: true, error: null });
  // 	try {
  // 		const response = await axios.post(`${API_URL}/verify-email`, { code });
  // 		set({ user: response.data.user, isAuthenticated: true, isLoading: false });
  // 		return response.data;
  // 	} catch (error) {
  // 		set({ error: error.response.data.message || "Error verifying email", isLoading: false });
  // 		throw error;
  // 	}
  // },

  // forgotPassword: async (email) => {
  // 	set({ isLoading: true, error: null });
  // 	try {
  // 		const response = await axios.post(`${API_URL}/forgot-password`, { email });
  // 		set({ message: response.data.message, isLoading: false });
  // 	} catch (error) {
  // 		set({
  // 			isLoading: false,
  // 			error: error.response.data.message || "Error sending reset password email",
  // 		});
  // 		throw error;
  // 	}
  // },
  // resetPassword: async (token, password) => {
  // 	set({ isLoading: true, error: null });
  // 	try {
  // 		const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
  // 		set({ message: response.data.message, isLoading: false });
  // 	} catch (error) {
  // 		set({
  // 			isLoading: false,
  // 			error: error.response.data.message || "Error resetting password",
  // 		});
  // 		throw error;
  // 	}
  // },
}));
