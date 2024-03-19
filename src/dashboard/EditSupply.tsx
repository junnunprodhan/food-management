import { SubmitHandler } from "react-hook-form";
import MainForm from "../components/Form/MainForm";
import TextArea from "../components/Form/TextArea";
import Input from "../components/Form/Input";
import Dropdown from "../components/Form/Dropdown";
import FileInput from "../components/Form/FileInput";
import { TSupplies } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import singleImageUpload from "../utils/singleImageUpload";
import { TSupply } from "./CreateSupply";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
type TModal = {
  openModal: boolean;
  closeModal: () => void;
  supply: {
    title: string;
    image: string;
    category: string;
    quantity: string;
    description: string;
    _id: string;
  };
};
const EditSupply = ({ closeModal, openModal, supply }: TModal) => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (payload: TSupply) => {
      return await baseApiAxios.patch(`/supply/update/${supply?._id}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Supplies"] });
    },
  });

  const defaultValues = {
    title: supply?.title,
    image: supply?.image,
    category: supply?.category,
    quantity: supply?.quantity,
    description: supply?.description,
  };

  const onSubmit: SubmitHandler<TSupplies> = async (data) => {
    try {
      setIsLoading(true);
      const imageUpload = await singleImageUpload(data.image[0]);
      const newSupply = {
        title: data?.title,
        category: data?.category,
        quantity: data?.quantity,
        description: data?.description,
        image: imageUpload ? imageUpload : supply?.image,
      };
      const response = await mutateAsync(newSupply);
      if (response?.data?.success) {
        setIsLoading(false);
        closeModal();
        toast.success("Supply updated successfully!!!", {
          position: "top-center",
        });
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="dark:text-black ">
      <div
        className={`fixed z-20 inset-0 overflow-y-auto ${
          openModal ? "visible" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="fixed inset-0 bg-black/60 bg-opacity-75 transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="relative bg-white  w-full md:w-1/2 p-8 rounded-lg">
            <MainForm onSubmit={onSubmit} defaultValues={defaultValues}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                <Input
                  label="Title"
                  placeholder="Title"
                  name="title"
                  type="text"
                />
                <FileInput label="Image" name="image" />
                <Dropdown
                  label="Category"
                  name="category"
                  items={[
                    "Select One",
                    "Baby Care",
                    "Healthy",
                    "Hygiene Products",
                  ]}
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
                {isLoading && (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                )}
                Update Supply
              </button>
            </MainForm>

            <button
              onClick={closeModal}
              className="bg-red-700 hover:bg-red-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5 w-full flex items-center justify-center gap-5"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSupply;
