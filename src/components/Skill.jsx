import React from "react"

function Skill(props) {
  return (
     <div className="skill-div">
      <img src={props.link} width="56" height="56" alt="JavaScript" className="skill-img"/>
      <p className="skill-level">{props.level}</p>
      </ div>
  )
}

export default Skill;
