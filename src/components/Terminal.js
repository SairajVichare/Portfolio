import React, { useState, useEffect } from 'react';

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const terminalData = [
    { type: 'command', text: '$ whoami' },
    { type: 'output', text: 'Sairaj Vichare - Full Stack Developer' },
    { type: 'command', text: '$ cat education.txt' },
    { type: 'output', text: 'Computer Science Student | Graduating 2026' },
    { type: 'command', text: '$ ls technologies/' },
    { type: 'output', text: 'Java  JavaScript  React  Node.js  Python  C/C++  SQL  MongoDB  Git ' },
    { type: 'command', text: '$ cat status.txt' },
    { type: 'output', text: 'Coding. Building. Deploying. Improving.' }
  ];

  useEffect(() => {
    if (currentIndex < terminalData.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, terminalData[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <section id="terminal" className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <div className="terminal-wrapper">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-red"></span>
                <span className="btn-yellow"></span>
                <span className="btn-green"></span>
              </div>
              <span className="terminal-title">Sairaj@portfolio:~</span>
            </div>
            
            <div className="terminal-body">
              <div className="terminal-content">
                {lines.map((line, index) => (
                  <div key={index} className={line.type === 'command' ? 'cmd-line' : 'out-line'}>
                    {line.text}
                  </div>
                ))}
                <span className="terminal-cursor">_</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            <div className="profile-wrapper">
              <img src="/profile.jpeg" alt="John Doe" className="profile-img" />
              <div className="profile-ring"></div>
            </div>
            
            <h1 className="hero-name">SAIRAJ VICHARE</h1>
            <h2 className="hero-role">Full Stack Developer</h2>
            <p className="hero-bio">
              Computer Science student graduating in 2026, passionate about building scalable,
             user-focused full-stack web applications with modern technologies.
            </p>
            
            <div className="hero-stats">
              <div className="stat-box">
                <span className="stat-num">2026</span>
                <span className="stat-text">Graduate</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">10+</span>
                <span className="stat-text">Technologies</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">∞</span>
                <span className="stat-text">Passion</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <a 
                href="/resume.pdf" 
                download="Sairaj_Vichare_Resume.pdf"
                className="btn-primary"
              >
                <i className="fas fa-download"></i>
                Download Resume
              </a>
              <a 
                href="#contact"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <i className="fas fa-envelope"></i>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;