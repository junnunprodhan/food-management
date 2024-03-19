import AboutUs from "../components/home/AboutUs";
import Testimonials from "../components/home/Testimonials";
import ClientTestimonial from "../components/home/ClientTestimonial";
import Gallery from "../components/home/Gallery";
import NutritionTips from "../components/home/NutritionTips";
import Banner from "../components/home/Banner";
import Supplies from "../components/home/Supplies";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Supplies/>
      <Testimonials />
      <Gallery/>
      <AboutUs />
      <ClientTestimonial />
      <NutritionTips/>
    </div>
  );
};

export default Home;
