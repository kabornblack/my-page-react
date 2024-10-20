import React from "react";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import LetterAvatars from "./LetterAvatars";
import { experience } from "./letters";
import ExperinceCard from "./ExperinceCard";

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperinceCard />
        <ExperinceCard />
        <ExperinceCard />
        <ExperinceCard />
      </div>
    </motion.div>
  );
}

export default Experience;

//  <motion.div
//    initial={{ x: -500, opacity: 0 }}
//    whileInView={{ x: 0, opacity: 1 }}
//    transition={{ duration: 1.2 }}
//    viewport={{ once: true }}
//  >
//    <Stack direction="row" spacing={0.2} className="absolute animate-bounce">
//      {experience.map((letter) => (
//        <LetterAvatars
//          key={letter.id}
//          letter={letter.alphabet}
//          color={letter.color}
//        />
//      ))}
//    </Stack>
//  </motion.div>;
