import React from "react";
import { Link } from "react-router-dom";
import './careerInfo.css';

export function CareerPage({
    title = "Information Security Analyst",
    universityInfo = {
        description: "The University of Washington offers various programs and resources to support students pursuing careers in technology and cybersecurity fields. With strong ties to the local tech industry, UW provides valuable opportunities for networking, internships, and project-based learning.",
        programs:  [
            <strong>Undergraduate Options:</strong>,
            <strong>Business School Classes:</strong>,
            "- I S 300 Introduction to Information Systems",
            "- I S 305 Essentials of Business Finance and Information Systems",
            "- I S 310 Fundamentals of Business Information Technologies",
            "- I S 451 Business Data Analytics",
            "- I S 504 Computer-Based Information Systems for Management",
            "- I S 530 Management of Information Systems Resources",
            <strong>Informatics Classes:</strong>,,
            "- Info 331 Introduction to Information Architecture",
            "- Info 360 Design Methods",
            "- Info 376 Introduction to Search and Recommender Systems",
            "- Info 380 Product and Information Systems Management",
            <strong>Master's programs and options:</strong>,
            "Data Analysis Essentials Course: [Data Analysis Essentials Course](https://www.pce.uw.edu/courses/data-analysis-essentials)",
            "- Teaches data analysis essentials, data mining and predictive analytics essentials, and data visualization essentials",
            <strong>Master’s in Information Management(online)</strong>,
            "- Graduates from this program are employed at Amazon, Meta, and T-Mobile ",
            "- This program offers specialization options in Business Intelligence, Data Science, and Program/Product Management and Consulting"
        ]
    }, 
    experience = "Entry-Level jobs require a Bachelors degree in a computer science field, plus 1 to 5 years of work experience in related occupations (e.g., systems administrator). ",
    careerPath = {
        description: "For this job, employees report that there are levels of below average stress and lots of possible upward mobility. This job is ranked Ranked the 3rd best technology job, the 6th best STEM job, and 7th overall best job with a Job outlook of 33%.",
        options: [
            "Possible upward mobility:",
            "Security Consultant",
            "Security Architect",
            "Security Engineer",
            "Systems Analyst Specialist",
            "Senior Analyst",
            "CISO",
            "Director of Security"
        ]
    },
    certificates = [
        "Certified Ethical Hacker",
        "CompTIA Security+",
        "Network+",
        "Red teaming certifications (GPEN, GWAPT, GCPN)",
        "CISSP"
    ],
    locations = [
        "Washington, D.C.",
        "New York City",
        "Dallas",
        "Seattle",
        "Baltimore",
        "San Francisco"
    ],
    topEmployers = [
        "Microsoft",
        "Wells Fargo",
        "Bank of America",
        "American Express",
        "Apple",
        "Google",
        "Cisco",
        "Northrop Grumman",
        "Citigroup"
    ],
    pay = "$120,360 per year",
    description = "Information Security Analysts plan and carry out security measures to protect an organization's computer network and systems. They identify and correct flaws in security systems, solutions, and programs while recommending specific measures that can improve the company’s overall security posture.",
    responsibilities = [
        "Ensuring organizations’ digital assets are protected from unauthorized access.",
        "Weed through metrics and data to filter out specific activity and mitigate risks before breaches occur.",
        "Generate reports for IT administrators and business managers to evaluate the efficacy of security policies.",
        "Keep security systems up to date and create documentation and planning."
    ],
    skills = [
        "Computer Forensics",
        "Reverse Engineering",
        "Incident Response",
        "Intrusion Prevention",
        "Ethical Hacking",
        "Operating Systems"
    ],
    expertise = [
        "Cybersecurity",
        "Firewalls",
        "Network Security",
        "Information Assurance",
        "Linux",
        "UNIX",
        "SIEM",
        "Application Security",
        "Security Architecture"
    ],
    sell = "Pays well, work is interesting, a very high demand job."
}) {
    return (
        <div className="career-page">
            <header>
                <h1>{title}</h1>
            </header>

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
                <h2>Experience</h2>
                <p>{experience}</p>
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
                <h2>University of Washington Resources</h2>
                <p>{universityInfo.description}</p>
                <ul>
                    {universityInfo.programs.map((program, index) => (
                        <li key={index}>{program}</li>
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