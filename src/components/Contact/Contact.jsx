import React from "react";
import "./Contact.css";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <footer id="contact" className="contact-container">
            <div className="contact-text">
                <h2>Duyen's Portfolio</h2>
                <p>
                    Thank you for visiting my personal portfolio website.
                    Connect with me over socials.
                </p>
            </div>
            <div className="quick-links">
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="contact-links">
                <h2>Contact Info</h2>
                <ul>
                    <li>
                        <a href="https://www.google.com/maps/place/Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.755446,106.0356548,9z/data=!3m1!4b1!4m6!3m5!1s0x317529292e8d3dd1:0xf15f5aad773c112b!8m2!3d10.8230989!4d106.6296638!16zL20vMGhuNGg?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D">
                            <FaMap className="contact-icon" />
                            <span className="contact-link-text">
                                Ho Chi Minh City, VietNam
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/quynh-duyen-nguyen/">
                            <FaPhoneAlt className="contact-icon" />
                            <span className="contact-link-text">
                                +84 929 002 667
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:duyennguyen14082003@gmail.com">
                            <IoIosMail className="contact-icon" />
                            <span className="contact-link-text">
                                duyennguyen14082003@gmail.com
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/quynh-duyen-nguyen/">
                            <FaLinkedin className="contact-icon" />
                            <span className="contact-link-text">
                                linkedin.com/in/quynh-duyen-nguyen/
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/duyennguyen1408">
                            <FaGithub className="contact-icon" />
                            <span className="contact-link-text">
                                github.com/duyennguyen1408
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Contact;
