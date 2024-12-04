import React from 'react';
import './TipsTricks.css';

const TipsAndTricks = () => {
    const tips = [
        {
            title: "Use Strong, Unique Passwords",
            description: "Make sure to create complex passwords and avoid using the same password across multiple accounts.",
            link: "https://www.cisa.gov/secure-our-world/require-strong-passwords#:~:text=Keep%20your%20networks%20secure%20by,of%204%20%E2%80%937%20random%20words."  // Replace with your link later
        },
        {
            title: "Enable Two-Factor Authentication (2FA)",
            description: "Secure your accounts by enabling 2FA on academic, work, and personal accounts.",
            link: "https://www.microsoft.com/en-us/security/business/security-101/what-is-two-factor-authentication-2fa" 
        },
        {
            title: "Beware of Phishing Attacks",
            description: "Always double-check emails and links before clicking. Make sure emails are from a trusted domain and that links are correctly typed",
            link: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" 
        },
        {
            title: "Keep Software Updated",
            description: "Regularly update your operating system, applications, and antivirus software to protect against vulnerabilities.",
            link: "https://www.cisa.gov/secure-our-world/update-software"  
        },
        {
            title: "Avoid Public Wi-Fi for Sensitive Transactions",
            description: "Use a VPN or wait until you’re on a secure network before accessing sensitive information like banking sites.",
            link: "https://usa.kaspersky.com/resource-center/definitions/what-is-a-vpn?srsltid=AfmBOopDzejmUbxDY_JVKcs9TzqdNQ1SgeHnli7GOFJT8d64dOOE6YFu" 
        },
        {
            title: "Monitor Your Digital Footprint",
            description: "Regularly review your online accounts, privacy settings, and search results to ensure your information is secure.",
            link: "#" 
        },
        {
            title: "Use a Password Manager",
            description: "A password manager can help you securely store and organize your passwords, making it easier to use strong, unique passwords.",
            link: "https://www.cmu.edu/iso/governance/guidance/password-managers.html"  
        },
        {
            title: "Be Cautious with Social Media and Your Personal Information",
            description: "Limit personal information on social media profiles to avoid becoming a target for social engineering attacks.",
            link: "https://www.cisa.gov/sites/default/files/publications/NCSAM_SocialMediaCybersecurity_2020.pdf"  
        },
    ];

    return (
        <main className="tips-body">
            <section className="tips-hero">
                <h1>Cybersecurity Tips & Tricks</h1>
                <p>Build your cybersecurity foundation with relevant and helpful tips to keep you secure. Click on each card for more information.</p>
            </section>

            <section className="video-container">
                <video width="640" height="480" controls>
                    <source src="../../tips.mp4" type="video/mp4" />
                </video>
            </section>

            <section className="tips-grid">
                {tips.map((tip, index) => (
                    <a href={tip.link} className="tip-item" key={index} target="_blank" rel="noopener noreferrer">
                        <h2>{tip.title}</h2>
                        <p>{tip.description}</p>
                    </a>
                ))}
            </section>

            <footer>
                <p>Stay safe and secure online!</p>
            </footer>
        </main>
    );
};

export default TipsAndTricks;

