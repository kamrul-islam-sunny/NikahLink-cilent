import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form"
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const {signIn} = useAuth()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const onSubmit = (data) => {
    signIn(data.email, data.password)
    .then(result =>{
      toast.success('Login Successful! 🎉✅')
      navigate(from, {replace: true});
    })
    .catch(err => {
      toast.error(err.message)
    })

  };
  return (
    <div className="border ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-md mx-auto min-h-screen justify-center flex-col gap-4"
      >
        <div className="text-3xl font-bold text-gray-800">
          <h1>Login</h1>
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
            Don&apos;t have an account?{" "}
            <Link to={"/register"} className="text-blue-600 text-xs">
              Register
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Login;

{
  /* <form }>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form> */
}
