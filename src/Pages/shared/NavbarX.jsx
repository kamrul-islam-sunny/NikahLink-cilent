import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";


const NavbarX = () => {
  const { user, userLogOut } = useAuth();
  console.log(user);

  const handleLogOut = () => {
    console.log("signout");
    userLogOut()
      .then((result) => {
        console.log(result);
        toast("logout successful ");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const links = (
    <>
      <li className="text-lg  text-rose-600">
        <Link>Home</Link>
      </li>
      <li className="text-lg  text-rose-600">
        <Link>Biodatas</Link>
      </li>
      <li className="text-lg  text-rose-600">
        <Link>About Us</Link>
      </li>
      <li className="text-lg  text-rose-600">
        <Link>Contact Us</Link>
      </li>
      {
        user && user.email? <li className="text-lg  text-rose-600">
        <Link to={'/dashboard'}>Dashboard</Link>
      </li> : <></>
      }
      
      {/* <Navbar.Link  href="#">About</Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link> */}
    </>
  );

  return (
    <div>
      <Navbar fluid rounded>
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
          {user && user?.email ? (
            <>
              <div className="flex gap-2 items-center">
                {/* <Avatar img={user.photoURL} alt="avatar of Jese" rounded /> */}
                <p>{user.displayName}</p>
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
