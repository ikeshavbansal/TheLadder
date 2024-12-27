import { motion } from "framer-motion";

const ContentBox = ({
    boxTranslateY,
    boxRotateX,
    boxScale,
    zIndex,
    children,
    boxColor,
}) => {
    const transition = {
        duration: 1.5,
        ease: "easeInOut",
    };

    return (
        <motion.div
            className="absolute top-0 p-8 w-full bg-white rounded-lg shadow-xl"
            style={{
                y: boxTranslateY,
                rotateX: boxRotateX,
                scale: boxScale,
                transformOrigin: "bottom",
                zIndex: zIndex,
                backgroundColor: boxColor,
            }}
            transition={transition}
        >
            {children}
        </motion.div>
    );
};

export default ContentBox;
