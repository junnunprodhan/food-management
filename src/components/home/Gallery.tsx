import Container from "../../layout/Container";
import img1 from "../../assets/gallery/slide1.jpg";
import img2 from "../../assets/gallery/slide2.jpg";
import img3 from "../../assets/gallery/slide3.jpg";
import img4 from "../../assets/gallery/slide4.jpg";
import img5 from "../../assets/gallery/slide5.jpg";
import img6 from "../../assets/gallery/slide6.jpg";
import img7 from "../../assets/gallery/slide7.jpg";
import img8 from "../../assets/gallery/slide8.jpg";
import img9 from "../../assets/gallery/slide9.jpg";
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
import { Swiper, SwiperSlide } from "swiper/react";
const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className="dark:bg-black">
      <Container>
        <h1 className="text-4xl md:text-6xl font-semibold text-center py-10 text-blue-600">
          Gallery
        </h1>
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          slidesPerView={1}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          {images.map((image) => (
            <div className="">
              <SwiperSlide className="">
                <img src={image} className="w-full  h-[80vh] object-cover rounded-lg" />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Gallery;
