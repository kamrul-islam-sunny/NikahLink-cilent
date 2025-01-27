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
import Home from "../Pages/Home/homepage/Home";
import BioDetails from "../Pages/bioDataDetailsPage/BioDetails";
import Payment from "../Pages/checkOutPage/Payment";
import ApprovedConReq from "../Pages/Dasboard/AdminDasboard/approvedContactRequest/ApprovedConReq";
import MyContactReq from "../Pages/Dasboard/UserDashboard/MyContactReq/MyContactReq";
import MyFavorite from "../Pages/Dasboard/UserDashboard/Favorite/MyFavorite";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/BioDataDetails/:id',
        element: <BioDetails></BioDetails>
      },
      {
        path: '/checkout/:bioDataId',
        element: <Payment></Payment>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      // normal user route
      {
        path:'ViewBioData',
        element: <ViewBioData></ViewBioData>
      },
      {
        path:'EditBioData',
        element: <EditBioData></EditBioData>
      },
      {
        path:'my-contact-request',
        element: <MyContactReq></MyContactReq>
      },
      {
        path:'my-favorite',
        element: <MyFavorite></MyFavorite>
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
      {
        path:'approvedContactRequest',
        element: <ApprovedConReq></ApprovedConReq>
      },
    ]
  }
]);

export default router;
