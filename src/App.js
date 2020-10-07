import React, { useRef } from 'react';
import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom";
import About from "./components/About.js";
import EducationSkills from "./components/EducationSkills.js";
import Projects from "./components/Projects.js";
import "./css/App.css";
import ScrollToTop from './helper/ScrollToTop';
import { Contact } from './components/Contact';

function App() {
  const eduSkillSection = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);

  return (
    <div className="App">
      <ScrollToTop/>
      <About eduSkillSection={eduSkillSection} projectsSection={projectsSection} contactSection={contactSection}/>
      <EducationSkills eduSkillSection={eduSkillSection}/>
      <Projects projectsSection={projectsSection}/>
      <Contact contactSection={contactSection}/>
    </div>
  );
}

export default App;
