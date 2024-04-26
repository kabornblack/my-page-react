import React from "react";
import Skill from "./Skill";
import skillData from "./skillData";
import { skills } from "./letters";
import Stack from "@mui/material/Stack";
import LetterAvatars from "./LetterAvatars";

function Skills() {
  return (
    <div className="skills-div">
      <Stack direction="row" spacing={2}>
        {skills.map((letter) => (
          <LetterAvatars
            key={letter.id}
            letter={letter.alphabet}
            color={letter.color}
          />
        ))}
      </Stack>

      <h3 className="skills-h3">Hover over a skill for current preficiency</h3>

      <div className="skills-div-2">
        {skillData.map((skill) => (
          <Skill key={skill.id} link={skill.link} level={skill.level} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
