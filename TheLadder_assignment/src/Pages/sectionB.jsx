import React, { useState } from 'react';
import { motion } from 'framer-motion';


const Cube = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleScroll = (event) => {
    const delta = event.deltaY;
    setRotation(prev => ({
      x: prev.x + delta * 0.1,
      y: prev.y + delta * 0.1,
    }));
  };

  return (
    <div className="cube-container" onWheel={handleScroll}>
      <motion.div
        className="cube"
        style={{
          transform: `rotateX(${rotation.x}deg) `,
        }}
      >
        <div className="face front">Front</div>
        <div className="face back">Back</div>
        <div className="face left">Left</div>
        <div className="face right">Right</div>
        <div className="face top">Top</div>
        <div className="face bottom">Bottom</div>
      </motion.div>
    </div>
  );
};

export default Cube;
