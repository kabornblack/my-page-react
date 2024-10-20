import React from "react";
import { motion } from "framer-motion";

function ExperinceCard() {
  return (
    <div>
      <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-56 md:w-72 xl:w-80 snap-center p-10 bg-slate-100">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-200 xl:h-200 object-cover object-center"
          src="./profilePic/profile.jpg"
          alt="Experience Image"
        />

        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">CEO Kebbi</h4>
          <p className="text-2xl font-bold">Kebbi</p>
          <div className="flex space-x-2 my-2">
            <img
              className="w-10 h-10 rounded-full xl:w-200 xl:h-200 object-cover object-center"
              src="./profilePic/profile.jpg"
              alt="Experience Image"
            />
            <img
              className="w-10 h-10 rounded-full xl:w-200 xl:h-200 object-cover object-center"
              src="./profilePic/profile.jpg"
              alt="Experience Image"
            />
            <img
              className="w-10 h-10 rounded-full xl:w-200 xl:h-200 object-cover object-center"
              src="./profilePic/profile.jpg"
              alt="Experience Image"
            />{" "}
            <img
              className="w-10 h-10 rounded-full xl:w-200 xl:h-200 object-cover object-center"
              src="./profilePic/profile.jpg"
              alt="Experience Image"
            />
          </div>
          <p className="uppercase py-5 text-gray-600">
            Started work... - Ended...
          </p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default ExperinceCard;
