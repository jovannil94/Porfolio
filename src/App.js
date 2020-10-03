import React from 'react';
import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom";
import About from "./components/About.js";
import EducationSkills from "./components/EducationSkills.js";
import Projects from "./components/Projects.js";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path={"/"} component={About}/>
        <Route exact path={"/about"} component={About}/>
        <Route exact path={"/education&skills"} component={EducationSkills}/>
        <Route exact path={"/projects"} component={Projects}/>
      </Switch>
    </div>
  );
}

export default App;
