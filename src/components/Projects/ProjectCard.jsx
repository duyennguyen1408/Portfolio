import React from "react";
import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source },
}) => {
    return (
        <div className="project-card-container">
            <img src={imageSrc} alt={title} className="project-card-image" />
            <h3 className="project-card-title">{title}</h3>
            <div className="project-card-info">
                <p className="project-card-desc">{description}</p>
                <ul className="project-card-skills">
                    {skills.map((skill, id) => (
                        <li key={id} className="project-card-skill">
                            {skill}
                        </li>
                    ))}
                </ul>
                <div className="project-card-links">
                    <a
                        href={demo}
                        target="_blank"
                        className="project-card-link"
                    >
                        <FaEye className="project-card-icon" />
                        <span>Demo</span>
                    </a>
                    <a
                        href={source}
                        target="_blank"
                        className="project-card-link"
                    >
                        <FaCode className="project-card-icon" />
                        <span>Source</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
