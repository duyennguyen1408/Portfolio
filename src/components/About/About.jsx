import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about-container" id="about">
            <h2 className="about-title">About</h2>
            <div className="about-content">
                <img
                    src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmFkZzYweHBzeWVqNG91MGc1cHZnbHd6Mm1xdzF4YjVqc3doeGphaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"
                    alt="About Image"
                    className="about-img"
                />
                <ul className="about-items">
                    <li className="about-item">
                        <div className="about-item-text">
                            <h3>I’m Duyen </h3>

                            <p>
                                I am a Business Analyst with hands-on experience
                                in gathering requirements, analyzing business
                                processes, and creating clear documentation to
                                support better decision-making. With strong
                                analytical and communication skills, I am eager
                                to contribute to improving processes and systems
                                for measurable business outcomes.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
