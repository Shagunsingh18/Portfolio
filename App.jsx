import { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Intro from './components/intro.jsx';
import Project from './components/project.jsx';
import Skill from './components/skill.jsx';
import Contact from './components/contact.jsx';
import Loader from './components/loader.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const minTime = 2000; 
  const start = Date.now();

  const handlePageLoad = () => {
    const elapsed = Date.now() - start;
    const remaining = minTime - elapsed;

    setTimeout(() => setLoading(false), remaining > 0 ? remaining : 0);
  };

  window.addEventListener("load", handlePageLoad);

  return () => {
    window.removeEventListener("load", handlePageLoad);
  };
}, []);



  return (
    <>
    {loading && <Loader />}
      <Navbar />
      <div id="home"><Home /></div>
      <div id="intro"><Intro /></div>
      <div id="project"><Project /></div>
      <div id="skill"><Skill /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default App;
