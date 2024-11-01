import React, { useState } from "react";
import "./Navbar.css";
import menuIcon from "../../../assets/nav/menuIcon.png";
import closeIcon from "../../../assets/nav/closeIcon.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <a className="title" href="/">
                Portfolio
            </a>
            <div className="menu">
                <img
                    className="menu-btn"
                    src={menuOpen ? closeIcon : menuIcon}
                    alt="Menu Button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`menu-items ${menuOpen ? "menu-open" : ""}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">About</a>
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
        </nav>
    );
}

export default Navbar;
