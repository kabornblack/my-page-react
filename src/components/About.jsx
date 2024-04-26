import React from "react";
import Stack from "@mui/material/Stack";
import LetterAvatars from "./LetterAvatars";
import { about } from "./letters";
import { abouth3, aboutMe } from "./aboutData";

function About(props) {
  return (
    <div className="about-div">
      <div className="letters-container">
        <Stack direction="row" spacing={2}>
          {about.map((letter) => (
            <LetterAvatars
              key={letter.id}
              letter={letter.alphabet}
              color={letter.color}
            />
          ))}
        </Stack>
      </div>

      <h3 className="about-h3">{abouth3}</h3>
      <div class="container">
        <p className="div-sec-p">
          <img src="./profilePic/profile.jpg" alt="Image" class="image1" />
          <span className="me">Kabiru Shaibu</span>
          {aboutMe}
        </p>
      </div>
    </div>
  );
}

export default About;
