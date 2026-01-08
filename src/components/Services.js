import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "Building responsive, modern websites and web applications using the latest technologies and best practices.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "SEO Friendly"],
      color: "#4f46e5"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications that provide seamless user experiences across all devices.",
      features: ["Cross-Platform", "Native Performance", "User-Friendly UI", "App Store Ready"],
      color: "#059669"
    },
    {
      icon: "fas fa-server",
      title: "Backend Development",
      description: "Developing robust server-side applications, APIs, and database solutions for scalable web applications.",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security Implementation"],
      color: "#dc2626"
    },
    {
      icon: "fas fa-laptop-code",
      title: "Freelance Development",
      description: "Available for freelance projects, offering flexible solutions and dedicated support for your development needs.",
      features: ["Custom Solutions", "Flexible Timeline", "Direct Communication", "Quality Assurance"],
      color: "#7c3aed"
    },
    {
      icon: "fas fa-chart-line",
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and scalability to ensure the best user experience.",
      features: ["Code Optimization", "Database Tuning", "Caching Strategies", "Load Testing"],
      color: "#ea580c"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Consulting & Mentoring",
      description: "Providing technical guidance and mentoring for development projects and career growth in tech.",
      features: ["Technical Guidance", "Code Reviews", "Best Practices", "Career Advice"],
      color: "#0891b2"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            What I Do
          </motion.h2>
          
          <motion.p className="section-subtitle" variants={itemVariants}>
            Services I offer to help bring your ideas to life
          </motion.p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                <motion.div 
                  className="service-icon"
                  style={{ color: service.color }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <i className={service.icon}></i>
                </motion.div>
                
                <motion.h3 
                  className="service-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ color: service.color }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="service-description"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20, scale: 0.8 }}
                      animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -20, scale: 0.8 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.6 + index * 0.1 + featureIndex * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{
                        x: 5,
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.i 
                        className="fas fa-check"
                        style={{ color: service.color }}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.4 }
                        }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div 
                  className="service-cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <motion.a 
                    href="#contact" 
                    className="service-link"
                    style={{ borderColor: service.color }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: service.color,
                      color: "white",
                      boxShadow: `0 8px 25px ${service.color}30`
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                    <motion.i 
                      className="fas fa-arrow-right"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;