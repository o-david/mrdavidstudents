import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Layout from "./Layout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { useParams, useNavigate } from "react-router-dom";
import DevLoader from "../pages/dev/devLoader";
import DevLayout from "../pages/dev/DevLayout";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import { useAuthStore } from "../store/authStore";
import Dashboard from "../pages/dev/Dashboard";
// import { AppHome, AdminHome} from '../pages'

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
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
    {
      path: "/writer",
      element: isloggedin() ? <Layout /> : <Navigate to={"/"} />,
      errorElement: <Navigate to={"/"} />,
      children: [
        { index: true, element: "<Home for writer />" },
        { path: "about", element: "<About for writer />" },
        { path: "contact", element: "<Contact for writer />" },
      ],
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
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DevLayout />,
      errorElement: "error",
      loader: DevLoader,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "login", element: "<Login />" },
        { path: "register", element: "<SignUp />" },
        { path: "contact", element: "<Contact />" },
      ],
    },
    {
      path: "/stuff",
      element: "<DevLayout />",
      loader: DevLoader,
      errorElement: "error",
    },
  ]);

  return <RouterProvider router={router} />;
};
