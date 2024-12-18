export const DEV_URL = process.env.NODE_ENV=="development"?"http://dev.localhost:5173":"https://dev.mrdavidstudents.com.ng"
export const GEN_URL = process.env.NODE_ENV=="development"?"http://localhost:5173":"https://www.mrdavidstudents.com.ng"
export const API_URL = process.env.NODE_ENV=="development"?"http://localhost:4002/api":"https://mrdavidstudents.onrender.com/api"
export const OPENAI_KEY = import.meta.env.VITE_OPENAI_API_KEY