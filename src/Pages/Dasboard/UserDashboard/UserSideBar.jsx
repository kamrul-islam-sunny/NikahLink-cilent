import { Sidebar } from "flowbite-react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { HiEye, HiHeart, HiLogout, HiPencilAlt } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const UserSideBar = () => {
  const location = useLocation(); 
  console.log(location)
  const isActive = (path) => location.pathname === path;
  return (
    <div>
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo href="/" img="/favicon.svg" imgAlt="Flowbite logo">
          Flowbite
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
              <Link to={"my-contact-request"}>My Contact Request</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiHeart}>
              <Link to={"favourites"}>favourites BioData</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiLogout}>LogOut</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default UserSideBar;
