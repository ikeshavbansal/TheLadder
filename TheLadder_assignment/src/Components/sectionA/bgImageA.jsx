import { motion,useTransform } from "framer-motion";

const BgImageA=({sections,adjustedScrollY})=>
{
  return (<>
        {sections.map((section, index) => (
                  <motion.div
                      key={index}
                      className="fixed inset-0 w-full h-screen"
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
                          backgroundImage: `url(${section.bgImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "all 1s ease-out",
                      }}
                  />
              ))}
              </>
  )
}

export default BgImageA;