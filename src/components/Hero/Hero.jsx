import React, { useEffect, useState } from "react";
import "./Hero.css";
import heroImage from "../../../assets/hero/heroImage.png";

function Hero() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Nguyen Quynh Duyen", "a Front-end Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, delta]);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(100); // Faster deletion speed
        } else {
            setDelta(300 - Math.random() * 100); // Typing speed variation
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period); // Pause before deleting
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1); // Move to next word
        }
    };
    return (
        <section className="hero-container">
            <div className="hero-content">
                <div className="hero-welcome">
                    <h3>Welcome to my Portfolio</h3>
                </div>
                <h1 className="hero-title">
                    Hi, I'm{" "}
                    <span className="typewriter">
                        {text}
                        {/* Hiển thị dấu cursor khi đang gõ hoặc xóa */}
                        <span
                            className="cursor"
                            style={{ opacity: isDeleting || text ? 1 : 0 }}
                        >
                            |
                        </span>
                    </span>
                </h1>
                <p className="hero-desc">
                    "I bring ideas to life with clean, minimal code and a
                    passion for elegant design."
                </p>
                <a
                    href="mailto:duyennguyen14082003@gmail.com"
                    className="hero-contact-btn"
                >
                    Contact Me
                </a>
            </div>
            <img src={heroImage} alt="Hero Image" className="hero-img" />
            <div className="top-blur"></div>
            <div className="bottom-blur"></div>
        </section>
    );
}

export default Hero;
