import MainForm from "../components/Form/MainForm";
import Input from "../components/Form/Input";
import { SubmitHandler } from "react-hook-form";
import Container from "../layout/Container";
import TextArea from "../components/Form/TextArea";
import Dropdown from "../components/Form/Dropdown";
import FileInput from "../components/Form/FileInput";
import singleImageUpload from "../utils/singleImageUpload";
import { baseApiAxios } from "../api/baseApiAxios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export type TSupply = {
  image: string | undefined;
  title: string;
  category: string;
  quantity: string;
  description: string;
};

const CreateSupply = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (newSupply: TSupply) => {
      return await baseApiAxios.post("/supplies", newSupply);
    },
  });
  const onSubmit: SubmitHandler<TSupply> = async (data: TSupply) => {
    try {
      const imageUpload = await singleImageUpload(data?.image![0]);
      const newSupply = {
        title: data?.title,
        category: data?.category,
        quantity: data?.quantity,
        description: data?.description,
        image: imageUpload,
      };
      const response = await mutateAsync(newSupply);
      if (response?.data?.success) {
        toast.success("Supply added successfully!!!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dark:bg-black dark:text-white h-screen">
      <Container className="pt-10">
      <h1 className="text-3xl font-semibold text-center pb-8">Create Supply</h1>
        <MainForm onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <Input label="Title" placeholder="Title" name="title" type="text" />
            <FileInput label="Image" name="image" />
            <Dropdown
              label="Category"
              name="category"
              items={["Select One", "Baby Care", "Healthy","Hygiene Products"]}
            />
            <Input
              label="Quantity"
              placeholder="Quantity"
              name="quantity"
              type="text"
            />
          </div>
          <div className="mt-5">
            <TextArea
              label="Description"
              name="description"
              placeholder="Description"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5 w-full flex items-center justify-center gap-5"
          >
            {isPending && (
              <AiOutlineLoading3Quarters className="animate-spin" />
            )}
            Create Supply
          </button>
        </MainForm>
      </Container>
    </div>
  );
};

export default CreateSupply;
