import Container from "../layout/Container";
import singleImageUpload from "../utils/singleImageUpload";
import { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import MainForm from "../components/Form/MainForm";
import Input from "../components/Form/Input";
import FileInput from "../components/Form/FileInput";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import TextArea from "../components/Form/TextArea";
import { useMutation } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import { TTestimonial } from "../types";

const InteractiveTestimonial = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (newTestimonial: TTestimonial) => {
      return await baseApiAxios.post("/testimonial", newTestimonial);
    },
  });

  const onSubmit: SubmitHandler<TTestimonial> = async (data) => {
    try {
      const imageUpload = await singleImageUpload(data?.image![0]);
      const newTestimonial: TTestimonial = {
        name: data?.name,
        image: imageUpload,
        description: data.description,
      };
      const response = await mutateAsync(newTestimonial);
      if (response?.data?.success) {
        toast.success("Testimonial added successfully!!!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { position: "top-center" });
    }
  };



  return (
    <div className="dark:text-white">
      <Container className="pt-8">
        <h1 className="text-3xl font-semibold text-center pb-8">Interactive testimonial</h1>
        <MainForm onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <Input label="Name" placeholder="Name" name="name" type="text" />

            <FileInput label="Image" name="image" />
          </div>
          <div className="mt-5">
            <TextArea
              label="Description"
              name="description"
              placeholder="Write  here..."
            />
          </div>
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

export default InteractiveTestimonial;
