import image from "../../assets/images/about-img.png";
import organic1 from "../../assets/images/organic-food-1.png";
import organic2 from "../../assets/images/organic-food2.png";
import Container from "../../layout/Container";

const AboutUs = () => {
  return (
    <div className="bg-[#F7F8FA] dark:bg-black py-20">
      <Container className="flex flex-col md:flex-row gap-10 ite py-10">
        <img src={image} alt="" />
        <div>
          <h1 style={{ fontFamily: "cursive" }} className="text-4xl ">
            ABOUT US
          </h1>
          <h1 className="text-5xl  font-semibold pt-5">
            <span className="text-green-900">
              We Believe In Work
            </span>
          
          </h1>
          <p className="font-semibold text-lg text-gray-700 pt-5">
            Food distribution and supply is a family run company founded in 2004
          </p>
          <div>
            <div className="flex items-center justify-between pt-5">
              <img src={organic1} alt="" />
              <p className="text-green-900 text-xl font-semibold">
                Why Healthy?
              </p>

              <img src={organic2} alt="" />
              <p className="text-green-900 text-xl font-semibold">
                Speciality Produce
              </p>
            </div>
          </div>
          <p className="text-green-700 pt-5">
            Food distribution and supply refer to the processes involved in
            ensuring that food products are efficiently transported from
            producers to consumers, meeting demand while maintaining quality and
            safety standards. This intricate system encompasses various stages,
            from production and processing to transportation, storage, and
            retailing.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
