import { motion } from "framer-motion"

const CardC=({zIndex,cardY,cardRotateZ,cardImg,delay,top})=>
{

   const transition = {
    duration: 0.8,
    ease: "easeInOut",
    delay: delay
  };

  return(<>
    <motion.div
      className="absolute w-full rounded-xl"
      style={{
        y: cardY,
        zIndex: zIndex,
        rotateZ: cardRotateZ ? cardRotateZ  : "",
        top: top,
        transformPerspective: 1000,
        backgroundImage:
          "linear-gradient(145deg, rgba(60,60,60,0.4) 0%, rgba(20,20,20,0.6) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
      transition={
        transition
        }
    >
    <img src={cardImg} />
    </motion.div>
  </>)
}


export default CardC