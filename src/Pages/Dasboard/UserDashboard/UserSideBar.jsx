import { Sidebar } from "flowbite-react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { HiEye, HiHeart, HiLogout, HiPencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";

const UserSideBar = () => {
  return (
    <div>
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo href="/" img="/favicon.svg" imgAlt="Flowbite logo">
          Flowbite
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item  icon={HiPencilAlt}>
              <Link to={"EditBioData"}>Edit BioData</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiEye}>
              <Link to={'viewBioData'}>View BioData</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={FaEnvelopeOpen}>
              <Link to={'contactRequest'}>My Contact Request</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiHeart}>
              <Link to={'favourites'}>favourites BioData</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiLogout}>LogOut</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default UserSideBar;
