import { create } from "zustand";
import axios from "axios";
import { API_URL } from "../constants/urlConstants";

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
  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} catch (error) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
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
  checkAuthWithToken: async (token) => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
    }
    catch(error){
      set({ error: error.response?.data?.message || "Error checking auth", isCheckingAuth: false, isAuthenticated: false });
      throw error;
    }
  }
}));