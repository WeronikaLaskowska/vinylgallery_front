import React, { useState } from "react";
import { motion } from "framer-motion";

interface VinylSpinnerProps {
  isSpinning: boolean;
}

const RedSquare = ({ isSpinning }: VinylSpinnerProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [prevMouseX, setPrevMouseX] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setPrevMouseX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const mouseDeltaX = e.clientX - prevMouseX;
    setRotation(rotation + mouseDeltaX);
    setPrevMouseX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ width: "200px", height: "200px", position: "relative" }}
    >
      <motion.div
        id="vinyl"
        drag={false}
        style={{
          width: "570px",
          height: "570px",
          position: "absolute",
          transform: ` rotate(${rotation}deg)`,
          backgroundColor: "red",
          cursor: "grab",
          animation: isSpinning
            ? "5s linear spinThat infinite, 1s ease-out getOut 1s forwards"
            : "1s ease-out getOut 1s forwards",
        }}
      ></motion.div>
    </div>
  );
};

export default RedSquare;
