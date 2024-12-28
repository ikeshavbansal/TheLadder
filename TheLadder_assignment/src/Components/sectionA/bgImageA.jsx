import { motion, useTransform } from "framer-motion";
import photo1 from "../../assets/pic11.avif";
import photo4 from "../../assets/pic22.avif";
import photo5 from "../../assets/pic33.avif";
import photo6 from "../../assets/pic44.avif";

const BgImageA = ({ sections, adjustedScrollY }) => {
    return (
        <>
            {sections.map((section, index) => (
                <motion.div
                    key={index}
                    className="fixed inset-0 w-full h-screen md:block hidden"
                    style={{
                        filter: "brightness(0.65) grayscale(0)",
                        opacity: useTransform(
                            adjustedScrollY,
                            [index * 400 - 200, index * 400, index * 400 + 200],
                            [0, 1, 0]
                        ),
                        scale: useTransform(
                            adjustedScrollY,
                            [index * 400 - 100, index * 400, index * 400 + 100],
                            [
                                section.initialScale,
                                (section.initialScale + section.finalScale) / 2,
                                section.finalScale,
                            ]
                        ),
                        backgroundImage: `url(${
                        section.bgImage === "photo4"
                            ? photo4
                            : section.bgImage === "photo5"
                            ? photo5
                            : section.bgImage === "photo6"
                            ? photo6
                            : photo1
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "all 1s ease-out",
                    }}
                />
            ))}
        </>
    );
};

export default BgImageA;
