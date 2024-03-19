import  { useState } from "react";
import Container from "../layout/Container";
import CommentModal from "../modal/CommentModal";
import { useQuery } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import { TComment } from "../types";

const Community = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  const { data, isPending } = useQuery({
    queryKey: ["Comments"],
    queryFn: () => baseApiAxios("/comments"),
  });

  if (isPending) {
    return (
      <p className="flex items-center justify-center text-xl font-semibold h-screen dark:text-white">
        Loading...
      </p>
    );
  }
  if (!data?.data?.data?.length) {
    return (
      <p className="flex items-center justify-center text-xl font-semibold h-screen dark:text-white">
        Loading...
      </p>
    );
  }
  return (
    <div className="dark:bg-black dark:text-white ">
      <Container className="pb-8">
        <h1 className="text-3xl font-semibold text-center pt-8">Community Gratitude Wall</h1>
        <div className="pt-8 flex  flex-col gap-5">
          {data?.data?.data?.map((comment:TComment) => (
            <div>
                <h1 className="text-xl font-semibold">{comment?.name}</h1>
                <p>{comment?.comment}</p>
            </div>
          ))}
        </div>
      </Container>
      <div className="fixed bottom-6 md:bottom-8 right-6 md:right-8">
        <button
          onClick={() => setModalOpen(!modalOpen)}
          className="bg-blue-600 px-3 py-2 rounded-md font-semibold text-white"
        >
          Write comments
        </button>
      </div>
      {modalOpen && (
        <CommentModal closeModal={closeModal} modalOpen={modalOpen} />
      )}
    </div>
  );
};

export default Community;
