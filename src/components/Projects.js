import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Full-stack e-commerce solution with Spring Boot backend, React frontend, and secure payment integration.',
      tech: ['Spring Boot', 'React', 'MongoDB', 'JWT'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      github: 'https://github.com/SairajVichare/ecommerce-platform',
      live: 'https://ecommerce-demo.netlify.app'
    },
    {
      id: 2,
      title: 'Task Management System',
      category: 'fullstack',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      tech: ['Java', 'Spring', 'React', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      github: 'https://github.com/SairajVichare/task-management',
      live: 'https://task-manager-demo.netlify.app'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'frontend',
      description: 'Interactive weather application with location-based forecasts and beautiful data visualizations.',
      tech: ['React', 'JavaScript', 'API', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop',
      github: 'https://github.com/SairajVichare/weather-dashboard',
      live: 'https://weather-app-demo.netlify.app'
    },
    {
      id: 4,
      title: 'Student Portal API',
      category: 'backend',
      description: 'RESTful API for student management system with authentication and grade tracking.',
      tech: ['Spring Boot', 'Hibernate', 'MySQL', 'JWT'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
      github: 'https://github.com/SairajVichare/student-portal-api',
      live: 'https://student-api-docs.netlify.app'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'frontend',
      description: 'Modern responsive portfolio website with smooth animations and interactive elements.',
      tech: ['React', 'CSS3', 'JavaScript', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
      github: 'https://github.com/SairajVichare/portfolio-website',
      live: 'https://sairaj-portfolio.netlify.app'
    },
    {
      id: 6,
      title: 'Chat Application',
      category: 'fullstack',
      description: 'Real-time chat application with user authentication and message history.',
      tech: ['Node.js', 'Socket.io', 'React', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop',
      github: 'https://github.com/SairajVichare/chat-application',
      live: 'https://chat-app-demo.netlify.app'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: 'fas fa-th' },
    { key: 'fullstack', label: 'Full Stack', icon: 'fas fa-layer-group' },
    { key: 'frontend', label: 'Frontend', icon: 'fas fa-paint-brush' },
    { key: 'backend', label: 'Backend', icon: 'fas fa-server' }
  ];
  
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

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
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      y: -50,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>
          
          <motion.p className="section-subtitle" variants={itemVariants}>
            A showcase of my recent work and technical capabilities
          </motion.p>

          <motion.div className="filter-buttons" variants={itemVariants}>
            {filters.map((filterItem, index) => (
              <motion.button
                key={filterItem.key}
                className={`filter-btn ${filter === filterItem.key ? 'active' : ''}`}
                onClick={() => setFilter(filterItem.key)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.i 
                  className={filterItem.icon}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                {filterItem.label}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              className="projects-grid"
              data-count={filteredProjects.length}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id} 
                  className="project-card"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -15,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  layout
                >
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <motion.div 
                      className="project-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link" 
                        title="View Code"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-github"></i>
                      </motion.a>
                      <motion.a 
                        href={project.live} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link" 
                        title="Live Demo"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </motion.a>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="project-info"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="project-header">
                      <motion.h3
                        whileHover={{ color: "#4f46e5" }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.span 
                        className="project-category"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        {project.category}
                      </motion.span>
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div 
                      className="project-tech"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {project.tech.map((tech, i) => (
                        <motion.span 
                          key={i} 
                          className="tech-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.6 + i * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <motion.div 
            className="projects-cta"
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a 
              href="#contact"
              className="cta-button"
              whileHover={{ 
                scale: 1.05,
                y: -3,
                boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Want to see more?</span>
              <motion.i 
                className="fas fa-arrow-right"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;