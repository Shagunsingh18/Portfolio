
import { useEffect } from 'react';
import './skill.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaPython, FaJava
} from 'react-icons/fa';
import {
  SiNumpy, SiPandas, SiScikitlearn, SiC
} from 'react-icons/si';

function Skill() {
 useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate'); 
        }
      });
    },
    { threshold: 0.2 }
  );

  const elements = document.querySelectorAll('.scroll-animate');
  elements.forEach(el => observer.observe(el));

  return () => {
    elements.forEach(el => observer.unobserve(el));
  };
}, []);


  return (
    <>
    <div className='main'>
      <div className='left-space'>
        <div className="icon-grid scroll-animate fade-in">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer"><FaHtml5 /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer"><FaCss3Alt /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><FaJs /></a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><FaReact /></a>
          <a href="https://www.python.org/" target="_blank" rel="noreferrer"><FaPython /></a>
          <a href="https://numpy.org/" target="_blank" rel="noreferrer"><SiNumpy /></a>
          <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer"><SiPandas /></a>
          <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer"><SiScikitlearn /></a>
          <a href="https://www.java.com/" target="_blank" rel="noreferrer"><FaJava /></a>
          <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noreferrer"><SiC /></a>
        </div>

        <div className="matplotlib-icon scroll-animate fade-in">
          <a href="https://matplotlib.org/" target="_blank" rel="noreferrer" title="Matplotlib">📊</a>
        </div>
      </div>

      <div className='container'>
        <div className='technical-skill scroll-animate slide-in-right'>
          <h3>Technical Skills</h3>
          <p>
            Frontend: HTML, CSS, JavaScript, React.js<br />
            Python: NumPy, Pandas, Matplotlib, Scikit-learn<br />
            Languages: C, Java, Javascript, Python <br/>
            AI/ML Learner with a focus on data preprocessing, model training, and Python-based tools.

          </p>
        </div>
        <div className='soft-skill scroll-animate slide-in-right'>
          <h3>Soft Skills</h3>
          <p>
            Multitasking, Communication,  Adaptability & Flexibility
          </p>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Skill;
