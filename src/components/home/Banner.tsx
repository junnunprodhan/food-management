import banner from "../../assets/images/banner.jpg";
import Container from "../../layout/Container";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="flex overflow-hidden flex-col- justify-center items-center w-full h-full md:h-[90vh] dark:bg-black">
      <Container className="flex flex-col-reverse md:flex-row items-center pt-10 gap-10 md:gap-5">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          <h1 className="text-4xl md:text-6xl  font-bold uppercase text-blue-800">
            Simple, Efficient Distribution
          </h1>
          {/* <h1 className="text-4xl md:text-6xl font-bold uppercase pt-1 md:pt-3 text-[#3d6e63]">
            Global Community
          </h1> */}
          <p className="pt-5 dark:text-gray-200">
            A full service distribution company, Sherwood Food Distributors has
            moved beyond the supply of meats into complete category management
            responsibilities for our customers. With leading edge technological
            capabilities, we are positioned to provide retail and wholesale
            customer solutions and options unrivaled in value, quality and
            reliability.
          </p>
          <div className="pt-5">
            <button className="bg-[#AD4F47] hover:bg-[#663834] duration-500 px-10 py-3 text-white font-semibold rounded-md">
              MORE INFO
            </button>
          </div>
        </motion.div>
        <motion.img
          initial={{ x: 300, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          src={banner}
          alt=""
          className="w-full rounded-lg"
        />
      </Container>
    </div>
  );
};

export default Banner;
