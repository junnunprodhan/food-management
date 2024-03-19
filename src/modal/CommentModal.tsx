import useGetUser from "../utils/useGetUser";
import Input from "../components/Form/Input";
import TextArea from "../components/Form/TextArea";
import MainForm from "../components/Form/MainForm";
import { SubmitHandler } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import { toast } from "sonner";
import { TComment } from "../types";

type TCommentModal = {
  modalOpen: boolean;
  closeModal: () => void;
};



const CommentModal = ({ closeModal }: TCommentModal) => {
    const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (newComment: TComment) => {
      return await baseApiAxios.post("/comments", newComment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Comments"] });
    },
  });
  const user = useGetUser();
  const onSubmit: SubmitHandler<TComment> = async (data) => {
    try {
      const response = await mutateAsync(data);
      if (response?.data?.success) {
        toast.success("Supply added successfully!!!", {
          position: "top-center",
        });
        closeModal()
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        position: "top-center",
      });
    }
  };
  const defaultValues = {
    name: user?.name,
    email: user?.email,
  };
  return (
    <div className="">
      <div className="fixed z-20 inset-0 overflow-y-auto dark:text-black">
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="fixed inset-0 bg-black/70 bg-opacity-75 transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="relative bg-white dark:bg-black w-[90%] md:w-1/2 p-8 rounded-lg">
            <MainForm onSubmit={onSubmit} defaultValues={defaultValues}>
              <Input label="Name" placeholder="Name" name="name" type="text" />
              <Input
                label="Email"
                placeholder="Email"
                name="email"
                type="email"
              />
              <div className="mt-5">
                <TextArea
                  label="Write comment"
                  name="comment"
                  placeholder="Write comment here..."
                />
              </div>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5 w-full flex items-center justify-center gap-5"
              >
                {isPending && (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                )}
                Submit
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

export default CommentModal;
