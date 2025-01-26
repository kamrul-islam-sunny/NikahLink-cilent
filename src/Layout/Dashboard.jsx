import { Spinner } from "flowbite-react";
import useAdmin from "../Hooks/useAdmin";
import AdminSideBar from "../Pages/Dasboard/AdminDasboard/AdminSideBar";
import UserSideBar from "../Pages/Dasboard/UserDashboard/UserSideBar";

import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();

  if (isAdminLoading) {
    return (
      <div className="text-center pt-10">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <section className="flex  ">
      <div className="w-1/4">
        {isAdmin ? <AdminSideBar></AdminSideBar> : <UserSideBar></UserSideBar>}
      </div>
      <div className="flex-1 my-2 py-4 bg-gray-200 rounded-lg">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Dashboard;
