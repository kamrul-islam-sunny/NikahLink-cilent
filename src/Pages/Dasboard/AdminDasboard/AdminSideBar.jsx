import { Sidebar } from "flowbite-react";
import { HiChartPie, HiLogout } from "react-icons/hi";
import { FaCrown, FaUserCheck, FaUsersCog } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { Button } from "@headlessui/react";
import toast from "react-hot-toast";

const AdminSideBar = () => {
  const {userLogOut } = useAuth();
  const location = useLocation(); 
  const isActive = (path) => location.pathname === path;
  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("logout successful ");
      })
      .catch(() => {
      });
  };
  return (
    <div>
      <Sidebar
        className="w-full"
        aria-label="Sidebar with logo branding example"
      >
        <Sidebar.Logo href="/" img="/favicon.svg" imgAlt="Flowbite logo">
          Flowbite
        </Sidebar.Logo>
        <Sidebar.Items className=" bg-gray-200 rounded-lg">
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              <Link to={"adminDashboard"} className={isActive("/dashboard/EditBioData") ? "text-blue-600" : ""}>Admin Dashboard</Link>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaUsersCog} className="rounded-none">
              <Link to={"manage"} className={isActive("/dashboard/EditBioData") ? "text-blue-600" : ""}>Manage Users</Link>
            </Sidebar.Item>
            <Sidebar.Item className="rounded-none" icon={FaCrown}>
              <Link to={"approvedPremium"} className={isActive("/dashboard/EditBioData") ? "text-blue-600" : ""}>Approved Premium</Link>
            </Sidebar.Item>
            <Sidebar.Item className="" icon={FaUserCheck}>
              <Link to={"approvedContactRequest"} className={isActive("/dashboard/EditBioData") ? "text-blue-600" : ""}> Approved Contact <br /> Request</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiLogout}>
            <Button onClick={handleLogOut}>LogOut</Button>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default AdminSideBar;
