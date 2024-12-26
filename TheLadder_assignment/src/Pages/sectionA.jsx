import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import photo1 from "../assets/pic1.jpg";
import photo2 from "../assets/pic2.jpg";
import photo3 from "../assets/pic3.jpg";
import photo4 from "../assets/pic4.jpg";
import photo5 from "../assets/pic5.jpg";
import photo6 from "../assets/pic6.jpg";
import photo7 from "../assets/pic7.jpg";
import photo8 from "../assets/pic8.jpg";
import photo9 from "../assets/pic9.jpg";

const SectionA = () => {
    const { scrollY } = useScroll();

    const sections = [
        {
            title: "Modern UI Development",
            description:
                "Crafting responsive, user-friendly interfaces using ReactJS, ensuring seamless user experiences across devices. Specializing in reusable component libraries and design systems.",
            bgImage: photo6,
            bgColor: "rgb(245, 124, 71)",
            initialScale: 0.7,
            finalScale: 0.8,
        },
        {
            title: "State Management",
            description:
                "Expertise in Redux and Context API for efficient application state handling, enabling scalable and maintainable frontend architectures.",
            bgImage: photo5,
            bgColor: "rgb(44, 28, 21)",
            initialScale: 0.8,
            finalScale: 0.9,
        },
        {
            title: "API Integration",
            description:
                "Building robust applications with RESTful API integration, ensuring secure data handling and efficient communication between frontend and backend systems.",
            bgImage: photo1,
            bgColor: "rgb(245, 124, 71)",
            initialScale: 0.9,
            finalScale: 0.95,
        },
        {
            title: "Performance Optimization",
            description:
                "Enhancing application performance through lazy loading, code splitting, and optimizing asset delivery for faster load times and smoother interactions.",
            bgImage: photo4,
            bgColor: "rgb(44, 28, 21)",
            initialScale: 0.95,
            finalScale: 1,
        },
    ];

    const rotateX = useTransform(
        scrollY,
        [0, 200, 400, 600],
        [0, -90, -180, -270]
    );

    const headerScale = useTransform(
        scrollY,
        [0, 200, 400, 600],
        [1, 0.9, 0.85, 0.8]
    );

    return (
        <div
            className="h-[200vh] relative overflow-hidden"
            style={{
                fontFamily:
                    "var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))",
            }}
        >
            {sections.map((section, index) => (
                <motion.div
                    key={index}
                    className="fixed inset-0 w-full h-screen"
                    style={{
                        opacity: useTransform(
                            scrollY,
                            [index * 200 - 100, index * 200, index * 200 + 100],
                            [0, 1, 0]
                        ),
                        scale: useTransform(
                            scrollY,
                            [index * 200 - 50, index * 200, index * 200 + 50],
                            [
                                section.initialScale,
                                (section.initialScale + section.finalScale) / 2,
                                section.finalScale,
                            ]
                        ),

                        backgroundImage: `url(${section.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            ))}

            {/* <motion.h1
                className="fixed top-16 left-1/2 -translate-x-1/2 text-7xl text-[#FF7F50] font-light z-10"
                style={{ scale: headerScale }}
            >
                My Expertise
            </motion.h1> */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.h1
                    className=" mb-[-50px] -translate-x-1/2 text-[50px] md:text-[100px] text-[rgb(255,96,22)] font-[200px] z-10 text-center"
                    style={{ scale: headerScale }}
                >
                    My Expertise
                </motion.h1>
                <div className="relative perspective-1000">
                    <motion.div
                        className="relative w-[600px] h-[300px]"
                        style={{
                            rotateX,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className="absolute inset-0 w-[600px] h-[300px] p-12 backdrop-blur-sm"
                                style={{
                                    transform: `rotateX(${
                                        index * 90
                                    }deg) translateZ(150px)`,
                                    backgroundColor: section.bgColor,
                                    backdropFilter: "blur(8px)",
                                    backfaceVisibility: "hidden",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <h2
                                    className={`absolute top-4 left-4 text-3xl font-light ${
                                        index % 2 == 0
                                            ? "text-black"
                                            : "text-white"
                                    } font-display`}
                                >
                                    {section.title}
                                </h2>
                                <p
                                    className={`absolute bottom-10 text-lg ${
                                        index % 2 == 0
                                            ? "text-black/70"
                                            : "text-white/70"
                                    } leading-relaxed max-w-l`}
                                >
                                    {section.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="fixed right-1/4 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
                {sections.map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-2 h-8 rounded-full !bg-orange-600"
                        style={{
                            opacity: useTransform(
                                scrollY,
                                [
                                    index * 200 - 50,
                                    index * 200,
                                    index * 200 + 50,
                                ],
                                [0.5, 1, 0.5]
                            ),
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionA;
