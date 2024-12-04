import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Seattle's Guide to Cybersecurity Careers</h1>
        <p>Our mission is to bridge the gap between Seattle students and Cybersecurity careers.</p>
        <div className="home-buttons">
          <a href="/account" className="btn">Log-In</a>
        </div>
      </header>

      {/* Features Section Moved Above */}
      <section className="home-features">
        <h2>Our Features</h2>
        <div className="features-grid">
          
          <div className="feature-item">
            <h3>Techincal Tool Kit</h3>
            <p>Explore cybersecurity tools to enhance your experience and gain practical knowledge!</p>
          </div>
          <Link to ="/careerquiz">
          <div className="feature-item">
            <h3>Career Quiz</h3>
            <p>Figure out your personalized cybersecurity match by taking this quiz.</p>
          </div>
          </Link>
          <Link to ="/tipsandtricks">
          <div className="feature-item">
            <h3>Tips & Tricks</h3>
            <p>Build your cybersecurity foundation with relevant and helpful tips to keep you secure.</p>
          </div>
          </Link>
          <Link to ="/exploreCareers">
          <div className="feature-item">
            <h3>Explore Careers</h3>
            <p>Explore different Cybersecurity careers</p>
          </div>
          </Link>
        </div>
      </section>

      {/* Cybersecurity Information Section */}
      <section className="cyber-info">
        <h2>Did You Know?</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>Job Opportunities</h3>
            <p>The demand for cybersecurity professionals has grown by 350% in the past decade.</p>
          </div>
          <div className="info-item">
            <h3>Rising Threats</h3>
            <p>Cyberattacks have increased by over 600% since the start of the COVID-19 pandemic.</p>
          </div>
          <div className="info-item">
            <h3>Economic Impact</h3>
            <p>Global cybercrime damages are expected to reach $10.5 trillion annually by 2025.</p>
          </div>
          <div className="info-item">
            <h3>Critical Infrastructure</h3>
            <p>Critical infrastructure, like power grids and water systems, is a growing target for cyberattacks.</p>
          </div>
          <div className="info-item">
            <h3>Cloud Security</h3>
            <p>By 2026, over 95% of enterprises will rely on cloud security solutions to protect sensitive data.</p>
          </div>
          <div className="info-item">
            <h3>Social Engineering</h3>
            <p>Nearly 98% of cyberattacks involve some form of social engineering, targeting human vulnerabilities.</p>
          </div>
          <div className="info-item">
            <h3>Healthcare Vulnerabilities</h3>
            <p>Healthcare data breaches increased by 55% in 2023, making it one of the most targeted industries.</p>
          </div>
          <div className="info-item">
            <h3>AI in Cybersecurity</h3>
            <p>Artificial intelligence is being used to detect malware and analyze threats faster than ever before.</p>
          </div>
          <div className="info-item">
            <h3>Ransomware Epidemic</h3>
            <p>Ransomware attacks are projected to cost victims $265 billion annually by 2031.</p>
          </div>
          <div className="info-item">
            <h3>Personal Data</h3>
            <p>Every minute, 1,400 records are stolen due to data breaches worldwide.</p>
          </div>
          <div className="info-item">
            <h3>IoT Expansion</h3>
            <p>By 2030, there will be 75 billion connected devices, drastically increasing attack surfaces for hackers.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

