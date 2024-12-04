import React from "react";
import { Link } from "react-router-dom"; 
import './careerInfo.css';

export function CareerPage({ 
    title, 
    universityInfo,
    experience, 
    careerPath, 
    certificates, 
    locations, 
    pay, 
    description, 
    responsibilities, 
    skills, 
    expertise, 
    topEmployers, 
    sell 
}) {
    return (
        <div className="career-page">
            <header>
                <h1>{title}</h1>
            </header>

            <section> 
                <h2>University of Washington</h2>
                <p>{universityInfo.description}</p>
                <ul>
                    {universityInfo.programs.map((program, index) => (
                        <li key={index}>{program}</li>
                    ))}
                </ul>

            </section>
            <section>
                <h2>Experience</h2>
                <p>{experience}</p>
            </section>

            <section>
                <h2>Career Path</h2>
                <p>{careerPath.description}</p>
                <ul>
                    {careerPath.options.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Certificates</h2>
                <ul>
                    {certificates.map((certificate, index) => (
                        <li key={index}>{certificate}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Top Locations</h2>
                <ul>
                    {locations.map((location, index) => (
                        <li key={index}>{location}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Top Employers</h2>
                <ul>
                    {topEmployers.map((employer, index) => (
                        <li key={index}>{employer}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Pay</h2>
                <p>{pay}</p>
            </section>

            <section>
                <h2>What Do They Do?</h2>
                <p>{description}</p>
            </section>

            <section>
                <h2>Responsibilities</h2>
                <ul>
                    {responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Expertise</h2>
                <ul>
                    {expertise.map((area, index) => (
                        <li key={index}>{area}</li>
                    ))}
                </ul>
            </section>

            <footer>
                <h2>Why Choose This Career?</h2>
                <p>{sell}</p>
            </footer>
        </div>
    );
}

export default CareerPage;
