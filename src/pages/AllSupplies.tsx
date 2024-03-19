import { Link } from "react-router-dom";
import Container from "../layout/Container";
import useGetSupplies from "../utils/usegetsupplies";
import { TSupplies } from "../types";

const AllSupplies = () => {
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
  return (
    <div className="dark:bg-black dark:text-white">
      <Container className="py-10">
        <h1 className="text-center text-3xl font-bold pb-10  ">
          All Supplies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.data?.data?.map((supply: TSupplies) => (
            <div key={supply?._id} className="border shadow-lg rounded-md">
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
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllSupplies;
