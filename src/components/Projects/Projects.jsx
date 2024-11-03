import React, { useState, useEffect } from "react";
import "./Projects.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import Pagination from "../../layouts/Pagination";

function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth <= 830) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(3);
            }
        };

        updateItemsPerPage();

        window.addEventListener("resize", updateItemsPerPage);

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const totalProjects = projects.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = projects.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className="projects-container" id="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-content">
                {currentProjects.map((project, id) => (
                    <ProjectCard key={id} project={project} />
                ))}
            </div>
            <Pagination
                totalItems={totalProjects}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </section>
    );
}

export default Projects;
