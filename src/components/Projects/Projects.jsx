import React, { useState, useEffect } from "react";
import "./Projects.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import Pagination from "../../layouts/Pagination";

function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 830);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 830;
            setIsMobile(mobile);

            // Khi chuyển từ mobile sang desktop thì reset page
            if (!mobile) {
                setCurrentPage(1);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const itemsPerPage = 1;

    const currentProjects = isMobile
        ? projects.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage,
          )
        : projects;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className="projects-container" id="projects">
            <h2 className="projects-title">Projects</h2>

            <div className="projects-content">
                {currentProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            {isMobile && (
                <Pagination
                    totalItems={projects.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
        </section>
    );
}

export default Projects;
