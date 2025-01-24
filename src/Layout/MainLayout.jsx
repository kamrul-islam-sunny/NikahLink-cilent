import { Outlet } from "react-router-dom";
import NavbarX from "../Pages/shared/NavbarX";
import FooterX from "../Pages/shared/FooterX";
import BioData from "../components/BioDataCart/BioData";

const MainLayout = () => {
  return (
    <div>
      <NavbarX></NavbarX>
      <div className="min-h-[calc(100vh-20px)] ">
        <Outlet></Outlet>
      </div>
      <BioData></BioData>
      <FooterX></FooterX>
    </div>
  );
};

export default MainLayout;
