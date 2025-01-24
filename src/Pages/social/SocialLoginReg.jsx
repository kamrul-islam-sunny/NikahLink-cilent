import { Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLoginReg = () => {
  const { socialSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSocial = () => {
    socialSignIn()
      .then((result) => {
        const userInfo = {
          userName: result.user?.email,
          email: result.user?.displayName,
        };
        axiosPublic.post("/user", userInfo).then(() => {
          navigate(from, { replace: true });
          toast.success("Login Successful! 🎉✅");
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <Button onClick={handleSocial} className="w-full " color="gray">
        <FcGoogle className="mr-2 h-5 w-5 " />
        Continue with Google
      </Button>
    </div>
  );
};

export default SocialLoginReg;
