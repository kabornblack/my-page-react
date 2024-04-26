import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

export default function Hero(props) {
  const [text] = useTypewriter({
    words: [
      "Hi - The Name's KABIRU SHAIBU",
      "Full Of Life And Love To--Code!",
      "Dedicated, Diciplined, Organised, Professional",
      "Most Importantly, I'm Available!",
    ],
    loop: 9,
    onLoopDone: () => console.log(`loop completed after 2 runs.`),
    typeDelay: 100,
    eraseDelay: 1,
    typeSpeed: 100,
    eraseSpeed: 0.1,
    fade: true,
  });
  return (
    <>
      <div className="herodiv">
        <img
          src="./profilePic/profile.jpg"
          alt="page image"
          className="heropic"
        />
        <div>
          <h2>
            <span className="herop2">{text}</span>
          </h2>
        </div>
      </div>
    </>
  );
}
