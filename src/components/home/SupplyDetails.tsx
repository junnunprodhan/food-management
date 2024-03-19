import { useParams } from "react-router-dom";
import { useGetSingleSupply } from "../../utils/useGetSinglesupply";
import Container from "../../layout/Container";
import { useState } from "react";
import Modal from "../../modal/Modal";

const SupplyDetails = () => {
  const { id } = useParams();
  const supply = useGetSingleSupply(id!);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="dark:bg-black dark:text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 items-center gap-10 jus">
          <div className="md:col-span-2">
            <img src={supply?.image} alt="image" className="rounded-lg " />
          </div>
          <div className="md:col-span-4">
            <h1 className="text-2xl font-semibold">{supply?.title}</h1>
            <p className="text-lg pt-1">Category: {supply?.category}</p>
            <p className="text-lg">Quantity: {supply?.quantity}</p>
          </div>
        </div>
        <p className="text-lg pt-6"> {supply?.description}</p>
        <div>
          <button
            onClick={() => setModalOpen(!modalOpen)}
            className="bg-blue-700 hover:bg-blue-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5 w-full md:w-1/3 mx-auto flex items-center justify-center gap-5"
          >
            Donate Now
          </button>
        </div>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            closeModal={closeModal}
            id={supply?._id}
          />
        )}
      </Container>
    </div>
  );
};

export default SupplyDetails;
