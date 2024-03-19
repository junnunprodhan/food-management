import { useState } from "react";
import Container from "../../layout/Container";
import { Link } from "react-router-dom";
import useGetSupplies from "../../utils/usegetsupplies";
import { TSupplies } from "../../types";
import { motion } from "framer-motion";
const Supplies = () => {
  const [suppliesItem, setSuppliesItem] = useState(6);
  const { data, isPending } = useGetSupplies();
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

  const parent = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="dark:bg-black">
      <Container className="pt-8 ">
        <h1 className="text-center text-6xl font-bold pb-14 text-blue-800">
          Supplies
        </h1>
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delayChildren: 0.5,
            staggerChildren: 0.5,
            ease: "easeIn",
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 dark:text-gray-200"
        >
          {data?.data?.data
            ?.slice(0, suppliesItem)
            ?.map((supply: TSupplies) => (
              <motion.div
                key={supply?._id}
                className="border shadow-lg rounded-md"
              >
                <img
                  src={supply?.image}
                  alt=""
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h1 className="text-xl font-semibold">{supply?.title}</h1>
                  <p className="text-lg pt-1">Category: {supply?.category}</p>
                  <p className="text-lg">Quantity: {supply?.quantity}</p>
                  <Link to={`/supplies/${supply?._id}`}>
                    {" "}
                    <button className="bg-blue-700 hover:bg-blue-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5">
                      View Detail
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
        </motion.div>
        <div className="flex justify-center pt-5">
          <button
            onClick={() => setSuppliesItem(9)}
            className={`bg-[#AD4F47] hover:bg-[#663834] duration-500 px-10 py-3 text-white font-semibold rounded-md mt-5 ${
              suppliesItem > 6 ? "hidden" : "visible"
            }`}
          >
            View All
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Supplies;
