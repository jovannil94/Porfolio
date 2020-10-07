import React, { useRef } from 'react';
import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom";
import About from "./components/About.js";
import EducationSkills from "./components/EducationSkills.js";
import Projects from "./components/Projects.js";
import "./css/App.css";
import ScrollToTop from './helper/ScrollToTop';

function App() {
  const eduSkillSection = useRef(null);
  const projectsSection = useRef(null);

  return (
    <div className="App">
      <ScrollToTop/>
      <About eduSkillSection={eduSkillSection} projectsSection={projectsSection}/>
      <EducationSkills eduSkillSection={eduSkillSection}/>
      <Projects projectsSection={projectsSection}/>
      {/* <NavBar/> */}
      {/* <Switch>
        <Route exact path={"/"} component={About}/>
        <Route exact path={"/About"} component={About}/>
        <Route exact path={"/Education&Skills"} component={EducationSkills}/>
        <Route exact path={"/Projects"} component={Projects}/>
      </Switch> */}
    </div>
  );
}

export default App;
