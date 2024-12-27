import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import photo1 from "../assets/pic11.avif";
import photo4 from "../assets/pic22.avif";
import photo5 from "../assets/pic33.avif";
import photo6 from "../assets/pic44.avif";
import BgImageA from "../Components/sectionA/bgImageA";
import CubeA from "../Components/sectionA/cubeA";
import Tracker from "../Components/sectionA/tracker";

const SectionA = () => {
    const { scrollY } = useScroll();
    const adjustedScrollY = useTransform(scrollY, (y) => y / 2);

    const sections = [
        {
            title: "Documentary Photography",
            description:
                "Documentary photography serves to inform, educate, and inspire by providing a truthful and insightful representation of the world. It is used to raise awareness about important issues, document significant events, and preserve historical moments.",
            bgImage: photo4,
            bgColor: "rgb(44, 28, 21)",
            initialScale: 0.7,
            finalScale: 0.8,
        },
        {
            title: "Landscape Photography",
            description:
                "Explore the beauty of the world through our captivating landscape photography. From breathtaking vistas to hidden gems, we'll take you on a visual journey that will inspire and awe.",
            bgImage: photo6,
            bgColor: "rgb(245, 124, 71)",
            initialScale: 0.8,
            finalScale: 0.9,
        },
        {
            title: "Product Photography",
            description:
                "Showcase your products in the best possible light with our professional product photography services. Whether you're selling online or in print, we'll create images that highlight the unique features of your products and attract customers.",
            bgImage: photo5,
            bgColor: "rgb(44, 28, 21)",
            initialScale: 0.9,
            finalScale: 0.95,
        },
        {
            title: "Real Estate Photography",
            description:
                "Highlight the best features of your property with our real estate photography services. We'll use professional lighting and composition techniques to create images that make your property stand out and attract potential buyers.",
            bgImage: photo1,
            bgColor: "rgb(245, 124, 71)",
            initialScale: 0.95,
            finalScale: 1,
        },
    ];

    const rotateX = useTransform(
        adjustedScrollY,
        [0, 400, 800, 1200],
        [0, -90, -180, -270]
    );

    const headerScale = useTransform(
        adjustedScrollY,
        [0, 400, 800, 1200],
        [1, 0.9, 0.85, 0.8]
    );

    return (
        <div
            className="h-[400vh] overflow-hidden"
            style={{
                fontFamily:
                    "var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))",
            }}
        >
            <BgImageA sections={sections} adjustedScrollY={adjustedScrollY} />

            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.h1
                    className="mb-[-50px] -translate-x-1/2 text-[50px] md:text-[100px] text-[rgb(255,96,22)] font-[200px] z-10 text-center"
                    style={{ scale: headerScale }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    My Expertise
                </motion.h1>
                <div className="relative perspective-1000">
                    <motion.div
                        className="relative w-[600px] h-[300px]"
                        style={{
                            rotateX,
                            transformStyle: "preserve-3d",
                            transition: "transform 1s ease-out",
                        }}
                    >
                        <CubeA sections={sections}/>
                    </motion.div>
                </div>
            </div>
            <div className="fixed right-1/4 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
                <Tracker sections={sections} adjustedScrollY={adjustedScrollY}/>
            </div>
        </div>
    );
};

export default SectionA;