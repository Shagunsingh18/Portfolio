
import "./intro.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });   

  /* Animation blueprint for children */
  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    show:   { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="intro">
        {/* outer frame animates first */}
        <motion.div
          className="frame"
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* container for staggering children */}
          <motion.div
            className="frame-inner"
            variants={{
              hidden: {},
              show: {
                transition: {     
                  staggerChildren: 0.25,
                  delayChildren:   0.2
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {/* 3 animated blocks */}
            <motion.div className="background" variants={childVariants}>
              <p>
                Hi, I'm Shagun Singh, a 20‑year‑old B.Tech undergraduate pursuing
                Computer Science and Engineering from Uttar Pradesh, India.
              </p>
            </motion.div>

            <motion.div className="skills" variants={childVariants}>
              <p>
                I’m a frontend developer with a growing passion for AI and Machine
                Learning. As an introvert and deep thinker, I find joy in solving
                problems and expressing creativity through design and clean code.
              </p>
            </motion.div>

            <motion.div className="interest" variants={childVariants}>
              <p>
                Outside of tech, I’m deeply passionate about creative designing,
                which fuels my frontend work. I enjoy reading, writing, and
                dancing, all of which keep me expressive and inspired. I also love
                immersing myself in movies and series, finding stories that spark
                imagination and new ideas.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="tag">
          <p>
            “Creative at heart — I design, dance, write, and binge‑watch stories
            that move me.”
          </p>
        </div>
      </div>

    </>
  );
}

export default Intro;
