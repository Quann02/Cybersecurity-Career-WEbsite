import React from "react";
import { Link } from "react-router-dom";
import './careerInfo.css';

export function CareerPageRedTeam({
    title = "Red Team: Offensive Security",
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
    experience = "Experience needed includes proficiency in Python, PowerShell, Golang, and common testing tools such as Kali, Metasploit, Wireshark, and Web Inspect. Experience working with web application technologies and Layer 7 protocols (HTTP, DNS, FTP) is required, along with a deep understanding of the latest exploits and vulnerabilities.",
    careerPath = {
        description: "Red Teamers often start in various security roles before specializing in offensive security.",
        options: [
            "Incident Responder → Red Teamer",
            "Security Analyst → Red Teamer",
            "Cloud Security Engineer → Red Teamer",
            "Security Engineer → Red Teamer"
        ]
    },
    certificates = [
        "PenTest+",
        "OSCP",
        "CRTO",
        "eCPPT",
        "CPT"
    ],
    locations = [
        "Washington, D.C.",
        "San Francisco and Bay Area",
        "Austin, Texas"
    ],
    topEmployers = [
        "Government Agencies",
        "Big Tech Companies",
        "Cybersecurity Firms: CrowdStrike, Mandiant, Palo Alto Networks"
    ],
    pay = "Average: $191,667 (Range: $166,667 - $211,667)",
    description = "Red Teamers are offensive security professionals who rigorously test an organization’s detection and response capabilities by emulating real-world adversaries. Their goal is to achieve unique objectives by accessing sensitive information, rather than simply identifying vulnerabilities.",
    responsibilities = [
        "Test an organization’s detection and response capabilities in a more targeted way than a penetration tester.",
        "Access sensitive information to achieve unique objectives that emulate a malicious actor.",
        "Perform Red Team assessments to rigorously test an organization’s detection and response capabilities.",
        "Conduct testing across a wide scope of systems including web applications, security controls, network infrastructure, wireless, and mobile deployments.",
        "Work as a team to explore the network until reaching the goals while avoiding detection.",
        "Plan, execute, report, and lead testing activities and outcomes.",
        "Execute covert Red Team operations to mimic adversary tactics and closely test exploits."
    ],
    skills = [
        "Penetration Testing",
        "Networking",
        "Vulnerability Research",
        "Reconnaissance",
        "Attack Infrastructure",
        "Social Engineering",
        "Development"
    ],
    expertise = [
        "Offensive Security",
        "Adversary Emulation",
        "Network Analysis",
        "Exploitation Techniques",
        "Attack Simulations",
        "Stealth and Evasion"
    ],
    sell = "Red Teamers play an exciting and challenging role by emulating real-world adversaries to rigorously test an organization’s security measures. With high earning potential and the opportunity to work on cutting-edge offensive security projects, it's a highly rewarding career for those interested in ethical hacking."
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

export default CareerPageRedTeam;