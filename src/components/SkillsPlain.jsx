import React from "react";
import Marquee from "react-fast-marquee";
import { skillsData } from "./SkillsData/Skills";
import { skillsImage } from "./SkillsData/skill-image";
import { skillsData2 } from "./SkillsData/Skill2";
import { skillsImage2 } from "./SkillsData/skill-image2";
import "./SkillsPlain.css";

function SkillsPlain() {
  return (
    <div id="skills" className="skills-wrapper">
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
              <Marquee
          gradient={false}
          speed={80}
          pauseOnHover
          pauseOnClick
          play
          direction="right"
        >
          {skillsData2.map((skill2, id) => (
            <div className="skill-card-wrapper" key={id}>
              <div className="skill-card">
                <div className="gradient-line"></div>
                <div className="skill-content">
                  <div className="skill-image">
                    <img
                      src={skillsImage2(skill2)}
                      alt={skill2}
                      width={40}
                      height={40}
                    />

                  </div>
                  <p className="skill-name">{skill2}</p>
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
