import img from "../../assets/images/choose-us.png";
import Container from "../../layout/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const ClientsReview = [
  {
    _id: "123456789",
    name: "MD Khokon Mia",
    title: "Khokon's Dairy",
    text: "I can't express enough gratitude for the food donation we received during such a challenging time. As a single parent struggling to make ends meet, putting food on the table for my family has been a constant worry",
  },
  {
    _id: "123456789e2",
    name: "MD Faruk Ahmed",
    title: "Amartolet",
    text: "I can't express enough gratitude for the food donation we received during such a challenging time. As a single parent struggling to make ends meet, putting food on the table for my family has been a constant worry",
  },
  {
    _id: "12345678439",
    name: "MD Robiul Islam",
    rating: 4.9,
    title: "Priyo it",
    text: "I can't express enough gratitude for the food donation we received during such a challenging time. As a single parent struggling to make ends meet, putting food on the table for my family has been a constant worry",
  },
  {
    _id: "123456789432",
    name: "MD Shihab mia",
    title: "Technetia",
    text: "I can't express enough gratitude for the food donation we received during such a challenging time. As a single parent struggling to make ends meet, putting food on the table for my family has been a constant worry",
  },
  {
    _id: "1234567854449",
    name: "MD Rashikul Islam",
    title:
      "I can't express enough gratitude for the food donation we received during such a challenging time. As a single parent struggling to make ends meet, putting food on the table for my family has been a constant worry",
  },
];
const ClientTestimonial = () => {
  const ref = useRef<any>(null);
  return (
    <div className="bg-[#F8F7F2] dark:bg-black p-10 ">
      <Container className="grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">
        <motion.img
          initial={{ x: -300, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          src={img}
          alt=""
        />
        <motion.div  initial={{ x: 300, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}>
          <h1 className="text-5xl  font-semibold pt-5">
            <span className="text-green-900">Testimonials from </span>
            <span className="text-green-500"> Beneficiaries</span>
          </h1>

          <div className="relative">
            <Swiper
              ref={ref}
              grabCursor={true}
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              slidesPerView={1}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              {ClientsReview.map((review, index) => (
                <div key={index} className="">
                  <SwiperSlide className="">
                    <div className=" py-10 ">
                      <div className="flex flex-col space-y-2 justify-between items-center">
                        <div className="">
                          <img
                            src={"https://i.ibb.co/ZgzJHp5/images-3.jpg"}
                            alt=""
                            className="w-24 h-24  rounded-full  object-cover"
                          />
                        </div>

                        <h1 className="pt-4 text-2xl  text-center font-semibold text-green-900">
                          {review.name}
                        </h1>
                        <p className="text-sm text-center pt-8 text-green-900">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
            <div className=" absolute -bottom-5 inset-0 flex gap-3 md:gap-0 justify-center  md:justify-between md:items-center items-end z-10">
              <button
                onClick={() => ref.current.swiper.slidePrev()}
                className="bg-green-800 text-white p-2 rounded-full relative md:-left-6"
              >
                <BsArrowLeft className=" w-10 h-10" />
              </button>
              <button
                onClick={() => ref.current.swiper.slideNext()}
                className="bg-green-800 text-white p-2 rounded-full relative md:-right-6"
              >
                <BsArrowRight className=" w-10 h-10" />
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ClientTestimonial;
