import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import card1C from "../assets/card1C.svg"
import card2C from "../assets/card2C.svg"
import CardC from "../Components/sectionC/cardC";
import CursorEffect from "../Components/sectionC/cursorEffect";


const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();

  const card1RotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 10]);
  const card1Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, -150]);

  const card2Y = useTransform(scrollYProgress, [0, 0.5, 1], [10, 40, 0]);

  const card3RotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, 20]);
  const card3Y = useTransform(scrollYProgress, [0, 0.5, 1], [10, 100, 150]);

  const transition = {
    duration: 0.8,
    ease: "easeInOut",
  };

  return (
    <>

      <CursorEffect/>

      <div className="h-[50vh]" />
      <div className="h-[120vh] relative overflow-hidden">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${(i + 1) * 200}px`,
                height: `${(i + 1) * 200}px`,
                scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.5]),
                boxShadow: "0px 0px 40px 40px rgba(79, 77, 77, 0.8)",
                opacity: 0.1,
              }}
              transition={{
                ...transition,
                delay: i * 0.1,
              }}
            />
          ))}

          <div className="relative w-[550px] h-[300px]">
            <CardC zIndex={4} top={0} cardY={card1Y} cardRotateZ={card1RotateZ} cardImg={card2C} delay={"0"}/>
            <CardC zIndex={3} top={40} cardY={card2Y} cardImg={card1C} delay={"0.3"}/>
            <CardC zIndex={2} top={80} cardY={card3Y} cardRotateZ={card3RotateZ} cardImg={card2C} delay={"0.5"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollAnimation;
