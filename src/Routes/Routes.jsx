import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import EditBioData from "../Pages/Dasboard/UserDashboard/EditBioData/EditBioData";
import ViewBioData from "../Pages/Dasboard/UserDashboard/ViewBioData/ViewBioData";
import AdminDashboard from "../Pages/Dasboard/AdminDasboard/adminDashboard/AdminDashboard";
import ManageUser from "../Pages/Dasboard/AdminDasboard/manageUser/ManageUser";
import ApprovedPremium from "../Pages/Dasboard/UserDashboard/ApprovedPremium/ApprovedPremium";


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
    element: <Dashboard></Dashboard>,
    children: [
      // normal user route
      {
        path:'EditBioData',
        element: <EditBioData></EditBioData>
      },
      {
        path:'ViewBioData',
        element: <ViewBioData></ViewBioData>
      },
     

      // admin route
      {
        path:'adminDashboard',
        element:<AdminDashboard></AdminDashboard>
      },
      {
        path:'manage',
        element:<ManageUser></ManageUser>
      },
      {
        path:'approvedPremium',
        element: <ApprovedPremium></ApprovedPremium>
      },
    ]
  }
]);

export default router;
