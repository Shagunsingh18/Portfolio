import React from "react";

import './project.css';
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

function Project() {
  return (
    <>
      <div className="main-div">

        {/* Image slides in from right on scroll */}
        <motion.div
          className="right-div"
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src="./project.png" alt="project" className="right-img" />
        </motion.div>

        {/* Text box slides in from left */}
        <motion.div
          className="text-pro"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>
            <a href="https://github.com/Shagunsingh18/photo-gallery">Project</a>
          </h2>

          {/* Animate paragraphs one by one */}
          <div className="description">
            {[
              "The Pet Photo Gallery is a fully responsive frontend web application designed to showcase pet photos in a visually appealing and categorized layout. It allows users to browse through various categories of pet images (like dogs, cats, birds, etc.) using a clean, organized, and accessible interface.",
              "Categorized Sections: Pet photos are grouped into categories to enhance user experience and simplify navigation.",
              "Responsive Design: Built using HTML and CSS, the layout adjusts seamlessly across all devices.",
              "Image Grid Layout: A dynamic gallery grid that displays pet photos with proper spacing, hover effects, and animations."
            ].map((text, index) => (
              <motion.p
                key={index}
                custom={index}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

      </div>
     
    </>
  );
}

export default Project;
