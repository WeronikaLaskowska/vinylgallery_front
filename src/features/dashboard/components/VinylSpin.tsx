import React, { useRef, useState, MouseEvent } from "react";

const VinylSpin = () => {
  const vinylRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [startRotation, setStartRotation] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (vinylRef.current) {
      const rect = vinylRef.current.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      setStartX(currentX);
      setStartRotation(rotation);
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !vinylRef.current || startX === null) return;
    const currentX =
      e.clientX - (vinylRef.current.getBoundingClientRect().left || 0);
    const diffX = currentX - startX;
    const rotationChange = (diffX / 3) % 360; // Adjust the rotation speed here
    const newRotation = startRotation + rotationChange;
    setRotation(newRotation);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const vinylStyle = {
    transform: `rotate(${rotation}deg)`, // Apply rotation transformation
  };

  return (
    <div>
      <div id="album">
        <div id="cover">
          <div id="print"></div>
        </div>
        <div
          id="vinyl"
          ref={vinylRef}
          className="vinyl"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Handle mouse leaving the element
          style={vinylStyle}
        >
          <div id="print"></div>
        </div>
      </div>
    </div>
  );
};

export default VinylSpin;
