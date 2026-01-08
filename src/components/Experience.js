import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const education = [
    {
      title: 'Bachelor of Computer Science',
      institution: 'University',
      period: '2022 - 2026',
      description: 'Currently pursuing degree with focus on software engineering and algorithms. Maintained 3.8+ GPA in core subjects.'
    },
    {
      title: 'Java Full Stack Training',
      institution: 'CADD CENTRE',
      period: '2024',
      description: 'Comprehensive training in Java ecosystem, Spring Boot, React, and modern development practices. Completed 200+ hours of intensive training.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Education
          </motion.h2>
          
          <motion.p className="section-subtitle" variants={itemVariants}>
            My academic journey and continuous learning
          </motion.p>

          <div className="education-content">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="education-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="edu-header">
                  <h3>{edu.title}</h3>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <h4>{edu.institution}</h4>
                <p>{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;