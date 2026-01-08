import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const stats = [
    { number: '2026', label: 'Graduate', icon: 'fas fa-graduation-cap' },
    { number: '15+', label: 'Projects', icon: 'fas fa-code' },
    { number: '10+', label: 'Technologies', icon: 'fas fa-laptop-code' },
    { number: '100%', label: 'Dedication', icon: 'fas fa-heart' }
  ];

  const values = [
    {
      icon: 'fas fa-rocket',
      title: 'Innovation First',
      description: 'I believe in pushing boundaries and exploring new technologies to create cutting-edge solutions that make a real impact.'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaborative Spirit',
      description: 'Great software is built by great teams. I thrive in collaborative environments and believe in sharing knowledge.'
    },
    {
      icon: 'fas fa-target',
      title: 'Quality Focused',
      description: 'Every line of code matters. I am committed to writing clean, maintainable, and efficient code that stands the test of time.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Growth Mindset',
      description: 'Technology evolves rapidly, and so do I. Continuous learning and adaptation are at the core of my development philosophy.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>
          
          <motion.p className="section-subtitle" variants={itemVariants}>
            Passionate Computer Science student crafting the future with code
          </motion.p>

          <div className="about-content">
            <motion.div className="about-intro" variants={itemVariants}>
              <div className="intro-text">
                <p>
                  Hello! I'm <strong>Sairaj Vichare</strong>, a dedicated Computer Science student graduating in 2026. 
                  My journey in technology began with curiosity and has evolved into a deep passion for creating 
                  innovative web solutions that solve real-world problems.
                </p>
                <p>
                  I specialize in <strong>full-stack development</strong> with expertise in modern technologies like 
                  React, Spring Boot, and cloud platforms. What drives me is the endless possibility to learn, 
                  create, and make a positive impact through technology.
                </p>
                <p>
                  Beyond coding, I'm fascinated by emerging technologies, enjoy collaborating on open-source projects, 
                  and believe that the best solutions come from understanding both the technical and human sides of problems.
                </p>
              </div>
            </motion.div>

            <motion.div className="about-stats" variants={itemVariants}>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.i 
                      className={stat.icon}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    />
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;