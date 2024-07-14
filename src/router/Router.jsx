import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/error/Error";
import Register from "../pages/register/Register";
import Home from "./../pages/home/Home";
import Login from "./../pages/login/Login";
import Blogs from "../pages/Blogs/Blogs";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },

]);

export default router;
