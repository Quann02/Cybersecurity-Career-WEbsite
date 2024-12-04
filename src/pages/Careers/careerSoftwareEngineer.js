import React from "react";
import { Link } from "react-router-dom";
import './careerInfo.css';

export function CareerPageSoftwareEngineer({
    title = "Software Engineer",
    universityInfo = {
        description: "The University of Washington offers various undergraduate and graduate programs for students interested in software engineering, computer science, informatics, and entrepreneurship. These programs provide a comprehensive knowledge base and practical skills needed for successful careers in technology and software engineering.",
        programs: [
            <strong>"Computer Science Classes:"</strong>,
            "- CSE 403: Software Engineering",
            "- CSE 503: Software Engineering",
            "- CSE 589: Software Entrepreneurship",
            "- CSE 331: Software Design and Implementation",
            "- CSE 391: System and Software Tools",
            <strong>"Informatics Classes:"</strong>,
            "- INFO 442: Cooperative Software Development",
            "- INFO 380: Product and Information Systems Management",
            <strong>"Other Classes:"</strong>,
            "- ENTRE 432: Software Entrepreneurship",
            "- CHEM 546: Software Engineering for Molecular Science and Engineering",
            "- HCID 520: User Interface Software and Technology",
            "- DATA 515: Software Design for Data Science",
            <strong>"Clubs:"</strong>,
            "- SWECC - Software Engineering Career Club: Student-led engineering club to support and empower individuals interested in pursuing a career in software engineering. Offers networking events, resources/activities, resume reviews, and mentorship programs.",
            "- ACE - Association for Computing Education",
            "- COM^2 - Computing Community",
            "- CSEED - Inspire engineering students to be innovators",
            "- DubHacks",
            "- CESA - Computing for Environmental and Social Advocacy",
            "- Husky Coding Project",
            <strong>"Events:"</strong>,
            "- UW Engineering Open House",
            "- Transition Workshop",
            "- Math Day - March 24",
            "- Women in Engineering Conference - April 9",
            "- Pacific Northwest Technology Conference - April 27 to 30",
            "- Integrating Talent with Technology - April 1"
        ]
    },
    experience = "Entry-Level: Bachelor's degree in Computer Science, Software Engineering, or a related field. Typically requires 0 to 3 years of experience in programming, coding, or software development. Experience in internships, co-ops, or projects demonstrating knowledge in software engineering.",
    careerPath = {
        description: "Software Engineers experience moderate stress levels and have high upward mobility. This role is ranked as one of the top technology jobs with diverse industry applications. Job outlook is 17% growth over the next decade, with over 1 million software engineering jobs expected by 2030.",
        options: [
            "Senior Software Engineer",
            "Lead Developer",
            "Software Architect",
            "Engineering Manager",
            "Chief Technology Officer (CTO)"
        ]
    },
    certificates = [
        "AWS Certified Developer",
        "Oracle Certified Java Programmer",
        "Microsoft Certified: Azure Developer Associate",
        "CompTIA IT Fundamentals+ (ITF+), CompTIA A+",
        "Google Professional Cloud Developer"
    ],
    locations = [
        "Silicon Valley (San Francisco)",
        "Seattle",
        "Austin",
        "Boston",
        "New York City",
        "Los Angeles"
    ],
    topEmployers = [
        "Google",
        "Microsoft",
        "Amazon",
        "Apple",
        "Facebook (Meta)",
        "IBM",
        "Cisco",
        "Tesla",
        "Salesforce"
    ],
    pay = "Average salary: $110,140 per year",
    description = "Software Engineers design, develop, test, and maintain software applications for various platforms, including web, mobile, and desktop. They collaborate with teams to develop user-centered solutions, ensuring high functionality and performance. Additionally, they write, debug, and optimize code in programming languages like Python, Java, C++, or JavaScript, and implement security measures to protect applications and data.",
    responsibilities = [
        "Develop and manage software for an organization’s products or services.",
        "Collaborate with cross-functional teams (e.g., designers, product managers) to deliver software solutions.",
        "Conduct code reviews, testing, and deployment.",
        "Maintain documentation, create updates, and troubleshoot issues.",
        "Monitor software performance and enhance software efficiency."
    ],
    skills = [
        "Strong coding skills in languages like Java, Python, C++, or JavaScript.",
        "Proficiency in software development methodologies (Agile, Scrum).",
        "Database management (SQL, MongoDB).",
        "Cloud computing (AWS, Azure, Google Cloud).",
        "Knowledge of DevOps practices (CI/CD pipelines, containerization with Docker).",
        "Problem-solving and logical thinking."
    ],
    expertise = [
        "Software Design",
        "System Architecture",
        "Data Structures",
        "Algorithms",
        "API Integration",
        "Version Control (Git)",
        "Familiarity with frameworks like React, Angular, Django",
        "Libraries for specific tech stacks"
    ],
    sell = "Software Engineering offers competitive pay, flexibility in industry choice, high demand across tech and non-tech industries, and opportunities to work on innovative products and impactful solutions."
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

export default CareerPageSoftwareEngineer;
