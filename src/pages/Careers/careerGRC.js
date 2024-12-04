import React from "react";
import { Link } from "react-router-dom";
import './careerInfo.css';

export function CareerPageGRC({
    title = "GRC (Governance, Risk, and Compliance)",
    universityInfo = {
        description: "The University of Washington offers various undergraduate and graduate programs for students interested in cybersecurity, international studies, technology strategy, and law. These programs provide a comprehensive knowledge base and practical skills needed for successful careers in technology and cybersecurity.",
        programs: [
            <strong>Informatics Course:</strong>,
            "- INFO 415: Emerging Topics in Information Assurance and Cybersecurity",
            "- INFO 102: Gender and Information Technology",
            "- INFO 355: Information Policy Design",
            <strong>JSIS Course:</strong>,
            "- JSIS 355: Cybersecurity and International Studies",
            "- JSIS B 480: Fundamentals of Global Cybersecurity",
            <strong>Other Courses:</strong>,
            "- TECHIN 535: Fundamentals of Technology Strategy",
            "- IMT 598: Emerging Trends in Information Management and Technology",
            "- LAW E 554: Technology Law and Public Policy Clinic",
            "- I S 305: Essentials of Business Finance and Information Systems",
            <strong>Clubs:</strong>,
            "- ISACA",
            "- IUGA",
            <strong>Applied Analytics Clubs:</strong>,
            "- DubHacks",
            "- DubsTech",
            <strong>Jackson School of International Studies Cybersecurity Initiative:</strong>,
            "- [JSIS Cybersecurity Initiative](https://jsis.washington.edu/cybersecurity/)",
            "- International cybersecurity policy has swiftly become one of the world’s most pressing issues. The initiative offers classes, research, events, and forums for the exchange of expertise between stakeholders."
        ],
    },
    experience = "Entry-Level jobs require a Bachelor's degree in a computer science field, plus 1 to 5 years of work experience in related occupations (e.g., systems administrator).",
    careerPath = {
        description: "GRC professionals start in compliance or IT roles, moving up to specialized GRC positions with significant upward mobility.",
        options: [
            "Starting Role: Compliance Analyst, Risk Analyst, or IT Auditor",
            "Mid-Level: GRC Analyst, GRC Specialist, or Compliance Manager",
            "Senior-Level: GRC Director, Head of Compliance, or Chief Risk Officer (CRO)"
        ],
    },
    certificates = [
        "Certified Information Systems Auditor (CISA) – ISACA",
        "Certified in Risk and Information Systems Control (CRISC) – ISACA",
        "Certified Information Systems Security Professional (CISSP) – (ISC)²",
        "Certified Regulatory Compliance Manager (CRCM) – American Bankers Association",
        "Certified Information Privacy Professional (CIPP) – IAPP"
    ],
    locations = [
        "Washington, D.C.",
        "San Francisco/Silicon Valley",
        "New York City"
    ],
    topEmployers = [
        "Financial Services: JPMorgan Chase, Citibank, Goldman Sachs",
        "Technology Companies: Microsoft, Google, Meta",
        "Consulting Firms: Deloitte, PwC, KPMG"
    ],
    pay = "Entry Level: $65,000 - $85,000 | Mid-Level: $85,000 - $120,000 | Senior-Level: $120,000 - $180,000+ (varies based on location and employer)",
    description = "GRC professionals are responsible for overseeing Governance, Risk, and Compliance practices within organizations. They assess risks, develop policies, conduct audits, and train employees to ensure compliance with regulatory standards and mitigate risks.",
    responsibilities = [
        "Risk Assessments: Identifying and assessing potential risks to the organization.",
        "Policy Development: Creating policies to ensure compliance with regulatory requirements.",
        "Internal Audits: Conducting audits to evaluate compliance with internal policies and external regulations.",
        "Compliance Monitoring: Continuously monitoring systems to detect and address compliance issues.",
        "Training: Educating employees on risk and compliance policies and best practices."
    ],
    skills = [
        "Analytical Skills: Ability to assess risks and identify control weaknesses.",
        "Attention to Detail: Necessary for evaluating compliance with regulatory requirements and standards.",
        "Communication: Essential for translating technical risks into business terms and training teams on compliance practices.",
        "Project Management: Ability to manage cross-functional projects related to GRC implementations.",
        "Technical Knowledge: Familiarity with IT systems, cybersecurity principles, and data protection standards."
    ],
    expertise = [
        "Risk Assessment",
        "Policy Creation",
        "Compliance Management",
        "Audit Procedures",
        "Regulatory Knowledge",
        "Project Management"
    ],
    sell = "GRC professionals are in high demand across various industries due to the increasing need for strong governance, risk, and compliance frameworks. With opportunities in both tech and financial sectors, GRC careers offer stability, good pay, and chances to make a significant impact on organizational resilience."
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
export default CareerPageGRC;
