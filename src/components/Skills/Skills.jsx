import React from "react";
import "./Skills.css";
import skills from "../../data/skills.json";

function Skills() {
    return (
        <section className="skills-container" id="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-content">
                {skills.map((skill, id) => {
                    return (
                        <div key={id} className="skill-item">
                            <div className="skill-img-container">
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;
