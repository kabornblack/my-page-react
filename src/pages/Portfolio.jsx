import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import data from "../components/data/projectData";
import { portfolio } from "../components/letters";
import Stack from "@mui/material/Stack";
import LetterAvatars from "../components/LetterAvatars";
import { motion } from "framer-motion";
// import { SocialIcon } from "react-social-icons";

function Portfolio() {
  return (
    <>
      <Header />
      <div className="portfolio-container ">
        <div className="scrollable-content">
          <div className="portfolio-heading">
            <div className="portfolio-title">
              <h1 className="portfolio-heading1 ">Portfolio</h1>
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
                className="portfolio-heading2"
              >
                <Stack direction="row" spacing={0.2} className="animate-bounce">
                  {portfolio.map((letter) => (
                    <LetterAvatars
                      key={letter.id}
                      letter={letter.alphabet}
                      color={letter.color}
                    />
                  ))}
                </Stack>
              </motion.div>
            </div>
          </div>
          <section className="portfolio-section">
            {data.map((project) => (
              <Projects
                key={project.id}
                img={project.img}
                name={project.name}
                stack={project.stack}
                description={project.description}
                tech={project.tech}
                link={project.link}
                isLive={project.isLive}
                liveLink={project.liveLink}
              />
            ))}
            ;
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
