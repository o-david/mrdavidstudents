import { BrowserRouter, Navigate, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
// import { AppHome, AdminHome} from '../pages'

export const AppRouter = () => {
function isloggedin() {
  
 return !!localStorage.getItem('token')
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Login/> },
      { path:"login", element: <Login/> },
      { path: "register", element: <SignUp /> },
      { path: "contact", element: "<Contact />" },
    ],
  },
  {
    path: "/writer",
    element: isloggedin()?<Layout /> : <Navigate to={"/"}/>,
    errorElement: <Navigate to={"/"}/>,
    children: [
      { index: true, element: "<Home for writer />" },
      { path: "about", element: "<About for writer />" },
      { path: "contact", element: "<Contact for writer />" },
    ],
  },
]);


  return (
    <RouterProvider router={router} />
  )
}

export const AdminRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={"<AdminHome/>"}/>
    </Routes>
    </BrowserRouter>
  )
}
export const StudentRouter = () => {
  return (
    <Routes>
        <Route path="/" element={"<AdminHome/>"}/>
    </Routes>
  )
}