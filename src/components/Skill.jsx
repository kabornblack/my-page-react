import React from "react";
import styles from "./Skills.module.css";

function Skill(props) {
  return (
    <div className={styles.skill_div}>
      <img
        src={props.link}
        width="56"
        height="56"
        alt="JavaScript"
        className={styles.skill_img}
      />
      <p className={styles.skill_level}>{props.level}</p>
    </div>
  );
}

export default Skill;
