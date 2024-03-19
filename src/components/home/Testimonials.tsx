import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import Container from "../../layout/Container";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { baseApiAxios } from "../../api/baseApiAxios";
import { TTestimonial } from "../../types";

const Testimonials = () => {
  const { data: clientsReview, isPending } = useQuery({
    queryKey: ["Testimonial"],
    queryFn: () => baseApiAxios.get("/testimonial"),
  });

  const ref = useRef<any>(null);
  const [preview, setPreview] = useState(3);

  useEffect(() => {
    const swipePreview = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setPreview(1);
      } else if (windowWidth <= 980) {
        setPreview(3);
      } else {
        setPreview(3);
      }
    };
    swipePreview();
    window.addEventListener("resize", swipePreview);
    return () => {
      window.removeEventListener("resize", swipePreview);
    };
  });

  if (isPending) {
    return (
      <p className="flex items-center justify-center text-xl font-semibold h-screen dark:text-white">
        Loading...
      </p>
    );
  }

  if (!clientsReview?.data?.data?.length) {
    return (
      <p className="flex items-center justify-center text-xl font-semibold h-screen dark:text-white">
        Loading...
      </p>
    );
  }

  return (
    <div className="dark:bg-black">
      <Container className="py-10">
        <h1 className="text-4xl md:text-6xl font-semibold text-center py-8 md:py-12 text-blue-600">
          Donor Testimonials
        </h1>
        <div
          className=" relative"
          onMouseEnter={() => ref?.current?.swiper?.autoplay.stop()}
          onMouseLeave={() => ref?.current?.swiper?.autoplay.start()}
        >
          <Swiper
            ref={ref}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            slidesPerView={preview}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="swiper_container dark:text-white"
          >
            {clientsReview?.data?.data?.map((review: TTestimonial) => (
              <div key={review?._id} className="">
                <SwiperSlide className="">
                  <div className=" py-10 ">
                    <div className="flex flex-col space-y-2 justify-between items-center">
                      <div className="border-8 border-r-deep-purple-700 border-l-red-700 border-t-yellow-700 border-b-green-700 rounded-full p-2">
                        <img
                          src={review?.image}
                          alt=""
                          className="w-20 h-20  rounded-full  object-cover"
                        />
                      </div>

                      <h1 className="pt-4 text-lg text-center font-semibold">
                        {review.name}
                      </h1>
                      <p className="text-sm text-center">
                        {review.description}
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
              className="bg-blue-500 text-white p-2 rounded-full relative md:-left-6"
            >
              <BsArrowLeft className=" w-10 h-10" />
            </button>
            <button
              onClick={() => ref.current.swiper.slideNext()}
              className="bg-blue-500 text-white p-2 rounded-full relative md:-right-6"
            >
              <BsArrowRight className=" w-10 h-10" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
