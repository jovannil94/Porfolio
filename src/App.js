import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom";
import About from "./components/About.js";
import Education from "./components/Education.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path={"/about"} component={About}/>
        <Route exact path={"/education"} component={Education}/>
        <Route exact path={"/projects"} component={Projects}/>
        <Route exact path={"/skills"} component={Skills}/>
      </Switch>
    </div>
  );
}

export default App;
