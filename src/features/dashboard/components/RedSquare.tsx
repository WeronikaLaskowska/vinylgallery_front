import React, { useState } from "react";
import { Motion, spring } from "react-motion";

const RedSquare = () => {
  const [rotation, setRotation] = useState(0);

  const rotateLeft = () => {
    setRotation(rotation - 90); // Rotate 90 degrees left
  };

  const rotateRight = () => {
    setRotation(rotation + 90); // Rotate 90 degrees right
  };

  return (
    <div style={{ width: "200px", height: "200px", position: "relative" }}>
      <Motion
        defaultStyle={{ rotation: 0 }}
        style={{ rotation: spring(rotation) }}
      >
        {({ rotation }) => (
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotateZ(${rotation}deg)`,
              backgroundColor: "red",
            }}
          />
        )}
      </Motion>
      <button onClick={rotateLeft}>Rotate Left</button>
      <button onClick={rotateRight}>Rotate Right</button>
    </div>
  );
};

export default RedSquare;
