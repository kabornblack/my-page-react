import React, { useRef } from "react";

function ImageEffect() {
  const imageRef = useRef(null);

  const handleMouseMove = (event) => {
    const image = imageRef.current;
    const rect = image.getBoundingClientRect();
    const x = event.clientX - rect.left; // X coordinate inside image
    const y = event.clientY - rect.top; // Y coordinate inside image

    const moveX = ((x - rect.width / 2) / rect.width) * 20; // Increased sensitivity
    const moveY = ((y - rect.height / 2) / rect.height) * 20;

    // Apply scale and translation based on mouse position
    image.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseLeave = () => {
    const image = imageRef.current;
    // Reset the transform to its original state
    image.style.transform = "scale(1)";
  };
  return (
    <div
      className="group relative overflow-hidden"
      style={{ width: "1000px", height: "1000px" }}
    >
      <img
        ref={imageRef}
        src="./profilePic/kabiru2.jpg"
        alt="Hover to scale and move"
        className="flex justify-end transition-transform duration-300 ease-in-out transform rounded-lg object-cover -top-52"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

export default ImageEffect;
