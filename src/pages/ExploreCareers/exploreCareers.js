import React from 'react';
import './exploreCareers.css';
import { Link } from 'react-router-dom';

const ExploreCareers = () => {
    const tips = [
        {
            title: "Blue Team",
            description: "Defensive security professionals who work to protect an organization’s systems and networks from cyber threats.",
            link: "/career/blueTeam" 
        },
        {
            title: "Red Team",
            description: "Rigorously test an organization’s detection and response capabilities by emulating real-world adversaries.",
            link: "/career/redTeam" 
        },
        {
            title: "Information Security Analyst",
            description: "Plan and carry out security measures to protect an organization's computer network and systems",
            link: "/career/informationSecurityAnalyst" 
        },
        {
            title: "Digital Forensics",
            description: "Identify and mitigate network intrusions and analyze log files and other forms of digital evidence",
            link: "/career/digitalForensics"  
        },
        {
            title: "Governance, Risk, and Compliance (GRC)",
            description: "Assess risks, develop policies, conduct audits, and train employees to ensure compliance with regulatory standards and mitigate risks.",
            link: "/career/grc" 
        },
        {
            title: "Software/Security Engineer",
            description: "Develops software and applications to secure data and information.",
            link: "/career/softwareEngineer" 
        },
        
    ];

    return (
        <main className="tips-body">
            <section className="tips-hero">
                <h1>Explore Cybersecurity Careers</h1>
                <p>For a personalized career match, please take the Career Quiz. Click each card for more information</p>
            </section>

            <section className="tips-grid">
                {tips.map((tip, index) => (
                    <Link to={tip.link} className="tip-item" key={index}>
                        <h2>{tip.title}</h2>
                        <p>{tip.description}</p>
                    </Link>
                ))}
            </section>
        </main>
    );
};

export default ExploreCareers;

