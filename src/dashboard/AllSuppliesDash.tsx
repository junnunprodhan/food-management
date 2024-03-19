import useGetSupplies from "../utils/usegetsupplies";
import Container from "../layout/Container";
import { Card, Typography } from "@material-tailwind/react";
import { TSupplies } from "../types";
import ShowSupplies from "./ShowSupplies";

const TABLE_HEAD = ["##", "Image", "Title", "Category", "Quantity", "Actions"];

const AllSuppliesDash = () => {
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
        No supplies
      </p>
    );
  }

  return (
    <div className="dark:bg-black dark:text-white">
      <Container className="py-5">
      <h1 className="text-3xl font-semibold text-center pb-8">All Supplies</h1>
        <Card placeholder={""} className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 dark:bg-black dark:text-white p-4"
                  >
                    <Typography
                      placeholder={""}
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data?.data?.map((supply: TSupplies, index: number) => (
                <ShowSupplies key={supply?._id} supply={supply} index={index} />
              ))}
            </tbody>
          </table>
        </Card>
      </Container>
    </div>
  );
};

export default AllSuppliesDash;
