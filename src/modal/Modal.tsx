import {  useNavigate } from "react-router-dom";
import { useGetSingleSupply } from "../utils/useGetSinglesupply";
import useGetUser from "../utils/useGetUser";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";

type TModal = {
  modalOpen: boolean;
  closeModal: () => void;
  id: string;
};

type TDonate = {
  title: string;
  category: string;
  userName: string;
  userEmail: string;
};
const Modal = ({ modalOpen, closeModal, id }: TModal) => {
  const { mutateAsync } = useMutation({
    mutationFn: async (newPost: TDonate) => {
      return await baseApiAxios.post("/donation", newPost);
    },
  });
  const supply = useGetSingleSupply(id!);
  const user = useGetUser();
  const navigate = useNavigate();
  const handleDonate = async () => {
    try {
      const title = supply?.title;
      const category = supply?.category;
      const userName = user?.name;
      const userEmail = user?.email;
      const newDonation = {
        title,
        category,
        userName,
        userEmail,
        donateSupply: 1,
      };
      const response = await mutateAsync(newDonation);
      console.log(response);
      if (response?.data?.success) {
        toast.success("Donate successfully", { position: "top-center" });
        navigate("/dashboard/chart");
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "top-center" });
    }
  };

  return (
    <>
      {modalOpen && (
        <div className="fixed z-20 inset-0 overflow-y-auto dark:text-white">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-black/70 bg-opacity-75 transition-opacity"
              onClick={closeModal}
            ></div>
            <div className="relative bg-white dark:bg-black w-[90%] md:w-1/2 p-8 rounded-lg">
              <div className="grid grid-cols-2 items-center gap-8">
                <img src={supply?.image} alt="" className="rounded" />
                <div>
                  <h1 className="text-xl font-semibold">{supply?.title}</h1>
                  <p className="text-lg pt-1">Category: {supply?.category}</p>
                  <p className="text-lg">Quantity: {supply?.quantity}</p>
                </div>
              </div>
              <div className="pt-5">
                <h1 className="font-semibold text-xl">User information</h1>
                <div>
                  <p>User Name : {user?.name}</p>
                  <p>Email : {user?.email}</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={handleDonate}
                  className=" bg-blue-500 hover:bg-blue-800 text-white px-8 py-1.5 rounded-md font-semibold "
                >
                  Donate
                </button>

                <button
                  className=" bg-red-500 hover:bg-red-800 text-white px-8 py-1.5 rounded-md font-semibold "
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
