import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="hero-section">
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.div 
              className="hero-greeting"
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                👋
              </motion.span>
              Hello, I'm
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              variants={titleVariants}
            >
              <motion.span 
                className="name-highlight"
                initial={{ backgroundSize: "0% 100%" }}
                animate={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              >
                Sairaj Vichare
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="hero-subtitle-container"
              variants={itemVariants}
            >
              <motion.h2 
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                Full Stack Developer & 
                <motion.span 
                  className="typing-text"
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  CS Student
                </motion.span>
              </motion.h2>
            </motion.div>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              Passionate about creating innovative web solutions with modern technologies. 
              Currently pursuing Computer Science and building scalable applications that make a difference.
            </motion.p>
            
            <motion.div 
              className="hero-stats"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              {[
                { number: '2026', label: 'Graduate', delay: 2.7 },
                { number: '15+', label: 'Projects', delay: 2.8 },
                { number: '10+', label: 'Technologies', delay: 2.9 }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: stat.delay,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
              <motion.a 
                href="#projects"
                className="btn-primary"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  View My Work
                </motion.span>
                <motion.i 
                  className="fas fa-arrow-right"
                  initial={{ x: 0, opacity: 0.7 }}
                  whileHover={{ x: 5, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a 
                href="/resume.pdf"
                download="Sairaj_Vichare_Resume.pdf"
                className="btn-secondary"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  borderColor: "#4f46e5"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.i 
                  className="fas fa-download"
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.3 }
                  }}
                />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            variants={imageVariants}
          >
            <div className="image-container">
              <motion.div 
                className="floating-card"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img 
                  src="/profile.jpeg" 
                  alt="Sairaj Vichare" 
                  className="profile-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="image-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="tech-icons">
                    {[
                      { icon: 'fab fa-react', delay: 0 },
                      { icon: 'fab fa-node-js', delay: 0.1 },
                      { icon: 'fab fa-python', delay: 0.2 },
                      { icon: 'fab fa-java', delay: 0.3 }
                    ].map((tech, index) => (
                      <motion.i 
                        key={index}
                        className={tech.icon}
                        initial={{ scale: 0, rotate: -180 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: tech.delay,
                          type: "spring",
                          stiffness: 200
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              
              {[
                { 
                  icon: 'fas fa-code', 
                  className: 'element-1',
                  animate: { x: [0, 25, 0], y: [0, -10, 0] },
                  duration: 4
                },
                { 
                  icon: 'fas fa-laptop-code', 
                  className: 'element-2',
                  animate: { x: [0, -20, 0], y: [0, 15, 0] },
                  duration: 5,
                  delay: 1
                },
                { 
                  icon: 'fas fa-database', 
                  className: 'element-3',
                  animate: { x: [0, 15, 0], y: [0, -20, 0] },
                  duration: 4.5,
                  delay: 2
                }
              ].map((element, index) => (
                <motion.div 
                  key={index}
                  className={`floating-element ${element.className}`}
                  animate={element.animate}
                  transition={{ 
                    duration: element.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: element.delay || 0
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <i className={element.icon}></i>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <motion.div 
            className="scroll-line"
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Scroll Down
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;