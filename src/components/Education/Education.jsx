import React from "react";
import "./Education.css";
import edu from "../../data/edu.json";

function Education() {
    return (
        <section className="edu-container" id="education">
            <h2 className="edu-title">Education</h2>
            <div className="edu-content">
                <ul className="edu-info">
                    {edu.map((eduItem, id) => {
                        return (
                            <li key={id} className="edu-info-item">
                                <img src={eduItem.imageSrc} alt="School Logo" />
                                <div className="edu-item-details">
                                    <h3>{eduItem.school}</h3>
                                    <h5>{`${eduItem.startDate} - ${eduItem.endDate}`}</h5>
                                    {eduItem.major && (
                                        <p>{`Major: ${eduItem.major}`}</p>
                                    )}
                                    <p>{`GPA: ${eduItem.gpa}`}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Education;
