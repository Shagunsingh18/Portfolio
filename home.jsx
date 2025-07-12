
import { motion } from "framer-motion";
import "./home.css";

function Home() {
  return (
    <>
     
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
        initial={{ opacity: 0 }}               
        animate={{ opacity: 1 }}               
        transition={{ duration: 1.2, delay: 2 }}
      >
       <source src='/tech.mp4' type="video/mp4"/>
      </motion.video>

           <div class="overlay"></div>
      
      <motion.section
        className="home"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="text">
          <h1>Hello<span className="dot">.</span></h1>

          <div className="intro-line">
            <div className="short-line"></div>
            <h1>I&apos;m Shagun Singh</h1>
          </div>

          <h3>Frontend Developer&nbsp;| AI/ML Enthusiast.</h3>
          <h3>Crafting interactive UIs</h3>
          <h3>Exploring the world of AI and Machine Learning</h3>

          <button><a href="/rr.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button>

        </div>
            
        <motion.div
          className="right"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        />
      
      </motion.section>

    </>
  );
}

export default Home;
