import { motion } from "framer-motion";
import { useEffect,useState } from "react";

const CursorEffect=()=>
{

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

  return (<>
    <motion.div
        className="fixed z-50 pointer-events-none"
        style={{
          x: cursorPosition.x,
          y: cursorPosition.y,
          width: 60,
          height: 60,
          opacity:0.05,
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 0 20px rgba(255, 255, 255,1)",
        }}
        transition={{ duration: 0.5 }}
      />
  </>)
}

export default CursorEffect