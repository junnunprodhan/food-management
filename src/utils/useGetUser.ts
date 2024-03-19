import { baseApiAxios } from "../api/baseApiAxios";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../redux/hooks";
import { currentUser } from "../redux/features/auth/authSlice";

const useGetUser = () => {
  const email = useAppSelector(currentUser);
  const response = useQuery({
    queryKey: ["User"],
    queryFn: () => baseApiAxios.get(`/user?email=${email!}`),
  });
  return response?.data?.data?.data;
};
export default useGetUser;
