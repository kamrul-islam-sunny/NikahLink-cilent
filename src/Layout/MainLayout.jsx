import { Outlet } from "react-router-dom";
import NavbarX from "../Pages/shared/NavbarX";
import FooterX from "../Pages/shared/FooterX";

const MainLayout = () => {
  return (
    <div>
      <NavbarX></NavbarX>
      <div className="min-h-[calc(100vh-20px)] ">
        <Outlet></Outlet>
      </div>
      <FooterX></FooterX>
    </div>
  );
};

export default MainLayout;
