import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="w-12 h-12 rounded-full bg-gray-800"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    );
};

export default Loader;
