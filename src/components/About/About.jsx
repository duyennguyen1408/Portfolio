import React from "react";
import "./About.css";
import cursorIcon from "../../../assets/about/cursorIcon.png";
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
                                I am a front-end developer dedicated to creating
                                responsive, engaging web experiences. With a
                                year of experience and a strong drive for
                                growth, I aim to deliver impactful solutions
                                that boost user engagement and business success.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
