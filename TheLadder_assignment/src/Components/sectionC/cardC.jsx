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
      className="absolute w-full rounded-xl cardC"
      style={{
        y: cardY,
        zIndex: zIndex,
        rotateZ: cardRotateZ ? cardRotateZ  : "",
        top: top,
        transformPerspective: 1000,
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