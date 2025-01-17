import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
  }
]);

export default router;
