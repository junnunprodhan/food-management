import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import useGetSupplies from "../utils/usegetsupplies";
import { TSupplies } from "../types";
import Container from "../layout/Container";
import { useQuery } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";

const Dashboard = () => {
  const { data, isPending } = useGetSupplies();
  const { data: categoryData, isLoading } = useQuery({
    queryKey: ["Category"],
    queryFn: () => baseApiAxios("/donation-category"),
  });
  if (isPending || isLoading) {
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

  const babyCare = categoryData?.data?.data.find(
    (supply: TSupplies) => supply?.category === "Baby Care"
  )?.totalDonate;
  const healthy = categoryData?.data?.data.find(
    (supply: TSupplies) => supply?.category === "Healthy"
  )?.totalDonate;
  const hygieneProduct = categoryData?.data?.data.find(
    (supply: TSupplies) => supply?.category === "Hygiene Products"
  )?.totalDonate;

  const chartData = [
    {
      name: "Group A",
      value: babyCare,
    },
    {
      name: "Group B",
      value: healthy,
    },
    {
      name: "Group C",
      value: hygieneProduct,
    },
  ];
  const COLORS = ["red", "blue", "green"];

  const RADIAN = Math.PI / 180;
  type TRecharts = {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
  };
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: TRecharts) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="dark:bg-black dark:text-white pb-16">
      <Container className="h-full">
        <div className="flex items-center justify-center gap-10 pt-5 ">
          <ResponsiveContainer width={200} height={200} className="z-50">
            <PieChart className="">
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                className=""
              >
                {chartData.map(
                  (entry: { name: string; value: number }, index: number) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      name={entry?.name}
                    />
                  )
                )}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="flex flex-col justify-between gap-3">
            <div className="flex items-center gap-3">
              <p className="bg-green-600 h-6 w-6 rounded-md md:h-8  md:w-8  "></p>
              <p>Hygiene Products</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="bg-red-600 h-6 w-6 rounded-md md:h-8  md:w-8  "></p>
              <p>Baby Care</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="bg-[#0000FF] h-6 w-6 rounded-md md:h-8  md:w-8  "></p>
              <p>Healthy</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="pt-5 font-semibold">
            This chart is showing donated supply percentage by categories
          </h1>
          <p className="pt-5 text-justify">
            <span className="font-semibold ">
              Decision-making and strategic planning:
            </span>
            <span className="">
              In the realm of decision-making and strategic planning concerning
              food distribution and supply management, a multifaceted approach
              is paramount. Firstly, thorough analysis of demand patterns,
              market trends, and logistical constraints must be conducted to
              ensure efficient allocation of resources. This necessitates the
              utilization of data-driven methodologies and predictive analytics
              to anticipate consumer needs and streamline supply chains.
              Moreover, fostering robust partnerships with suppliers,
              distributors, and other stakeholders is imperative to enhance
              agility and resilience in the face of unforeseen disruptions.
              Embracing technological innovations such as blockchain and IoT can
              further optimize traceability and transparency throughout the
              supply network, bolstering food safety and quality assurance
              measures. Additionally, prioritizing sustainability initiatives
              and ethical sourcing practices not only aligns with societal
              expectations but also cultivates long-term viability in a rapidly
              evolving global landscape. Ultimately, by integrating these
              strategic elements into decision-making processes, organizations
              can navigate complexities, mitigate risks, and cultivate a
              resilient food distribution system that meets the needs of both
              present and future generations.
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
