import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <div className="hidden md:block">
      <motion.div
        className="relative flex justify-center items-center"
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        whileInView={{ opacity: 1 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
      >
        <div
          className="absolute rounded-full border border-gray-500 mt-52 animate-ping z-30"
          style={{ width: "200px", height: "200px" }}
        />

        <div
          className="absolute rounded-full border border-gray-600 mt-52 z-20"
          style={{ width: "300px", height: "300px" }}
        />
        <div
          className="absolute rounded-full border border-gray-700 mt-52 "
          style={{ width: "500px", height: "500px" }}
        />
        <div
          className="absolute rounded-full border border-gray-800 mt-52 animate-pulse z-30"
          style={{ width: "650px", height: "650px" }}
        />
        <div
          className="absolute rounded-full border border-gray-700 mt-52 animate-pulse"
          style={{ width: "800px", height: "800px" }}
        />
      </motion.div>
    </div>
  );
}

export default BackgroundCircles;



