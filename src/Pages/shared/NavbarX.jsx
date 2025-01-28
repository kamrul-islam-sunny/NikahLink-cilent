import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";



const NavbarX = () => {

  const { user, userLogOut } = useAuth();

  const [userName, setUserName] = useState('')
  useEffect(()=>{
    setUserName(user?.displayName)
  },[user])

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("logout successful ");
      })
      .catch(() => {
      });
  };

  const links = (
    <>
      <li className="text-lg  text-rose-600">
        <Link to={'/'}>Home</Link>
      </li>
      <li className="text-lg  text-rose-600">
        <Link to={'baiDataPage'}>Biodatas</Link>
      </li>
      <li className="text-lg  text-rose-600">
        <Link>About Us</Link>
      </li>
      <li className="text-lg  text-rose-600">
         <Link>Contact Us</Link> 
      </li>
      {
        user && user.uid? <li className="text-lg  text-rose-600">
        <Link to={'/dashboard'}>Dashboard</Link>
      </li> : <></>
      }
    </>
  );

  return (
    <div className="">
      <Navbar className="bg-white/30 backdrop-blur-sm rounded ">
        <Navbar.Brand href="https://flowbite-react.com">
          {/* <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <h1 className="text-3xl font-bold">logo</h1>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user && user?.uid ? (
            <>
              <div className="flex gap-2 items-center">
                {/* <Avatar img={user.photoURL} alt="avatar of Jese" rounded /> */}
                
                <Button>{userName}</Button>
                <Button onClick={handleLogOut}>logOut</Button>
              </div>
            </>
          ) : (
            <>
              <Button>
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
