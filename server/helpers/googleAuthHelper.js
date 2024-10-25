import dotenv from "dotenv";
import axios from "axios";


dotenv.config();
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const REDIRECT_URI = process.env.NODE_ENV == "development"?"http://localhost:4002/api/user/google/callback":"https://mrdavidstudents.onrender.com/api/user/google/callback";
export const JWT_SECRET = process.env.JWT_SECRET;
export const FRONTEND_URL = process.env.NODE_ENV == "development"?"http://dev.localhost:5173":"https://dev.mrdavidstudents.com.ng";
export const FRONTEND_URL2 = process.env.NODE_ENV == "development"?"http://localhost:5173":"https://mrdavidstudents.com.ng";

export const getGoogleTokens = async(code)=> {
  const url = "https://oauth2.googleapis.com/token";
  const { data } = await axios.post(url, {
    code,
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
  });
  return data;
}

export const getGoogleUser=async(accessToken)=> {
  const url = "https://www.googleapis.com/oauth2/v2/userinfo";
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
}
