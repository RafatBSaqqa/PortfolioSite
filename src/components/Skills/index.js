import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../utils/data";
// import SkillCard  from './SkillCard/SkillCard'
import SkillCard from "./SkillCard/index";
import SkillCardInfo from "./SkillCardInfo";
function Skills() {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])
    const handleSelectSkill = (data) => {
      setSelectedSkill(data);
    };
  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => {
            return (
              <SkillCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item)
                }}
              />
            );
          })}
        </div>

        <div className="skills-info">
          <SkillCardInfo 
          heading={selectedSkill.title}
          skills={selectedSkill.skills}/>
        </div>
      </div>
    </section>
  );
}

export default Skills;
