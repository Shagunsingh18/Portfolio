import React from "react";

import { useEffect, useState } from "react";
import './App.css';
import Navbar from './navbar.jsx'
import Home from './home.jsx';
import Intro from './intro.jsx';
import Project from './project.jsx';
import Skill from './skill.jsx';
import Contact from './contact.jsx';


function App() {
  
  return (
    <>
    
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
