import image from "../../assets/images/nutritionist.png";
import Container from "../../layout/Container";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
const NutritionTips = () => {
  const advices = [
    "Children Nutrition",
    "Lifestyle In Pregnancy",
    "Diet Health Service",
    "Protein Advice",
    "Balance Body & Mind",
    "Workout Routines",
    "Poor Eating Habits",
    "Digestive Problems",
  ];
  return (
    <div className="dark:bg-black">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 overflow-hidden">
        <motion.img
          initial={{ x: 300, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          src={image}
          alt=""
          className="w-full md:w-3/4 mx-auto"
        />
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          <h1 className="font-bold text-5xl  text-green-900">Nutrition tips</h1>
          <p className=" text-4xl  text-green-600 font-semibold mt-3">
            Care About Nutrition For Your Health
          </p>
          <p className="text-lg text-gray-600 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            dignissim lectus. Pellentesque et scelerisque nunc. Sed vel ipsum
            auctor, iaculis arcu quis, posuere duis.{" "}
          </p>
          <div className="grid grid-cols-2 gap-2 pt-8">
            {advices.map((advice, index) => (
              <p className="flex items-center gap-3 text-lg text-gray-700">
                <FaCheck
                  className={`${
                    index % 2 ? " text-yellow-600" : "text-green-600"
                  } `}
                />
                {advice}
              </p>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default NutritionTips;
