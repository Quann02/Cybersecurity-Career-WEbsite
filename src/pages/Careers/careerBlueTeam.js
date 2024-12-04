import React from "react";
import { Link } from "react-router-dom";
import './careerInfo.css';

export function CareerPageBlueTeam({
    title = "Blue Team: Defensive Security",
    universityInfo = {
        description: "The University of Washington offers various undergraduate and graduate programs for students interested in computer science, information systems, informatics, and cybersecurity. These programs provide a solid foundation in both theory and practice, preparing students for successful careers in technology and cybersecurity.",
        programs: [
            <strong>"Computer Science Classes:"</strong>,
            "- CSE 461: Introduction to Computer-Communication Networks",
            "- CSE 484: Computer Security",
            "- CSE 550: Computer Systems",
            "- CSE 333: Systems Programming",
            "- CSE 452: Introduction to Distributed Systems",
            "- CSE 341: Programming Languages",
            "- CSE 163: Intermediate Data Programming",
            "- CSE 121: Introduction to Computer Programming",
            "- CSE 480: Computer Ethics Seminar",
            <strong>"Other Classes:"</strong>,
            "- I S 410: Networks and Cybersecurity",
            "- ENGL 413: Programming for Text Analysis",
            "- I S 460: Systems Analysis and Design",
            "- I S 300: Introduction to Information Systems",
            "- I S 451: Business Data Analytics",
            <strong>"Informatics Classes:"</strong>,
            "- INFO 310: Cybersecurity and Information Assurance",
            "- INFO 351: Informatics Ethics and Policy",
            "- INFO 355: Information Policy Design",
            <strong>"Clubs:"</strong>,
            "- Red Team Village (RTV): [RTV Website](https://redteamvillage.io/)",
            "- Red Team Alliance: Training and Certification - [Red Team Alliance](https://shop.redteamalliance.com/)",
            "- Batman’s Kitchen - Ethical Hacking Club",
            "- GreyHat Group"
        ]
    },
    experience = "Experience needed includes a Bachelor's degree in computer science, information technology, or cybersecurity. Proficiency in network security, system administration, security monitoring tools, incident response techniques, and vulnerability assessment is required. Additionally, knowledge of best practices, scripting languages, network protocols, and operating systems is essential.",
    careerPath = {
        description: "Blue Teamers often start in IT support or system administration roles before moving into specialized security positions.",
        options: [
            "IT Support Specialist or Network Administrator",
            "SOC Analyst",
            "Incident Response Analyst",
            "Threat Hunter",
            "Security Engineer"
        ]
    },
    certificates = [
        "CompTIA CySA+",
        "Blue Team Level 1 (BLT1)",
        "GCIH",
        "CompTIA Security+",
        "Certified Ethical Hacker",
        "CISSP"
    ],
    locations = [
        "Washington, D.C.",
        "San Francisco",
        "New York City",
        "Austin, Texas",
        "Seattle, Washington"
    ],
    topEmployers = [
        "Microsoft DART",
        "JP Morgan Chase",
        "Palo Alto Networks",
        "Apple",
        "Federal Reserve Bank of New York"
    ],
    pay = "$111,000 - $172,000",
    description = "Blue Teamers are defensive security professionals who work to protect an organization’s systems and networks from cyber threats. They proactively identify vulnerabilities, enhance defense mechanisms, and ensure an organization's overall cybersecurity posture is robust.",
    responsibilities = [
        "Identify network vulnerabilities and find ways to defend against attacks.",
        "Monitor unusual behavior on the network and block suspicious IP addresses.",
        "Perform regular security checks and vulnerability scans.",
        "Identify the type of attacks and prevent them before they succeed.",
        "Train physical security teams to enhance security standards.",
        "Implement security measures such as two-factor authentication, application whitelisting, and secure key management.",
        "Deny long relay requests and ensure application whitelisting is in place."
    ],
    skills = [
        "Detail-Oriented Mindset",
        "Technical Hardening Skills",
        "Threat Profiling and Analysis",
        "Networking",
        "Familiarity with SIEM (Security Information and Event Management)",
        "Complete Knowledge of Technologies and Security Approaches"
    ],
    expertise = [
        "Defensive Security",
        "Network Security",
        "Incident Response",
        "Vulnerability Management",
        "Threat Analysis",
        "Security Monitoring",
        "SIEM Tools"
    ],
    sell = "Blue Teamers play a critical role in defending organizations from cyber threats. This career offers stability, high demand, and the opportunity to work on challenging defensive security projects. If you are passionate about safeguarding systems and networks, this is a fulfilling path with competitive pay."
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

export default CareerPageBlueTeam;