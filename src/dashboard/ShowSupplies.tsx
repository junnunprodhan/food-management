import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { TSupplies } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import Swal from "sweetalert2";
import EditSupply from "./EditSupply";
const ShowSupplies = ({
  supply,
  index,
}: {
  supply: TSupplies;
  index: number;
}) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (id: string) => {
      return await baseApiAxios.delete(`/delete-supply/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Supplies"] });
    },
  });
  const [openModal, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(!openModal);
  };

  const handleDeleteSupply = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await mutateAsync(id);
        if (response?.data?.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <tr key={supply?._id} className="even:bg-blue-gray-50/50 dark:bg-black dark:text-white">
      <td className="pl-2">{index + 1}</td>
      <td className="p-4">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal  dark:text-white"
        >
          <img src={supply?.image} alt="" className="w-[100px] rounded-lg" />
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal  dark:text-white"
        >
          {supply?.title}
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal  dark:text-white"
        >
          {supply?.category}
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal dark:text-white"
        >
          {supply?.quantity}
        </Typography>
      </td>
      <td className="p-8 flex items-center  gap-3">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <button
            onClick={() => setModalOpen(!openModal)}
            className="bg-blue-600 text-white p-2 font-semibold rounded"
          >
            <FiEdit className="h-6 w-6" />
          </button>
        </Typography>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <button
            onClick={() => handleDeleteSupply(supply?._id)}
            className="bg-red-600 text-white p-2 font-semibold rounded"
          >
            <MdDelete className="h-6 w-6" />
          </button>
        </Typography>
      </td>
      <td>
        {openModal && (
          <EditSupply
            closeModal={closeModal}
            openModal={openModal}
            supply={supply}

          />
        )}
      </td>
    </tr>
  );
};

export default ShowSupplies;
