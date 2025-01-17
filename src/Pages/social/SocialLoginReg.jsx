import { Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";

const SocialLoginReg = () => {
  return (
    <div>
      {/* <Button></Button> */}
      <Button className="w-full" color="blue">
        <FcGoogle className="mr-2 h-5 w-5" />
        Buy now
      </Button>
    </div>
  );
};

export default SocialLoginReg;
