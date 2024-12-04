import React from "react";
import { Link } from "react-router-dom";
import './careerInfo.css';

export function CareerPageForensics({
    title = "Digital Forensics Analyst",
    universityInfo = {
        description: "The University of Washington offers various programs and resources to support students pursuing careers in technology and cybersecurity fields. With strong ties to the local tech industry, UW provides valuable opportunities for networking, internships, and project-based learning.",
        programs:  [
            <strong>"Computer Science Classes:"</strong>,
            "- CSE 484: Computer Security (Prerequisites: CSE 332 and 351)",
            "- CSE 564: Computer Security and Privacy",
            "- CSE M 584: Computer Security (Prerequisite of CSE 332 and 351)",
            "- CSE 503: Software Engineering",
            <strong>"Engineering Classes:"</strong>,
            "- E E 469: Computer Hardware Skills",
            "- EE P 567: Machine Learning for Cybersecurity",
            "- M E 356: Machine Design Analysis",
            <strong>"Business Classes:"</strong>,
            "- I S 460: Systems Analysis and Design",
            "- I S 410: Networks and Cybersecurity",
            <strong>"Informatics Classes:"</strong>,
            "- INFO 310: Information Assurances and Cybersecurity",
            "- INFO 314: Computer Networks and Distributed Applications",
            "- INFO 371: Advanced Methods in Data Science",
            <strong>"Clubs:"</strong>,
            "- GrayHats Group - UW Bothell",
            "- IEEE UWT Student Branch - UW Tacoma",
            <strong>Batman’s Kitchen - Cybersecurity Capture the Flag team </strong>,
            "- [UWCTF](https://uwctf.cs.washington.edu/)"
        ]
    },
    experience = "Bachelors degree in computer forensics, computer science, cybersecurity, or related field. Most positions require 1-2 years of professional experience (internships, fellowships, part-time jobs, entry-level jobs).",
    careerPath = {
        description: "Digital Forensics Analysts can progress through various career stages:",
        options: [
            "Entry level (1-3 years): Shadow senior team members, learn tools, handle basic forensic tasks.",
            "Intermediate (3-7 years): Manage standard forensic tasks, adapt to new challenges, obtain relevant certifications.",
            "Senior level (7-15 years): Lead teams, hold positions such as Chief Information Security Officer (CISO)."
        ]
    },
    certificates = [
        "SANS Certificate",
        "Certified Forensic Computer Examiner",
        "GIAC Certified Forensic Examiner",
        "Certified Computer Examiner",
        "EnCase Certified Examiner",
        "Certified Ethical Hacker",
        "Certified Forensic Analyst"
    ],
    locations = [
        "Alaska",
        "Mississippi",
        "Utah"
    ],
    topEmployers = [
        "Government Agencies",
        "Law Enforcement",
        "Deloitte",
        "PwC",
        "KPMG",
        "Big 5 Tech Companies",
        "Financial Institutions",
        "Data Forensic Companies"
    ],
    pay = "$70,000 - $170,000 (Entry level: $50,000; Master's degree: $80,000)",
    description = "Digital Forensics Analysts are responsible for identifying and mitigating network intrusions and analyzing log files and other forms of digital evidence.",
    responsibilities = [
        "Conduct analysis of log files, evidence, and other information to determine best methods for identifying perpetrators of a network intrusion.",
        "Confirm what is known about an intrusion.",
        "Provide technical summaries of findings in accordance with established reporting procedures.",
        "Examine recovered data for information of relevance.",
        "Perform file signature analysis and file system forensic analysis.",
        "Collect and analyze intrusion artifacts including source code, malware, and system configurations."
    ],
    skills = [
        "Computer Forensics",
        "Computer Network Defense",
        "Software Testing and Evaluation",
        "System Administration",
        "Threat Analysis",
        "Investigative implications of hardware, operating systems, and network technologies",
        "Data carving tools and techniques",
        "Anti-forensics tactics, techniques, and procedures",
        "Evidence preservation and integrity",
        "Skills in forensic tool suites",
        "Analyzing anomalous code as malicious or benign",
        "Data evidence processing"
    ],
    expertise = [
        "Digital Forensics",
        "Network Analysis",
        "Malware Analysis",
        "Evidence Handling and Integrity"
    ],
    sell = "Digital Forensics Analysts play a crucial role in defending against cyber threats by investigating security incidents, recovering data, and ensuring proper evidence handling. This is an exciting career for those passionate about cybersecurity and law enforcement."
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

export default CareerPageForensics;
