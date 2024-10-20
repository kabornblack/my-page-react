import React from "react";
import Skill from "./Skill";
import skillData from "./data/skillData";
import { skills } from "./letters";
import Stack from "@mui/material/Stack";
import LetterAvatars from "./LetterAvatars";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className={styles.skills}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Stack direction="row" spacing={0.2} className="animate-bounce">
          {skills.map((letter) => (
            <LetterAvatars
              key={letter.id}
              letter={letter.alphabet}
              color={letter.color}
            />
          ))}
        </Stack>
      </motion.div>

      <h3 className={styles.skills_h3}>
        Hover over a skill for current preficiency
      </h3>

      <motion.div
        initial={{ x: 100, scale: 0.1, opacity: 0 }}
        whileInView={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className={styles.skills_div_2}
      >
        {skillData.map((skill) => (
          <Skill key={skill.id} link={skill.link} level={skill.level} />
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;





