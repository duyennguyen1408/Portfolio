import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { RiFullscreenLine } from "react-icons/ri";
import "./ProjectCard.css";
import Pagination from "../../layouts/Pagination";

const ProjectCard = ({
    project: {
        title,
        imageSrc,
        description,
        skills = [],
        problem,
        solution,
        responsibilities = {},
        achievements = [],
        images = [],
    },
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImagePage, setCurrentImagePage] = useState(1);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [fullScreenIndex, setFullScreenIndex] = useState(0);

    const itemsPerPage = 1; // mỗi lần hiển thị 1 ảnh trong phần images của project

    const openModal = () => {
        setIsModalOpen(true);
        setCurrentImagePage(1);
    };
    const closeModal = () => setIsModalOpen(false);

    const openFullScreen = (index) => {
        setFullScreenIndex(index);
        setIsFullScreen(true);
    };
    const closeFullScreen = () => setIsFullScreen(false);

    const showNextImage = () => {
        setFullScreenIndex((prev) => (prev + 1) % images.length);
    };
    const showPrevImage = () => {
        setFullScreenIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    // Render 1 block Responsibilities
    const renderSection = (heading, content) => {
        if (!content) return null;
        return (
            <div className="resp-block">
                <h5>{heading}</h5>
                {content.text?.length > 0 && (
                    <ul>
                        {content.text.map((t, idx) => (
                            <li key={idx}>{t}</li>
                        ))}
                    </ul>
                )}
                {Array.isArray(content.links) && content.links.length > 0 && (
                    <div className="resp-links">
                        {content.links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resp-link-item"
                            >
                                🔗 {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    // Tính ảnh đang hiển thị (pagination trong project.images)
    const totalImages = images.length;
    const startIndex = (currentImagePage - 1) * itemsPerPage;
    const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            {/* Card */}
            <div className="project-card-container">
                <img
                    src={imageSrc}
                    alt={title}
                    className="project-card-image"
                />
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
                        <button
                            className="project-card-link"
                            onClick={openModal}
                        >
                            <FaEye className="project-card-icon" />
                            <span>View Project</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={closeModal}>
                            ✖
                        </button>

                        {/* Title */}
                        <h2>{title}</h2>

                        {/* Description */}
                        <p className="modal-description">{description}</p>

                        {/* Project Images (có pagination + click full screen) */}
                        {totalImages > 0 && (
                            <div className="project-images-section">
                                {currentImages.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="project-image-wrapper"
                                    >
                                        <img
                                            src={img}
                                            alt={`Project ${title} - ${
                                                idx + 1
                                            }`}
                                            className="project-main-image"
                                        />
                                        <button
                                            className="fullscreen-icon-btn"
                                            onClick={() =>
                                                openFullScreen(startIndex + idx)
                                            }
                                        >
                                            <RiFullscreenLine />
                                        </button>
                                    </div>
                                ))}
                                <Pagination
                                    totalItems={totalImages}
                                    itemsPerPage={itemsPerPage}
                                    currentPage={currentImagePage}
                                    onPageChange={setCurrentImagePage}
                                />
                            </div>
                        )}

                        {/* Problem */}
                        {problem && (
                            <>
                                <h4>Problem</h4>
                                <p>{problem}</p>
                            </>
                        )}

                        {/* Solution */}
                        {solution && (
                            <>
                                <h4>Solution</h4>
                                <p>{solution}</p>
                            </>
                        )}

                        {/* Responsibilities */}
                        {responsibilities &&
                            Object.keys(responsibilities).length > 0 && (
                                <>
                                    <h4>Responsibilities</h4>
                                    {renderSection(
                                        "Problem Definition",
                                        responsibilities["Problem Definition"]
                                    )}
                                    {renderSection(
                                        "Solution Design",
                                        responsibilities["Solution Design"]
                                    )}
                                    {renderSection(
                                        "Product Requirement Document (PRD)",
                                        responsibilities["Requirement / PRD"]
                                    )}
                                    {renderSection(
                                        "Developing",
                                        responsibilities["Developing"]
                                    )}
                                    {renderSection(
                                        "Release Alpha & Production",
                                        responsibilities[
                                            "Release Alpha & Production"
                                        ]
                                    )}
                                    {renderSection(
                                        "Support User",
                                        responsibilities["Support User"]
                                    )}
                                    {renderSection(
                                        "Measure & Iterate",
                                        responsibilities["Measure & Iterate"]
                                    )}
                                </>
                            )}

                        {/* Achievements */}
                        {achievements.length > 0 && (
                            <>
                                <h4>Achievements</h4>
                                <ul className="modal-achievements">
                                    {achievements.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {/* Skills */}
                        {skills.length > 0 && (
                            <>
                                <h4>Skills Used</h4>
                                <ul className="modal-skills">
                                    {skills.map((skill, id) => (
                                        <li key={id}>{skill}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Fullscreen Image Viewer */}
            {isFullScreen && (
                <div className="fullscreen-overlay" onClick={closeFullScreen}>
                    <span className="fullscreen-close">✖</span>
                    <img
                        src={images[fullScreenIndex]}
                        alt={`Fullscreen ${fullScreenIndex + 1}`}
                        className="fullscreen-image"
                        onClick={(e) => e.stopPropagation()}
                    />
                    {images.length > 1 && (
                        <>
                            <button
                                className="fullscreen-prev"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showPrevImage();
                                }}
                            >
                                ‹
                            </button>
                            <button
                                className="fullscreen-next"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showNextImage();
                                }}
                            >
                                ›
                            </button>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default ProjectCard;
