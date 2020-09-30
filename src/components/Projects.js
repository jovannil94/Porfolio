import React from "react";
import "../css/Projects.css"
import CovidNearUs from "../helper/CovidNearUs";
import Triphikers from "../helper/Triphikers";

const Projects = () => {
    return (
        <main className="projectsContainer">
            <Triphikers className="projectTriphikers"/>
            <CovidNearUs className="projectCovidNearUs"/>
        </main>
    )
}

export default Projects;