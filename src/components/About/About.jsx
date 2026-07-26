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

                            <p style={{ marginBottom: "20px" }}>
                                I believe great products begin with
                                understanding people!
                            </p>

                            <p style={{ marginBottom: "20px" }}>
                                As a Business Analyst and UI/UX Designer, I
                                enjoy discovering user needs, analyzing business
                                challenges, and designing solutions that are
                                simple, meaningful, and practical.
                            </p>
                            <p>
                                My goal is to connect business objectives with
                                user-centered design to create products that
                                people genuinely enjoy using.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
