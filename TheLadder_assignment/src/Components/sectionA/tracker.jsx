import { motion, useTransform } from "framer-motion";

const Tracker =({sections,adjustedScrollY})=>
{
  return(<>
  {sections.map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-2 h-8 rounded-full !bg-orange-600 cursor-pointer"
                        style={{
                            opacity: useTransform(
                                adjustedScrollY,
                                [
                                    index * 400 - 100,
                                    index * 400,
                                    index * 400 + 100,
                                ],
                                [0.5, 1, 0.5]
                            ),
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        onClick={() => {
                            window.scrollTo({
                                top: 2*index * 400,
                                behavior: "smooth", 
                            });
                        }}
                    />
                ))}
  </>)
}
export default Tracker;