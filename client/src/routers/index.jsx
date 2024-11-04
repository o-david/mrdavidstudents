import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import DevLayout from "../pages/dev/DevLayout";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";
import Loader from "../components/Loader";
import { GEN_URL } from "../constants/urlConstants";
import Profile from "../pages/dev/Profile";
import DevProfile from "../pages/DevProfile";
import AllProjects from "../pages/AllProjects";
import ProfileUpdateComponent from "../components/ProfileUpdateComponent";
import Test from "../pages/Test";

export const AppRouter = () => {
  function isloggedin() {
    return !!localStorage.getItem("token");
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <SignUp /> },
        { path: "contact", element: "<Contact />" },
        { path: "allprojects", element: <AllProjects /> },
        { path: "update", element: <ProfileUpdateComponent /> },
        { path: "dev/:username", element: <DevProfile /> },
        { path: "test", element: <Test /> },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export const AdminRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={"<AdminHome/>"} />
      </Routes>
    </BrowserRouter>
  );
};
export const DevRouter = () => {  
  const { isCheckingAuth, checkAuth } = useAuthStore();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};
    const handleAuth = async (token) => {
          await checkAuth(); // Check authentication status
          // Delete query parameters from the URL
          urlParams.forEach((_, key) => {
            urlParams.delete(key);
          });
        
          // Update the URL without reloading
          window.history.replaceState({}, document.title, window.location.pathname + '?' + urlParams.toString());
        };
    function getQueryParams() {
      // Retrieve query parameters
      for (const [key, value] of urlParams.entries()) {
        params[key] = value;
      }
    
    
      return params;
    }
    const getToken = () => {
          let token = localStorage.getItem("token");
          if (!token) {
            token = getQueryParams().token
            console.log(token);
          }
          return token;
        };
        const token = getToken()
        if (!token) {
              window.location.href = `${GEN_URL}/login?logout=true`; // Redirect if no token is found
            } else {
              localStorage.setItem("token", token); // Store the token in local storage
              handleAuth(token); // Proceed with the token
            }
	}, []);

  if (isCheckingAuth) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/profile'
          element={
              <Profile dev={true}/>
            }
        />
      <Route
					path='/*'
					element={
						<ProtectedRoute>
							<DevLayout />
						</ProtectedRoute>
					}
				/>
      </Routes>
    </BrowserRouter>
  );
};

const ProtectedRoute = ({ children }) => {
	// const { isAuthenticated, user } = useAuthStore();

	// if (!isAuthenticated) {
	// 	return <Navigate to='/login' replace />;
	// }

	// if (!user.isVerified) {
	// 	return <Navigate to='/verify-email' replace />;
	// }

	return children;
};
