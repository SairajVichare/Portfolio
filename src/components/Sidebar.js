import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'hero', icon: 'fas fa-home', label: 'Home' },
    { id: 'about', icon: 'fas fa-user', label: 'About' },
    { id: 'skills', icon: 'fas fa-code', label: 'Skills' },
    { id: 'services', icon: 'fas fa-briefcase', label: 'Services' },
    { id: 'experience', icon: 'fas fa-graduation-cap', label: 'Experience' },
    { id: 'projects', icon: 'fas fa-folder-open', label: 'Projects' },
    { id: 'contact', icon: 'fas fa-envelope', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  return (
    <>
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-overlay" 
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <motion.div 
        className={`sidebar ${isOpen ? 'open' : ''}`}
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="sidebar-header">
          <motion.div 
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <span className="logo-bracket">{'<'}</span>
            <span className="logo-text">SV</span>
            <span className="logo-bracket">{'/>'}</span>
          </motion.div>
          <motion.div 
            className="status-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="status-dot"></div>
            <span>AVAILABLE</span>
          </motion.div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="nav-icon">
                <i className={item.icon}></i>
              </span>
              <span className="nav-label">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        <motion.div 
          className="sidebar-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="social-links">
            {[
              { href: "https://github.com/SairajVichare", icon: "fab fa-github" },
              { href: "https://www.linkedin.com/in/sairaj-vichare", icon: "fab fa-linkedin" },
              { href: "https://x.com/sairaj_vichare", icon: "fab fa-twitter" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Sidebar;