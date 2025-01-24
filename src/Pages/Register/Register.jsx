import {
  Button,
  Card,
  HRText,
  Label,
  TextInput,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLoginReg from "../social/SocialLoginReg";

const Register = () => {
  const { createUser, updateUserProfile, setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            setUser((prev) => {
              return {
                ...prev,
                displayName: userInfo.name,
                email: userInfo.email,
              };
            });
            axiosPublic.post("/user", userInfo).then((res) => {
              if (res.data.insertedId) {
                toast.success("Account Created Successfully! 🎉🙌✅");
                navigate("/");
              }
            });
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(`${err.message}😞❌`);
      });
  };

  return (
    <div className="border ">
      <Card className="max-w-sm mx-auto mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              {...register("name")}
              name="name"
              id="name"
              type="name"
              placeholder="Mr: bee"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your Photo URL" />
            </div>
            <TextInput
              {...register("PhotoUrl")}
              name="PhotoUrl"
              id="PhotoUrl"
              type="PhotoUrl"
              placeholder="http://..........."
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              {...register("email")}
              name="email"
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              name="password"
              {...register("password")}
              id="password1"
              type="password"
              required
            />
          </div>
          <Button type="submit" color="blue">
            Submit
          </Button>
        </form>
        <HRText text="or"></HRText>

        <SocialLoginReg></SocialLoginReg>

        <div className="">
          <h1 className="">
            Don&apos;t have an account?{" "}
            <Link to={"/login"} className="text-blue-600 text-xs">
              Login
            </Link>
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default Register;
