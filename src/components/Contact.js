import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await emailjs.send(
        'service_uxem1gb',
        'template_tj6rakx',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'vicharesairaj07@gmail.com'
        },
        '3Zd2HSQkTfQCONKoX'
      );
      
      alert('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert(`Failed to send message. Please contact me directly at vicharesairaj07@gmail.com`);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'vicharesairaj07@gmail.com',
      link: 'mailto:vicharesairaj07@gmail.com',
      color: '#dc2626'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/sairaj-vichare',
      link: 'https://www.linkedin.com/in/sairaj-vichare',
      color: '#0077b5'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'github.com/SairajVichare',
      link: 'https://github.com/SairajVichare',
      color: '#333'
    },
    {
      icon: 'fab fa-twitter',
      label: 'Twitter',
      value: 'x.com/sairaj_vichare',
      link: 'https://x.com/sairaj_vichare',
      color: '#1da1f2'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>
          
          <motion.p className="section-subtitle" variants={itemVariants}>
            Ready to collaborate? Let's create something amazing together
          </motion.p>

          <div className="contact-content">
            <motion.div className="contact-info" variants={cardVariants}>
              <motion.div 
                className="contact-intro"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Let's Connect! 🚀
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Ready to collaborate on exciting projects? I'm always open to discussing 
                  new opportunities, innovative ideas, and ways to create impactful solutions together.
                </motion.p>
              </motion.div>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.a 
                    key={index} 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-item"
                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                    animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.9 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      x: 10,
                      scale: 1.05,
                      boxShadow: `0 8px 25px ${info.color}20`,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.i 
                      className={info.icon}
                      style={{ color: info.color }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    />
                    <div>
                      <span className="contact-label">{info.label}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form 
              className="contact-form" 
              onSubmit={handleSubmit}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: "#4f46e5",
                    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: "#4f46e5",
                    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: "#4f46e5",
                    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="submit-button" 
                disabled={isLoading}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.i 
                  className={isLoading ? "fas fa-spinner fa-spin" : "fas fa-paper-plane"}
                  animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 1, repeat: isLoading ? Infinity : 0 }}
                />
                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
              
              <motion.div 
                className="quick-stats"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {[
                  { icon: 'fas fa-clock', text: 'Usually responds within 24 hours', delay: 1.1 },
                  { icon: 'fas fa-coffee', text: 'Always open to coffee chats', delay: 1.2 },
                  { icon: 'fas fa-handshake', text: 'Open for freelance opportunities', delay: 1.3 }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="stat-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: stat.delay,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.i 
                      className={stat.icon}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.3 }
                      }}
                    />
                    <span>{stat.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;