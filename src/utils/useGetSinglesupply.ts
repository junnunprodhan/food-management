import { useQuery } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";

export const useGetSingleSupply = (id: string) => {
  const response = useQuery({
    queryKey: ["Supplies"],
    queryFn: () => baseApiAxios(`/supplies/${id}`),
  });
  return response?.data?.data?.data;
};
