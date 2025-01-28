import { Outlet } from "react-router-dom";
import NavbarX from "../Pages/shared/NavbarX";
import FooterX from "../Pages/shared/FooterX";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "flowbite-react";

const MainLayout = () => {
  const { Loading } = useAuth();

  if (Loading) {
    return (
      <div className="text-center pt-10">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }
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
