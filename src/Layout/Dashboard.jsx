
import AdminSideBar from "../Pages/Dasboard/AdminDasboard/AdminSideBar";
import UserSideBar from "../Pages/Dasboard/UserDashboard/UserSideBar";

import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const role = 'admin';

  return (
    <section className="flex  ">
      <div className="w-1/4">
        {role === 'admin' ? ( 
          <AdminSideBar></AdminSideBar>
        ) : (
          <UserSideBar></UserSideBar>
        )}
      </div>
      <div className="flex-1 my-2 py-4 bg-gray-200 rounded-lg">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Dashboard;
