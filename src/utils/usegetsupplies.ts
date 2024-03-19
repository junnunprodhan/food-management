import { useQuery } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";


const useGetSupplies = () =>{
   const response = useQuery({
    queryKey: ["Supplies"],
    queryFn: () => baseApiAxios("/supplies"),
  });
  return response
}


export default useGetSupplies;