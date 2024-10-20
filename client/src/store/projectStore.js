import { create } from "zustand";
import api from "../utils/api";



export const useProjectStore = create((set) => ({
  projects: null,
  error: null,
  isLoading: false,
  
  getProjects: async (filterBy = {}) => {
    set({ isLoading: true, error: null });
    try {
      const { type, id, technologies, username } = filterBy;
      let url = '/project?';
      if (type) url += `type=${type}&`;
      if (technologies) url += `technologies=${technologies}&`;
      if (id) url += `id=${id}`;
      if (username) url += `username=${username}&`; // Added username filter
      url = url.replace(/&$/, ''); // Remove trailing '&' if present

      const response = await api.get(url);
      set({
        projects: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error fetching projects",
        isLoading: false,
      });
      throw error;
    }
  },
//   checkAuth: async () => {
//     set({ isCheckingAuth: true, error: null });
//     try {
//       const response = await api.get(`/check-auth`);
// 			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
// 		} catch (err) {
//       console.log(err);
//       set({ error: null, isCheckingAuth: false, isAuthenticated: false });
//     }
//   },
//   login: async (email, password) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.post(`${API_URL}/login`, {
//         email,
//         password,
//       });
//       set({
//         isAuthenticated: true,
//         token: response.data.token,
//         error: null,
//         isLoading: false,
//       });
//       return response.data
//     } catch (error) {
//       set({
//         error: error.response?.data?.message || "Error logging in",
//         isLoading: false,
//       });
//       throw error;
//     }
//   },
//   checkAuthWithToken: async (token) => {
//     set({ isCheckingAuth: true, error: null });
//     try {
//       const response = await axios.get(`${API_URL}/check-auth`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
//     }
//     catch(error){
//       set({ error: error.response?.data?.message || "Error checking auth", isCheckingAuth: false, isAuthenticated: false });
//       throw error;
//     }
//   }
}));
