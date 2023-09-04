import React from "react";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="LANGUAGES: " color="white" />
      <Skill name="English" emoji="💪" color="white" />
      <Skill name="JavaScript" emoji="💪" color="yellow" />
      <Skill name="HTML" emoji="💪" color="blue" />
      <Skill name="CSS" emoji="💪" color="green" />
      <Skill name="NodeJs" emoji="💪" color="brown" />
      <Skill name="Express" emoji="💪" color="purple" />
      <Skill name="React" emoji="💪" color="pink" />
      <Skill name="TypeScript" emoji="💪" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default SkillList;
