import { useQuery } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import { Card, Typography } from "@material-tailwind/react";
import Container from "../layout/Container";
type TLeaderBoard = {
  title: string;
  category: string;
  userName: string;
  userEmail: string;
  donateSupply: number;
  _id: string;
};

type TDonationSort = {
  donateSupply: number;
};
const LeaderBoard = () => {
  const { data, isPending } = useQuery({
    queryKey: ["Category"],
    queryFn: () => baseApiAxios("/donner-info"),
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

  const TABLE_HEAD = ["#", "User Name", "Email", "Donated Supply"];
  return (
    <div className="dark:bg-black dark:text-white h-screen">
      <Container>
      <h1 className="text-3xl font-semibold text-center py-8">Leader board</h1>
        <Card
          placeholder={""}
          className="h-full w-full overflow-scroll p-2 dark:bg-black "
        >
          <table className="w-full min-w-max table-auto text-left ">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 dark:bg-black dark:text-white"
                  >
                    <Typography
                      placeholder={""}
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70 dark:text-white"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data?.data
                ?.filter((item: TLeaderBoard) => item)
                .sort(
                  (a: TDonationSort, b: TDonationSort) =>
                    b.donateSupply - a.donateSupply
                )
                .map(
                  (
                    { userName, userEmail, donateSupply, _id }: TLeaderBoard,
                    index: number
                  ) => (
                    <tr key={_id}>
                      <td className="dark:text-white">{index + 1}</td>

                      <td>
                        <Typography
                          placeholder={""}
                          variant="small"
                          color="blue-gray"
                          className="font-normal dark:text-white"
                        >
                          {userName}
                        </Typography>
                      </td>
                      <td>
                        <Typography
                          placeholder={""}
                          variant="small"
                          color="blue-gray"
                          className="font-normal dark:text-white"
                        >
                          {userEmail}
                        </Typography>
                      </td>
                      <td>
                        <Typography
                          placeholder={""}
                          variant="small"
                          color="blue-gray"
                          className="font-normal dark:text-white"
                        >
                          {donateSupply} supplies
                        </Typography>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </Card>
      </Container>
    </div>
  );
};

export default LeaderBoard;
