import React from "react";
import Marquee from "react-fast-marquee";
import { skillsData } from "./SkillsData/Skills";
import { skillsImage } from "./SkillsData/skill-image";

import "./SkillsPlain.css";

function SkillsPlain() {
  return (
    <div id="skills-plain" className="skills-wrapper">
      <div className="glow-bg"></div>

      <div className="skills-divider">
        <div className="skills-gradient-line"></div>
      </div>

      <div className="skills-heading">
        <span className="skills-bar"></span>
        <span className="skills-title">Skills</span>
        <span className="skills-bar"></span>
      </div>

      <div className="skills-marquee">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover
          pauseOnClick
          play
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="skill-card-wrapper" key={id}>
              <div className="skill-card">
                <div className="gradient-line"></div>
                <div className="skill-content">
                  <div className="skill-image">
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="skill-name">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default SkillsPlain;
