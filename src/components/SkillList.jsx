import React from "react";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "MongoDB",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "NodeJs",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Express",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB",
  },
  {
    skill: "Web-Design",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Django",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "Git+GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  // {
  //   skill: "Svelte",
  //   level: "beginner",
  //   color: "#FF3B00",
  // },
  {
    skill: "Python",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "TypeScript",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "NextJS",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "PostgreSQL",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "MySQL",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "ejs",
    level: "intermediate",
    color: "#C3DCAF",
  },
];

const frontEnd =
  "ᶜʳᵉᵃᵗᵉᵈ ʳᵉˢᵖᵒⁿˢⁱᵛᵉ ᵃⁿᵈ ⁱⁿᵗᵉʳᵃᶜᵗⁱᵛᵉ ᵘˢᵉʳ ⁱⁿᵗᵉʳᶠᵃᶜᵉˢ ᵘˢⁱⁿᵍ ᴴᵀᴹᴸ/ᶜˢˢ ᵃⁿᵈ ᴿᵉᵃᶜᵗ. ᴵᵐᵖˡᵉᵐᵉⁿᵗ ᶜˡⁱᵉⁿᵗ ˢⁱᵈᵉ ʷⁱᵗʰ ᴶᵃᵛᵃˢᶜʳⁱᵖᵗ ᵃⁿᵈ ᵍᵉⁿᵉʳᵃᵗᵉ ᵈʸⁿᵃᵐⁱᶜ ᵛⁱᵉʷˢ ʷⁱᵗʰ ᴱᴶˢ...✍";
const backEnd =
  "ᴴᵃⁿᵈˡᵉᵈ ˢᵉʳᵛᵉʳ ˢⁱᵈᵉ ᴬᵖᵖˡⁱᶜᵃᵗⁱᵒⁿˢ ᶠʳᵒᵐ ʳᵉᵍⁱˢᵗʳᵃᵗⁱᵒⁿ/ᵘˢᵉʳ-ˡᵒᵍⁱⁿ ʷⁱᵗʰ ᵃˡˡ ˡᵉᵛᵉˡˢ ᵒᶠ ˢᵉᶜᵘʳⁱᵗʸ ᵘˢⁱⁿᵍ ᴺᵒᵈᵉᴶˢ, ᴱˣᵖʳᵉˢˢ ᵃⁿᵈ ᵒᵗʰᵉʳ ᵗʰⁱʳᵈ-ᵖᵃʳᵗʸ ˡⁱᵇʳᵃʳⁱᵉˢ ᵃⁿᵈ ʰᵃⁿᵈˡᵉᵈ ᵈᵃᵗᵃ ˢᵗᵒʳᵃᵍᵉ ʷⁱᵗʰ ᴹʸˢQᴸ, ᴾᵒˢᵗᵍʳᵉˢQᴸ ᵃⁿᵈ ᴹᵒⁿᵍᵒᴰᴮ...✍";
const fullStack =
  "ᵀʰᵉˢᵉ ᵉˣᵖᵉʳᵗⁱˢᵉ ᵉⁿᵃᵇˡᵉˢ ᵐᵉ ᵗᵒ ᵈᵉᵛᵉˡᵒᵖ ᵃ ʷⁱᵈᵉ ʳᵃⁿᵍᵉ ᵒᶠ ʷᵉᵇ ᵃᵖᵖˡⁱᶜᵃᵗⁱᵒⁿˢ, ᶠʳᵒᵐ ˢⁱᵐᵖˡᵉ ˢᵗᵃᵗⁱᶜ ˢⁱᵗᵉˢ ᵗᵒ ᶜᵒᵐᵖˡᵉˣ, ᵈᵃᵗᵃ-ᵈʳⁱᵛᵉⁿ ᵖˡᵃᵗᶠᵒʳᵐˢ, ᵃˡˡ ʷʰⁱˡᵉ ᶠᵒˡˡᵒʷⁱⁿᵍ ᵇᵉˢᵗ ᵖʳᵃᶜᵗⁱᶜᵉˢ ᵃⁿᵈ ⁱⁿᵈᵘˢᵗʳʸ ˢᵗᵃⁿᵈᵃʳᵈˢ ...✍";
const pKnowledge =
  "ᴬˢ ᵃ ᶠᵘˡˡ-ˢᵗᵃᶜᵏ ᵈᵉᵛᵉˡᵒᵖᵉʳ, ⁱ ᶜᵃⁿ ᵇᵘⁱˡᵈ ʷᵉᵇ ᵃᵖᵖ ᶠʳᵒᵐ ˢᶜʳᵃᵗᶜʰ.";
const journey =
  "ᴹʸ ʲᵒᵘʳⁿᵉʸ ʷⁱᵗʰ ʷᵉᵈ ᵈᵉᵛ ˢᵗᵃʳᵗᵉᵈ ⁱⁿ ²⁰²¹ ʷʰᵉⁿ ⁱ ʷᵃˢ ᵗʰⁱⁿᵏⁱⁿᵍ ᵃᵇᵒᵘᵗ             ʷʰᵃᵗ ᵗᵒ ᵈᵒ";
const p2023 = "✍";
const p2022 = "✍";
const p2021 = "✍";

function SkillList() {
  return (
    <div className="card-container">
      <div className="card">
        <Avatar className="avatar" />
        <div className="data">
          <Intro
            name="Kabiru Shaibu"
            bio="ꜰᴜʟʟ-ꜱᴛᴀᴄᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ. ꜱᴇʟꜰ ᴍᴏᴛɪᴠᴀᴛᴇᴅ. ʀᴇʟᴇɴᴛʟᴇꜱꜱ ᴏɴ ᴀ ᴍɪꜱꜱɪᴏɴ."
          />
          <div>
            <SkillSet />
          </div>
        </div>
      </div>
      <div className="cardTwo">
        <section className="fullStack">
          <h4 className="journey">𝕂ℕ𝕆𝕎𝕃𝔼𝔻𝔾𝔼</h4>
          <p>{pKnowledge}</p>
          <h4 className="h4">Fᵣₒₙₜ-ₑₙD</h4>
          <p>{frontEnd}</p>
          <h4 className="h4">BₐCₖ-ₑₙD</h4>
          <p>{backEnd}</p>
          <h4 className="h4">Fᵤₗₗ-ₛₜₐCₖ</h4>
          <p>{fullStack}</p>
        </section>
      </div>
      <div className="cardThree">
        <section className="journey">
          <h4 className="journey">𝕁𝕆𝕌ℝℕ𝔼𝕐</h4>
          <p>{journey}</p>
          <h4 className="h4">②⓪②③</h4>
          <p>{p2023}</p>
          <h4 className="h4">②⓪②②</h4>
          <p>{p2022}</p>
          <h4 className="h4">②⓪②①</h4>
          <p>{p2021}</p>
        </section>
      </div>
    </div>
  );
}
function SkillSet() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" /* style={{ backgroundColor: color }}*/>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👍"}
        {level === "intermediate" && "💪"}
        {level === "advanced" && "🔥"}
        {/* {level ==="lazy" && "👶"} */}
      </span>
    </div>
  );
}
function Avatar() {
  return (
    <img className="avatar" src="./profilePic/profile.jpg" alt="profile pic" />
  );
}

function Intro(props) {
  return (
    <div>
      <h1 className="name">{props.name}</h1>
      <p className="datap">{props.bio}</p>
    </div>
  );
}

export default SkillList;
