import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "fas fa-palette",
      skills: [
        { name: "React.js", level: 90, icon: "fab fa-react" },
        { name: "JavaScript", level: 85, icon: "fab fa-js" },
        { name: "HTML5/CSS3", level: 95, icon: "fab fa-html5" },
        { name: "TypeScript", level: 75, icon: "fab fa-js" }
      ]
    },
    {
      title: "Backend Development",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", level: 80, icon: "fab fa-node-js" },
        { name: "Python", level: 85, icon: "fab fa-python" },
        { name: "Java", level: 90, icon: "fab fa-java" },
        { name: "Express.js", level: 75, icon: "fas fa-code" }
      ]
    },
    {
      title: "Database & Tools",
      icon: "fas fa-database",
      skills: [
        { name: "MongoDB", level: 80, icon: "fas fa-leaf" },
        { name: "MySQL", level: 85, icon: "fas fa-database" },
        { name: "Git/GitHub", level: 90, icon: "fab fa-git-alt" },
        { name: "Docker", level: 70, icon: "fab fa-docker" }
      ]
    },
    {
      title: "Design & Others",
      icon: "fas fa-paint-brush",
      skills: [
        { name: "UI/UX Design", level: 75, icon: "fas fa-pencil-ruler" },
        { name: "Figma", level: 80, icon: "fab fa-figma" },
        { name: "Photoshop", level: 70, icon: "fas fa-image" },
        { name: "Problem Solving", level: 95, icon: "fas fa-brain" }
      ]
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
    hidden: { y: 50, opacity: 0 },
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
    <section id="skills" className="skills-section">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Technical Skills
          </motion.h2>
          
          <motion.p className="section-subtitle" variants={itemVariants}>
            Technologies and tools I work with to bring ideas to life
          </motion.p>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <i className={category.icon}></i>
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                    >
                      <div className="skill-info">
                        <div className="skill-name">
                          <i className={skill.icon}></i>
                          <span>{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;