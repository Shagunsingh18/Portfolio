import React from "react";

import "./contact.css";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  /* Animation blueprint for each button */
  const btnVariants = {
    hidden: { opacity: 0, y: 60 },
    show:   { opacity: 1, y: 0 }
  };

  return (
    <div className="contact-main">
      <video autoPlay loop muted playsInline className="bg1-video">
        <source src="/Contact-bg.mp4" type="video/mp4" />
      </video>

      <div className="contact-div">Contact</div>
      <div className="line" />

      {/* container that staggers children when in view */}
      <motion.div
        className="links"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
          }
        }}
        initial="hidden"
        whileInView="show"              
        viewport={{ once: false, amount: 0.25 }} 
        
      >
        <motion.button variants={btnVariants}>
          <a
            href="https://wa.me/917351900972"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon" />WhatsApp
          </a>
        </motion.button>

        <motion.button variants={btnVariants}>
          <a href="mailto:shagunthakur255@gmail.com">
            <FaEnvelope className="icon" /> E‑mail
          </a>
        </motion.button>

        <motion.button variants={btnVariants}>
          <a href="https://www.linkedin.com/in/shagun-singh-2724252a0/">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </motion.button>

        <motion.button variants={btnVariants}>
          <a href="https://github.com/Shagunsingh18">
            <FaGithub className="icon" /> GitHub
          </a>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Contact;
