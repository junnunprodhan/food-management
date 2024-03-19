import { ChangeEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import MainForm from "../components/Form/MainForm";
import Input from "../components/Form/Input";
import { SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { toast } from "sonner";
type TLoginInput = {
  email: string;
  password: string;
};
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // Event handler for checkbox change
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowPassword(event.target.checked);
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (authData: TLoginInput) => {
      return await baseApiAxios.post("/login", authData);
    },
  });
  const onSubmit: SubmitHandler<TLoginInput> = async (data: TLoginInput) => {
    try {
      const response = await mutateAsync(data);
      if (response?.data?.success) {
        localStorage.setItem("token", response?.data?.token);
        navigate("/");
        toast.success("Log in successfully", { position: "top-center" });
        dispatch(setUser(data));
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "top-center" });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F5F6F9] dark:bg-black dark:text-black  ">
      <div className=" border px-10 py-20  w-[90%] md:w-1/3 mx-auto rounded-lg shadow-lg shadow-blue-gray-50 bg-[#FFFFFF] dark:bg-black ">
        <div className="pb-5">
          <h1 className="text-lg">Log In</h1>
          <p className="text-gray-400 pt-3">
            Please sign in with your registered email and password
          </p>
        </div>
        <MainForm onSubmit={onSubmit}>
          <div className="space-y-3">
            <Input
              name="email"
              placeholder="Email"
              type="email"
              label="Email"
            />
            <div>
              <Input
                name="password"
                placeholder="Password"
                type={`${showPassword ? "text" : "password"}`}
                label="Password"
              />
              <div className="pt-2 flex items-center gap-2 cursor-pointer w-max">
                <input
                  checked={showPassword}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  name=""
                  id=""
                  className="w-4 h-4"
                />
                <p
                  className="dark:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  Show password
                </p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5 w-full flex items-center justify-center gap-5"
          >
            {isPending && (
              <AiOutlineLoading3Quarters className="animate-spin" />
            )}
            Log In
          </button>
        </MainForm>
        <p className="dark:text-white mt-2">
          Dont Have an Account?{" "}
          <Link to={"/register"}>
            <span className="text-blue-800">Please Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
