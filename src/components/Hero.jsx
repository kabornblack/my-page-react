import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero(props) {
  const [text] = useTypewriter({
    words: [
      "Hi - The Name's Kabiru Shaibu",
      "Full Of Life And Love To--Code!",
      "Dedicated, Diciplined, Organised, Professional",
      "I'm currently Available!",
    ],
    loop: 9,
    onLoopDone: () => console.log(`loop completed after 2 runs.`),
    typeDelay: 100,
    eraseDelay: 1,
    typeSpeed: 100,
    eraseSpeed: 2,
    fade: true,
  });
  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center text-center pt-20">
        <BackgroundCircles />
        <div className="z-30 flex flex-col items-center">
          <motion.div
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.1,
            }}
            animate={{
              x: 0,
              opacity: 0.9,
              scale: [3, 0.5, 1.2, 1],
            }}
            transition={{ duration: 2 }}
          >
            <img
              src="./profilePic/profile.jpg"
              alt="page image"
              className="h-52 w-52 rounded-full object-cover mb-24 -mt-40 md:mb-8 md:mt-0 space-y-5 hover:scale-110 transition duration-300 ease-in-out transform hover:transform"
            />
          </motion.div>
          <div className="text-gray-400">
            <h2
              className="text-sm text-gray-500 uppercase pb-8"
              style={{ letterSpacing: "20px" }}
            >
              software engineer
            </h2>
            <h1 className="font-mono uppercase text-sm">
              <span>{text}</span>
              <Cursor />
            </h1>
            <motion.div
              initial={{
                x: 0,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 2 }}
              className="pt-8"
            >
              <a href="#about" scroll={true}>
                <button
                  className="px-6 py-3 rounded-full uppercase text-xs tracking-widest text-gray-600 transition-all
    hover:border hover:bg-gray-800 hover:text-gray-400"
                >
                  About
                </button>
              </a>
              {/* <a href="#experience">
                <button
                  className="px-6 py-3 rounded-full uppercase text-xs tracking-widest text-gray-600 transition-all
    hover:border hover:bg-gray-800 hover:text-gray-400"
                >
                  Experience
                </button>
              </a> */}
              <a href="#skills" scroll={true}>
                <button
                  className="px-6 py-3 rounded-full uppercase text-xs tracking-widest text-gray-600 transition-all
    hover:border hover:bg-gray-800 hover:text-gray-400"
                >
                  Skills
                </button>
              </a>
              <a href="#projects">
                <button
                  className="px-6 py-3   rounded-full uppercase text-xs tracking-widest text-gray-600 transition-all
    hover:border hover:bg-gray-800 hover:text-gray-400"
                >
                  Project
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
