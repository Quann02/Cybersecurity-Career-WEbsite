import React, { useState } from 'react';
import './ToolKit.css';

const ToolkitPartII = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const tools = [
        // Offensive Tools by Category
        {
            category: "Identity Exploitation",
            name: "Mimikatz",
            maker: "Benjamin Delpy",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "2–4 weeks",
            risks: "Requires admin access; flagged by antivirus.",
            trustScore: 8,
        },
        {
            category: "Identity Exploitation",
            name: "Hashcat",
            maker: "Jens Steube",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "2–6 weeks",
            risks: "Needs powerful GPU; resource usage issues.",
            trustScore: 9,
        },
        {
            category: "Identity Exploitation",
            name: "John the Ripper",
            maker: "OpenWall Project",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "2–6 weeks",
            risks: "Additional libraries needed for advanced formats.",
            trustScore: 8.5,
        },
        {
            category: "Phishing and Social Engineering",
            name: "Social Engineering Toolkit (SET)",
            maker: "TrustedSec",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "2–6 weeks",
            risks: "Can trigger alarms without proper authorization.",
            trustScore: 8.5,
        },
        {
            category: "Phishing and Social Engineering",
            name: "GoPhish",
            maker: "Jordan Wright",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "2–3 weeks",
            risks: "SMTP setup is tricky; unauthorized use is illegal.",
            trustScore: 8,
        },
        {
            category: "Network Scanning and Reconnaissance",
            name: "Nmap",
            maker: "Gordon Lyon (Fyodor)",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "2–4 weeks",
            risks: "Might get flagged as suspicious activity.",
            trustScore: 9,
        },
        {
            category: "Network Scanning and Reconnaissance",
            name: "Wireshark",
            maker: "Wireshark Foundation",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "2–4 weeks",
            risks: "Captures sensitive data; misuse could cause issues.",
            trustScore: 9,
        },
        {
            category: "Endpoint Exploitation",
            name: "Metasploit",
            maker: "Rapid7",
            type: "Open Source/Commercial",
            cost: "Free (Community) / Paid plans available",
            timeToLearn: "3–6 weeks",
            risks: "Modules require regular updates; improper use can destabilize systems.",
            trustScore: 9,
        },
        {
            category: "Bypassing Network Security",
            name: "Burp Suite",
            maker: "PortSwigger",
            type: "Commercial",
            cost: "Free (Community) / $399+ (Pro)",
            timeToLearn: "2–6 weeks",
            risks: "Steep learning curve for advanced features.",
            trustScore: 9,
        },

        // Defensive Tools by Category
        {
            category: "Identity and Access Management (IAM)",
            name: "Okta",
            maker: "Okta, Inc.",
            type: "Commercial",
            cost: "$9–11 per user/month",
            timeToLearn: "2–4 weeks",
            risks: "Misconfiguration can create access vulnerabilities.",
            trustScore: 9,
        },
        {
            category: "Micro-Segmentation",
            name: "Cisco Secure Workload",
            maker: "Cisco Systems, Inc.",
            type: "Commercial",
            cost: "Subscription-based",
            timeToLearn: "3–6 weeks",
            risks: "Dependent on Cisco infrastructure.",
            trustScore: 8.5,
        },
        {
            category: "Continuous Monitoring and Analytics",
            name: "Splunk",
            maker: "Splunk Inc.",
            type: "Commercial",
            cost: "Subscription-based",
            timeToLearn: "4–8 weeks",
            risks: "Resource-intensive; complex configurations required.",
            trustScore: 9,
        },
        {
            category: "Zero Trust Network Access",
            name: "Cloudflare Access",
            maker: "Cloudflare Inc.",
            type: "Commercial",
            cost: "Free tier available; paid plans for advanced services",
            timeToLearn: "1–4 weeks",
            risks: "Requires stable internet and proper policy management.",
            trustScore: 9,
        },
        {
            category: "Endpoint Security",
            name: "CrowdStrike Falcon",
            maker: "CrowdStrike Inc.",
            type: "Commercial",
            cost: "Subscription-based",
            timeToLearn: "2–4 weeks",
            risks: "False positives; depends on continuous updates.",
            trustScore: 9,
        },
        {
            category: "Vulnerability Scanning",
            name: "Nessus",
            maker: "Tenable, Inc.",
            type: "Commercial",
            cost: "Free trial / $2,990 per year (Professional)",
            timeToLearn: "2–4 weeks",
            risks: "High false positives without proper tuning.",
            trustScore: 9,
        },
        {
            category: "Vulnerability Scanning",
            name: "OpenVAS",
            maker: "Greenbone Networks",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "2–4 weeks",
            risks: "Complex configuration for effective scanning.",
            trustScore: 8.5,
        },
        {
            category: "Vulnerability Scanning",
            name: "Qualys",
            maker: "Qualys, Inc.",
            type: "Commercial",
            cost: "Subscription-based (contact for pricing)",
            timeToLearn: "3–6 weeks",
            risks: "Relies on cloud-based systems; requires consistent internet access.",
            trustScore: 9,
        },
        {
            category: "Web Application Security",
            name: "OWASP ZAP (Zed Attack Proxy)",
            maker: "OWASP Foundation",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "2–4 weeks",
            risks: "Limited scalability for larger apps; requires expertise for advanced usage.",
            trustScore: 8.5,
        },
        {
            category: "Web Application Security",
            name: "Nikto",
            maker: "CIRT.net",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "1–2 weeks",
            risks: "Outdated scanning rules can result in false negatives.",
            trustScore: 7.5,
        },
        {
            category: "Cloud Security",
            name: "AWS Security Hub",
            maker: "Amazon Web Services",
            type: "Commercial",
            cost: "Pay-as-you-go",
            timeToLearn: "2–4 weeks",
            risks: "Dependent on proper integration with AWS services.",
            trustScore: 9,
        },
        {
            category: "Cloud Security",
            name: "Google Chronicle",
            maker: "Google",
            type: "Commercial",
            cost: "Subscription-based (contact for pricing)",
            timeToLearn: "2–4 weeks",
            risks: "Relies on Google Cloud for full functionality.",
            trustScore: 9,
        },
        {
            category: "Cloud Security",
            name: "Azure Security Center",
            maker: "Microsoft",
            type: "Commercial",
            cost: "Pay-as-you-go",
            timeToLearn: "2–4 weeks",
            risks: "Dependency on Azure ecosystem for maximum efficiency.",
            trustScore: 8.5,
        },
        {
            category: "Incident Response",
            name: "TheHive",
            maker: "CERT-BDF",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "2–4 weeks",
            risks: "Requires manual integration with SIEM tools.",
            trustScore: 8.5,
        },
        {
            category: "Incident Response",
            name: "Cortex",
            maker: "CERT-BDF",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "2–4 weeks",
            risks: "Limited support and documentation for advanced users.",
            trustScore: 8.5,
        },
        {
            category: "Incident Response",
            name: "Splunk Phantom",
            maker: "Splunk Inc.",
            type: "Commercial",
            cost: "Contact for pricing",
            timeToLearn: "4–6 weeks",
            risks: "High resource demand for orchestration.",
            trustScore: 9,
        },
        {
            category: "Forensics",
            name: "Autopsy",
            maker: "Sleuthkit",
            type: "Open Source",
            cost: "Free",
            timeToLearn: "2–4 weeks",
            risks: "Manual data analysis can be time-intensive.",
            trustScore: 8,
        },
        {
            category: "Forensics",
            name: "FTK (Forensic Toolkit)",
            maker: "AccessData",
            type: "Commercial",
            cost: "$3,995+ (depending on version)",
            timeToLearn: "3–6 weeks",
            risks: "Expensive; requires dedicated hardware for optimal performance.",
            trustScore: 9,
        },
        {
            category: "Forensics",
            name: "Magnet AXIOM",
            maker: "Magnet Forensics",
            type: "Commercial",
            cost: "$5,000+ per year",
            timeToLearn: "3–6 weeks",
            risks: "Costly for smaller organizations.",
            trustScore: 9,
        },
        {
            category: "Threat Intelligence",
            name: "ThreatConnect",
            maker: "ThreatConnect, Inc.",
            type: "Commercial",
            cost: "Contact for pricing",
            timeToLearn: "2–4 weeks",
            risks: "Dependency on third-party feeds for data accuracy.",
            trustScore: 8.5,
        },
        {
            category: "Threat Intelligence",
            name: "Recorded Future",
            maker: "Recorded Future, Inc.",
            type: "Commercial",
            cost: "Contact for pricing",
            timeToLearn: "2–4 weeks",
            risks: "Limited scope without premium subscriptions.",
            trustScore: 9,
        },
        {
            category: "Threat Intelligence",
            name: "AlienVault USM",
            maker: "AT&T Cybersecurity",
            type: "Commercial",
            cost: "Subscription-based (starting at $1,075/month)",
            timeToLearn: "2–4 weeks",
            risks: "High cost for small teams or organizations.",
            trustScore: 8.5,
        },
    ];

    const filteredTools = tools.filter(
        (tool) =>
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="toolkit-container">
            <header className="toolkit-header">
                <section className="tips-hero">
                    <h1>Cybersecurity ToolKit</h1>
                    <p>Stay ahead of online threats with these essential tips!</p>
                </section>
            </header>

            <section className="search-bar">
                <input
                    type="text"
                    placeholder="Search tools by name or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </section>

            <section className="tools-grid">
                {filteredTools.length > 0 ? (
                    filteredTools.map((tool, index) => (
                        <div className="tool-card" key={index}>
                            <h2>{tool.name}</h2>
                            <p><strong>Category:</strong> {tool.category}</p>
                            <p><strong>Maker:</strong> {tool.maker}</p>
                            <p><strong>Type:</strong> {tool.type}</p>
                            <p><strong>Cost:</strong> {tool.cost}</p>
                            <p><strong>Time to Learn:</strong> {tool.timeToLearn}</p>
                            <p><strong>Risks:</strong> {tool.risks}</p>
                            <p><strong>Trust Score:</strong> {tool.trustScore}/10</p>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No tools found matching your search.</p>
                )}
            </section>
        </main>
    );
};

export default ToolkitPartII;