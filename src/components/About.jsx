import React from "react";
import Stack from "@mui/material/Stack";
import LetterAvatars from "./LetterAvatars";
import { about } from "./letters";
import { abouth3, aboutMe } from "./data/aboutData";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col relative min-h-screen text-center pt-28 md:text-left md:flex-row max-w-5xl px-20 py-24 justify-evenly mx-auto items-center">
      <motion.div
        initial={{
          x: 0,
          scale: 0.1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute top-10 uppercase tracking-[20px] text-2xl"
      >
        <Stack direction="row" spacing={0.2} className="animate-bounce">
          {about.map((letter) => (
            <LetterAvatars
              key={letter.id}
              letter={letter.alphabet}
              color={letter.color}
            />
          ))}
        </Stack>
      </motion.div>
      <div className="flex flex-col items-center justify-center md:flex-row  md:items-center space-y-4 md:-top-10">
        <motion.img
          initial={{ x: -100, scale: 0.1, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src="./profilePic/kabiru2.jpg"
          alt="kabiru"
          className="-mb-25 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 object-cover"
        />
        <div className="space-y-5 px-0 md:px-10">
          <h4 className="text-4xl font-semibold font-mono text-gray-200 ">
            Kabiru Shaibu
          </h4>
          <motion.p
            initial={{ x: 100, scale: 0.1, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-lx font-mono"
          >
            <h3 className="font-bold text-gray-400">
              {aboutMe.split(" ").map((word, index) => (
                <span key={index}>
                  <span className=" hover:cursor-pointer hover:text-gray-600">
                    {word}
                  </span>
                  {index < aboutMe.split(" ").length - 1 && " "}
                </span>
              ))}
            </h3>
            <h3 className="mt-3 text-sm font-bold text-gray-500 tracking-widest uppercase">
              {abouth3.split("").map((char, index) => (
                <span
                  key={index}
                  className="hover:underline hover:underline-offset-4 transition-all hover:text-gray-200"
                >
                  {char}
                </span>
              ))}
            </h3>
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default About;
