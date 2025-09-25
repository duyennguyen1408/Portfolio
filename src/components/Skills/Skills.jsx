import React from "react";
import "./Skills.css";
import skillsData from "../../data/skills.json";

function Skills() {
    return (
        <section className="skills-container" id="skills">
            {/* Skills */}
            <h2 className="skills-title">Skillset</h2>
            <div className="skills-table">
                <div className="skills-content">
                    <div className="skills-column">
                        <div className="skills-header">
                            <h3>Hard Skills</h3>
                        </div>
                        <ul>
                            {skillsData.hardSkills.map((skill, id) => (
                                <li key={id}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="skills-column">
                        <div className="skills-header">
                            <h3>Soft Skills</h3>
                        </div>
                        <ul>
                            {skillsData.softSkills.map((skill, id) => (
                                <li key={id}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Toolset */}
            <h2 className="skills-title">Toolset</h2>
            <div className="skills-content">
                {skillsData.toolset.map((tool, id) => (
                    <div key={id} className="skill-item">
                        <div className="skill-img-container">
                            <img src={tool.imageSrc} alt={tool.title} />
                        </div>
                        <p>{tool.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
