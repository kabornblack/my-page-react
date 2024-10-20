import React, { useEffect, useState } from "react";
import { projects } from "./letters";
import Stack from "@mui/material/Stack";
import LetterAvatars from "./LetterAvatars";
import { motion } from "framer-motion";
import { GoArrowDown } from "react-icons/go";
import ImageEffect from "./ImageEffect";

async function fetchProjectData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Disney Clone",
        description:
          "A clone of the Disney website strickly for personal learning purpose built with Nextjs, typescript, React and TailwindCSS.",
      });
    }, 2000); // Simulated delay of 2 seconds
  });
}

function MainProject() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProjectData();
      setProjectData(data);
    };

    loadData();
  }, []);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="flex flex-col min-h-screen md:h-auto lg:h-[calc(100vh-4rem)] relative text-center pt-20 md:text-left 
    md:flex-row max-w-full px-20 py-24 justify-evenly mx-auto items-center"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute top-20 uppercase tracking-[20px] text-2xl"
      >
        <Stack direction="row" spacing={0.2} className="animate-bounce">
          {projects.map((letter) => (
            <LetterAvatars
              key={letter.id}
              letter={letter.alphabet}
              color={letter.color}
            />
          ))}
        </Stack>
      </motion.div>

      <div className="relative w-full flex overflow-x-hidden overflow-y-hidden snap-x snap-mandatory z-20 bg-transparent">
        <div className="w-screen flex-shrink-0 snap-center bg-transparent flex flex-col  items-center justify-center md:p-44 h-screen">
          <div className="relative flex justify-center shrink-x-0 bg-transparent pb-10 md:pb-1">
            <div className="absolute z-30 bottom-1 md:bottom-2 md:-ml-60">
              <img
                src="./profilePic/disneyclone.png"
                alt="project pics"
                height={70}
                width={70}
                className="h-32 w-20"
              />
            </div>
            <div className="absolute z-20 bottom-6 md:bottom-2 md:-ml-24">
              <img
                src="./profilePic/disneyclone.png"
                alt="project pics"
                height={70}
                width={70}
                className="flex-shrink-0 h-40 w-40"
              />
            </div>
            <div className="relative md:mb-1 md:pl-20 shrink-0">
              <img
                src="./profilePic/disneyclone.png"
                alt="project pics"
                height={60}
                width={60}
                className="h-50 w-60 shrink-0"
              />
            </div>
          </div>

          <motion.div
            initial={{
              x: 0,
              scale: 0.1,
              opacity: 0,
            }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="bg-transparent space-y-5 p-1 md:p-5 lg:px-10 max-w-lg min-w-96 min-w-lg shrink-0 border border-gray-700 hover:bg-gray-900 hover:border-gray-900"
          >
            <h4 className="bg-transparent text-xl md:text-xl font-light text-center pt-5">
              <span className=" bg-transparent underline decoration-gray-900 p-1">
                Case Study 1 of 7:
              </span>
              {"  "}
              {projectData.name}
            </h4>
            <p className="bg-transparent text-sm text-center md:text-left font-mono">
              {projectData.description}
            </p>

            <div className="text-center bg-transparent font-mono">
              <h5 className="bg-transparent pb-2 text-gray-600">
                Check out other projects
              </h5>
              <div className="flex items-center justify-center relative bg-transparent p-5">
                <div
                  className="absolute rounded-full border border-gray-500 mt-52 animate-bounce z-30 -top-48"
                  style={{ width: "20px", height: "20px" }}
                >
                  <GoArrowDown className="bg-transparent absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <a
                href="/portfolio"
                className="bg-transparent uppercase shadow font-mono tracking-widest text-2xl hover:underline"
              >
                portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center absolute overflow-hidden left-0 h-80 -skew-y-12 transform bg-gradient-to-r from-black to-black via-gray-900 from-10% via-40% to-60% z-0" />
    </div>
  );
}

export default MainProject;
