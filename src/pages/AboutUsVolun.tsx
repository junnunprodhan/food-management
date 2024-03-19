import { useQuery } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import Container from "../layout/Container";
import { TVolunteer } from "../types";
const AboutUsVolun = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Volunteer"],
    queryFn: () => baseApiAxios.get("/get-volunteers"),
  });


  if (isLoading) {
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
      <h1 className="text-center text-3xl  font-bold py-10  ">
        Our Volunteers
      </h1>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
          {data?.data?.data?.map(
            ({
              name,
              image,
              phoneNumber,
              email,
              location,
              _id,
            }: TVolunteer) => (
              <div key={_id} className="border-2  shadow rounded-lg">
                <img src={image} alt="" className="h-44 mx-auto pt-2" />
                <div className="p-5 border-t-2">
                  <h1 className="text-xl font-semibold">{name}</h1>
                  <h1 className="">Email: {email}</h1>
                  <h1 className="">Contact: {phoneNumber}</h1>
                  <h1 className="">Location: {location}</h1>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </div>
  );
};

export default AboutUsVolun;
