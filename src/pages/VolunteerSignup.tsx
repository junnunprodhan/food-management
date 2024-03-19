import { SubmitHandler } from "react-hook-form";
import FileInput from "../components/Form/FileInput";
import Input from "../components/Form/Input";
import MainForm from "../components/Form/MainForm";
import Container from "../layout/Container";
import singleImageUpload from "../utils/singleImageUpload";
import { useMutation } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TVolunteer } from "../types";

const VolunteerSignup = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (newVolunteer: TVolunteer) => {
      return await baseApiAxios.post("/volunteer-signup", newVolunteer);
    },
  });

  const onSubmit: SubmitHandler<TVolunteer> = async (data) => {
    try {
      const imageUpload = await singleImageUpload(data?.image![0]);
      const newVolunteer = {
        name: data?.name,
        email: data?.email,
        image: imageUpload,
        phoneNumber: data?.phoneNumber,
        location: data?.location,
      };
      const response = await mutateAsync(newVolunteer);
      if (response?.data?.success) {
        toast.success("Sign up for volunteer successfully", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { position: "top-center" });
    }
  };

  return (
    <div className="dark:bg-black dark:text-white">
      <Container className="py-10">
      <h1 className="text-3xl font-semibold text-center pb-8">Sign up for volunteer</h1>
        <MainForm onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <Input label="Name" placeholder="Name" name="name" type="text" />
            <Input
              label="Email"
              placeholder="Email"
              name="email"
              type="email"
            />
            <Input
              label="Phone number"
              placeholder="Phone number"
              name="phoneNumber"
              type="number"
            />
            <FileInput label="Image" name="image" />
            <Input
              label="Location"
              placeholder="Location"
              name="location"
              type="text"
            />
          </div>
          <div className="mt-5"></div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5 w-full flex items-center justify-center gap-5"
          >
            {isPending && (
              <AiOutlineLoading3Quarters className="animate-spin" />
            )}
            Submit now
          </button>
        </MainForm>
      </Container>
    </div>
  );
};

export default VolunteerSignup;
