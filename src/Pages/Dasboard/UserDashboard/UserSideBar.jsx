import { Sidebar } from "flowbite-react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { HiEye, HiHeart, HiLogout, HiPencilAlt } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Button } from "@headlessui/react";


const UserSideBar = () => {
  const {userLogOut} = useAuth();
  
  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("logout successful ");
      })
      .catch(() => {
      });
  };
  const location = useLocation(); 
  const isActive = (path) => location.pathname === path;
  
  return (
    <div>
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo href="/">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500">NikahLink </h1>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={HiPencilAlt}>
              <Link to={"EditBioData"} className={isActive("/dashboard/EditBioData") ? "text-blue-600" : ""}>Edit BioData</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiEye}>
              <Link to={"viewBioData"}  className={isActive("/dashboard/viewBioData") ? "text-blue-600" : ""}>View BioData</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={FaEnvelopeOpen}>
              <Link to={"my-contact-request"} className={isActive("/dashboard/my-contact-request") ? "text-blue-600" : ""} >My Contact Request</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiHeart}>
              <Link to={"my-favorite"} className={isActive("/dashboard/my-favorite") ? "text-blue-600" : ""}>favourites BioData</Link>
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

export default UserSideBar;
