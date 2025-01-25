import { Sidebar } from "flowbite-react";
import { HiChartPie, HiLogout } from "react-icons/hi";
import { FaCrown, FaUserCheck, FaUsersCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
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
              <Link to={'adminDashboard'}>Admin Dashboard</Link>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaUsersCog} className="rounded-none">
              <Link to={'manage'}>Manage Users</Link>
            </Sidebar.Item>
            <Sidebar.Item className="rounded-none" href="#" icon={FaCrown}>
              Approved Premium
            </Sidebar.Item>
            <Sidebar.Item className="" href="#" icon={FaUserCheck}>
              Approved Contact <br /> Request
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiLogout}>
              Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default AdminSideBar;
