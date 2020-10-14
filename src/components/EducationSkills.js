import React, { useEffect } from "react";
import cssIcon from "../images/icons/cssIcon.png";
import gitIcon from "../images/icons/gitIcon.png";
import htmlIcon from "../images/icons/htmlIcon.png";
import jsIcon from "../images/icons/javascriptIcon.png";
import nodeIcon from "../images/icons/nodeIcon.png";
import postIcon from "../images/icons/postmanIcon.png";
import reactIcon from "../images/icons/reactIcon.png";
import expressIcon from "../images/icons/expressIcon.png";
import postgresIcon from "../images/icons/postgreSQLIcon.png";
import pursuitIcon from "../images/icons/pursuitIcon.jpg";
import 'fontsource-roboto';
import "../css/EducationSkills.css";
import Aos from "aos";
import "aos/dist/aos.css";

const EducationSkills = ({ eduSkillSection }) => {

    useEffect(() => {
        Aos.init({duration:1500});
    }, [])

    return (
        <div className="esContainer">
            <h1 data-aos="fade-down" className="esTitle" ref={eduSkillSection}>Education & Skills</h1>
            <div className="esPage">
                <div className="esContext">
                    <div data-aos="fade-up" className="esLeft">
                        <div className="esPursuit">
                            <div className="pursuitLinks">
                                <p className="pursuitTitle" onClick={()=>window.open('https://www.pursuit.org/')}>Pursuit</p>
                                <img src={pursuitIcon} alt="pursuit" className="pursuitIcon" onClick={()=>window.open('https://www.pursuit.org/')}/>
                            </div>
                            <p className="esP">Enrolled in an intensive 12-month, Google-funded software engineering fellowship with a 9% acceptance rate (out of 1500+ applicants) whose graduates are prepared with both technical and professional skills and have been hired as developers at leading companies such as Pinterest, JP Morgan, and Spotify.</p>
                            <p className="esP">Gained hands-on experience with Javascript, HTML, CSS, Node, Express, React/Redux, PostgreSQL, APIs, Git, Data Structures, Algorithms, and tech principles and culture via both team/individual projects, code reviews, and pair programming.</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="esRight">
                        <div className="iconRow">
                            <div className="iconDetails">
                                <img src={jsIcon} alt="js" className="skillsIcons"/>
                                <p className="skillTitle">JavaScript</p>
                            </div>
                            <div className="iconDetails">
                                <img src={reactIcon} alt="react" className="skillsIcons"/>
                                <p className="skillTitle">React</p>
                            </div>
                            <div className="iconDetails">
                                <img src={gitIcon} alt="git" className="skillsIcons"/>
                                <p className="skillTitle">Git</p>
                            </div>
                        </div>
                        <div className="iconRow">
                            <div className="iconDetails">
                                <img src={cssIcon} alt="css" className="skillsIcons"/>
                                <p className="skillTitle">CSS</p>
                            </div>
                            <div className="iconDetails">
                                <img src={htmlIcon} alt="html" className="skillsIcons"/>
                                <p className="skillTitle">HTML</p>
                            </div>
                            <div className="iconDetails">
                                <img src={postgresIcon} alt="postgreSQL" className="skillsIcons"/>
                                <p className="skillTitle">PostgreSQL</p>
                            </div>
                        </div>
                        <div className="iconRow">
                            <div className="iconDetails">
                                <img src={nodeIcon} alt="node" className="skillsIcons"/>
                                <p className="skillTitle">Node JS</p>
                            </div>
                            <div className="iconDetails">
                                <img src={postIcon} alt="post" className="skillsIcons"/>
                                <p className="skillTitle">Postman</p>
                            </div>
                            <div className="iconDetails">
                                <img src={expressIcon} alt="express" className="skillsIcons"/>
                                <p className="skillTitle">Express JS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationSkills;