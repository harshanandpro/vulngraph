import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About <span className="gradient-text">PackageHub</span></h1>
          
          <div className="about-hero">
            <div className="about-text">
              <p className="about-intro">
                PackageHub is a powerful tool designed to help developers analyze, validate, 
                and optimize their Node.js package.json files. We make package management 
                simpler and more efficient.
              </p>
            </div>
          </div>

          <div className="features-section">
            <h2 className="section-title">Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>Validate</h3>
                <p>Check for errors, syntax issues, and best practices in your package.json configuration</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Analyze</h3>
                <p>Deep dive into your dependencies, get insights about version conflicts and outdated packages</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Optimize</h3>
                <p>Improve package performance with optimization recommendations and best practices</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Secure</h3>
                <p>Identify security vulnerabilities in your dependencies and get remediation suggestions</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3>Track</h3>
                <p>Monitor your package evolution over time with detailed history and analytics</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Recommend</h3>
                <p>Get smart recommendations for dependency updates and alternative packages</p>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-card">
              <h3 className="stat-number">10K+</h3>
              <p className="stat-label">Packages Analyzed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">5K+</h3>
              <p className="stat-label">Active Users</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">99.9%</h3>
              <p className="stat-label">Uptime</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">0s</h3>
              <p className="stat-label">Average Response Time</p>
            </div>
          </div>

          <div className="mission-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              We believe that package management should be effortless and secure. 
              Our mission is to empower developers with tools that make their 
              workflow smoother, their code more secure, and their projects more successful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;