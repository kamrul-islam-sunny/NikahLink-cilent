import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const { register, reset, handleSubmit } = useForm();
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
            axiosPublic.post("/users", userInfo).then((res) => {
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-md mx-auto min-h-screen justify-center flex-col gap-4"
      >
        <div className="text-3xl font-bold text-gray-800">
          <h1>Register</h1>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Name" />
          </div>
          <TextInput
            {...register("name")}
            id="name"
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Photo URL" />
          </div>
          <TextInput
            id="photo URL"
            {...register("photoUrl")}
            type="url"
            placeholder="Photo URL"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            {...register("email")}
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
            {...register("password")}
            id="password1"
            type="password"
            required
          />
        </div>
        <Button type="submit" color="blue">
          Submit
        </Button>
        <div className="">
          <h1 className="">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-600 text-xs">
              Login
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Register;
