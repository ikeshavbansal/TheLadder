import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FoldingBoxes = () => {
  const { scrollY } = useScroll();
  const box1Range = [0, 200, 400]; 
  const box2Range = [500, 600, 700];
  const box3Range = [700, 750, 800];

  const transition = {
    duration: 1.5,
    ease: "easeInOut", 
  };

  const box1RotateX = useTransform(scrollY, [box1Range[1], box1Range[2]], [0, -10]);
  const box1TranslateY = useTransform(scrollY, [box1Range[0], box1Range[1], box1Range[2]], [0, -50, -100]);
  const box1Scale = useTransform(scrollY, [box1Range[1], box1Range[2]], [1, 0.8]);
  const opacity1 = useTransform(scrollY, box1Range, [1, 1, 0.5]);

  const box2TranslateY = useTransform(scrollY, [0, box2Range[0], box2Range[1], box2Range[2]], [350, 150, 80, -50]);
  const box2RotateX = useTransform(scrollY, [box2Range[1], box2Range[2]], [0, -10]);
  const box2Scale = useTransform(scrollY, [box2Range[1], box2Range[2]], [1, 0.85]);
  const opacity2 = useTransform(scrollY, box2Range, [1, 1, 0.5]);

  const box3TranslateY = useTransform(scrollY, [0, box3Range[0], box3Range[1], box3Range[2],box3Range[2],box3Range[2]], [700,300, 250,100, 50, 10]);
  const box3RotateX = useTransform(scrollY, [box3Range[1], box3Range[2]], [0, -10]);
  const box3Scale = useTransform(scrollY, [box3Range[1], box3Range[2]], [1, 0.9]);
  const opacity3 = useTransform(scrollY, box3Range, [1, 1, 0.5]);

  return (
    <div className="min-h-screen">
      {/* <div className="h-[50vh]" /> */}
      <div className="sticky top-0 left-0 w-full h-screen pt-40">
        <div className="relative mx-10" style={{ perspective: '1000px' }}>
 
          <motion.div
            className="absolute top-0 w-full h-80 bg-white rounded-lg shadow-xl"
            style={{
              rotateX: box1RotateX,
              y: box1TranslateY,
              scale: box1Scale,
              transformOrigin: 'bottom',
              zIndex: 3,
              opacity: opacity1,
            }}
            transition={transition}
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold">Creation</h2>
              <p className="mt-4 text-lg text-gray-600">
                Vous avez une idée? Nous avons la méthode.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-0 w-full h-80 bg-white rounded-lg shadow-xl"
            style={{
              y: box2TranslateY,
              rotateX: box2RotateX,
              scale: box2Scale,
              transformOrigin: 'bottom',
              zIndex: 4,
              opacity: opacity2,
            }}
            transition={transition}
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold">Production</h2>
              <p className="mt-4 text-lg text-gray-600">
                Pour chaque projet, une équipe dédiée.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-0 w-full h-80 bg-white rounded-lg shadow-xl"
            style={{
              y: box3TranslateY,
              rotateX: box3RotateX,
              scale: box3Scale,
              transformOrigin: 'bottom',
              zIndex: 5,
              opacity: opacity3,
            }}
            transition={transition}
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold">Diffusion</h2>
              <p className="mt-4 text-lg text-gray-600">
                Avoir un podcast, c'est bien. Le faire entendre, c'est mieux.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-[200vh]" />
    </div>
  );
};

export default FoldingBoxes;
