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
import BiodatasPage from "../Pages/biodatesPage/BiodatasPage";
import PrivateRoute from "./PrivateRoute";

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
        path: "/baiDataPage",
        element: <BiodatasPage></BiodatasPage>,
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
        path: "/BioDataDetails/:id",
        element: (
          <PrivateRoute>
            <BioDetails></BioDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:bioDataId",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // normal user route
      {
        path: "ViewBioData",
        element: (
          <PrivateRoute>
            <ViewBioData></ViewBioData>
          </PrivateRoute>
        ),
      },
      {
        path: "EditBioData",
        element: (
          <PrivateRoute>
            <EditBioData></EditBioData>
          </PrivateRoute>
        ),
      },
      {
        path: "my-contact-request",
        element: (
          <PrivateRoute>
            <MyContactReq></MyContactReq>
          </PrivateRoute>
        ),
      },
      {
        path: "my-favorite",
        element: (
          <PrivateRoute>
            <MyFavorite></MyFavorite>
          </PrivateRoute>
        ),
      },

      // admin route
      {
        path: "adminDashboard",
        element: (
          <PrivateRoute>
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "manage",
        element: (
          <PrivateRoute>
            <ManageUser></ManageUser>
          </PrivateRoute>
        ),
      },
      {
        path: "approvedPremium",
        element: (
          <PrivateRoute>
            <ApprovedPremium></ApprovedPremium>
          </PrivateRoute>
        ),
      },
      {
        path: "approvedContactRequest",
        element: (
          <PrivateRoute>
            <ApprovedConReq></ApprovedConReq>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
