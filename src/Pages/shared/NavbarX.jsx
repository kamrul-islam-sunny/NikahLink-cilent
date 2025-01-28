import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Button } from "@headlessui/react";
import useAdmin from "../../Hooks/useAdmin";

const NavbarX = () => {
  const { user, userLogOut } = useAuth();

  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName(user?.displayName);
  }, [user]);

  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("logout successful ");
      })
      .catch(() => {});
  };

  const links = (
    <>
      <li className="text-lg  text-rose-600">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="text-lg  text-rose-600">
        <Link to={"baiDataPage"}>Biodatas</Link>
      </li>
      <li className="text-lg  text-rose-600">
        <Link>About Us</Link>
      </li>
      <li className="text-lg  text-rose-600">
        <Link>Contact Us</Link>
      </li>
      {user && user.uid ? (
        <li className="text-lg  text-rose-600">
          <Link to={`/dashboard/${isAdmin ? "manage" : "viewBioData"}`}>
            Dashboard
          </Link>
        </li>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <div
      className="
    "
    >
      <Navbar className="bg-white/30 backdrop-blur-sm rounded ">
        <Navbar.Brand href="/">
          {/* <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500">
            NikahLink{" "}
          </h1>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user && user?.uid ? (
            <>
              <div className="flex gap-2 items-center">
               
                <Button
                  className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
                  onClick={handleLogOut}
                >
                  logOut
                </Button>
              </div>
            </>
          ) : (
            <>
              <Button className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
                <Link to={"/login"}>Login</Link>
              </Button>
            </>
          )}
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse className="text-3xl">{links}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarX;
