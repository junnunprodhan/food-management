import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainForm from "../components/Form/MainForm";
import Input from "../components/Form/Input";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { baseApiAxios } from "../api/baseApiAxios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
type TRegisterInput = {
  name: string;
  email: string;
  password: string;
};
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // Event handler for checkbox change
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowPassword(event.target.checked);
  };
  const { mutateAsync } = useMutation({
    mutationFn: async (newPost: TRegisterInput) => {
      return await baseApiAxios.post("/register", newPost);
    },
  });

  const onSubmit: SubmitHandler<TRegisterInput> = async (
    data: TRegisterInput
  ) => {
    const response = await mutateAsync(data);
    if (response?.data?.success) {
      navigate("/login");
      toast.success("Registration successfully please log in", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F5F6F9] dark:bg-black  ">
      <div className=" border px-10 py-20  w-[90%] md:w-1/3 mx-auto rounded-lg shadow-lg shadow-blue-gray-50 bg-[#FFFFFF] dark:bg-black">
        <div className="pb-5">
          <h1 className="text-lg dark:text-white">Register</h1>
          <p className="text-gray-400 pt-3">
            Please Register with your user name, email and password
          </p>
        </div>
        <MainForm onSubmit={onSubmit}>
          <div className="space-y-3">
            <Input
              name="name"
              placeholder="user Name"
              type="text"
              label="User Name"
            />
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
                <p onClick={() => setShowPassword(!showPassword)}>
                  Show password
                </p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5 w-full"
          >
            Register
          </button>
        </MainForm>
        <p className="mt-2 ">
          Already Have an Account?{" "}
          <Link to={"/login"}>
            <span className="text-blue-800">Please Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
