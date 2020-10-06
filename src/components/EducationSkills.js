import React from "react";
import { Typography, Button } from '@material-ui/core';
import HttpIcon from '@material-ui/icons/Http';
import cssIcon from "../images/icons/cssIcon.png";
import gitIcon from "../images/icons/gitIcon.png";
import htmlIcon from "../images/icons/htmlIcon.png";
import jsIcon from "../images/icons/javascriptIcon.png";
import nodeIcon from "../images/icons/nodeIcon.png";
import postIcon from "../images/icons/postmanIcon.png";
import reactIcon from "../images/icons/reactIcon.png";
import expressIcon from "../images/icons/expressIcon.png";
import postgresIcon from "../images/icons/postgreSQLIcon.png";
import 'fontsource-roboto';
import "../css/EducationSkills.css";

const EducationSkills = () => {
    return (
        <div className="esContainer" >
            <div className="esContext">
                <div className="esLeft">
                    <div className="esPursuit">
                        <p className="esTitle">Pursuit</p>
                        <p className="esP">Enrolled in an intensive 12-month, Google-funded software engineering fellowship with a 9% acceptance rate (out of 1500+ applicants) whose graduates are prepared with both technical and professional skills and have been hired as developers at leading companies such as Pinterest, JP Morgan, and Spotify.</p>
                        <p className="esP">Gained hands-on experience with Javascript, HTML, CSS, Node, Express, React/Redux, PostgreSQL, APIs, Git, Data Structures, Algorithms, and tech principles and culture via both team/individual projects, code reviews, and pair programming.</p>
                    </div>
                </div>
                <div className="esRight">
                    <div className="iconRow">
                        <div className="iconDetails">
                            <img src={jsIcon} alt="js" className="skillsIcons"/>
                            <p className="hideTitle">JavaScript</p>
                        </div>
                        <div className="iconDetails">
                            <img src={reactIcon} alt="react" className="skillsIcons"/>
                            <p className="hideTitle">React</p>
                        </div>
                        <div className="iconDetails">
                            <img src={gitIcon} alt="git" className="skillsIcons"/>
                            <p className="hideTitle">Git</p>
                        </div>
                    </div>
                    <div className="iconRow">
                        <div className="iconDetails">
                            <img src={cssIcon} alt="css" className="skillsIcons"/>
                            <p className="hideTitle">CSS</p>
                        </div>
                        <div className="iconDetails">
                            <img src={htmlIcon} alt="html" className="skillsIcons"/>
                            <p className="hideTitle">HTML</p>
                        </div>
                        <div className="iconDetails">
                            <img src={postgresIcon} alt="postgreSQL" className="skillsIcons"/>
                            <p className="hideTitle">PostgreSQL</p>
                        </div>
                    </div>
                    <div className="iconRow">
                        <div className="iconDetails">
                            <img src={nodeIcon} alt="node" className="skillsIcons"/>
                            <p className="hideTitle">Node JS</p>
                        </div>
                        <div className="iconDetails">
                            <img src={postIcon} alt="post" className="skillsIcons"/>
                            <p className="hideTitle">Postman</p>
                        </div>
                        <div className="iconDetails">
                            <img src={expressIcon} alt="express" className="skillsIcons"/>
                            <p className="hideTitle">Express JS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            /* <div className="esTitle">
                <Typography variant="h3">
                    Background
                </Typography>    
            </div>
            <div className="esContext">
                        <Button startIcon={<HttpIcon/>} onClick={()=>window.open('https://www.pursuit.org/')} variant="contained" color="primary" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '270px', minHeight: '30px'}}>Pursuit.org</Button>
                    </div>
                    <div className="esBaruch">
                        <Typography variant="h4">
                            Baruch College - (CUNY)
                        </Typography>
                        <Typography variant="body1" align="left" paragraph={true}>
                            "Baruch College is ranked among the region's and nation's top colleges by U.S. News & World Report, Forbes, Princeton Review, and others. Our campus is within easy reach of Wall Street, Midtown, and the global headquarters of major companies and non-profit and cultural organizations, giving students unparalleled internship, career, and networking opportunities. The College's more than 18,000 students, who speak more than 110 languages and trace their heritage to more than 160 countries, have been repeatedly named one of the most ethnically diverse student bodies in the United States."
                        </Typography>
                        <Button startIcon={<HttpIcon/>} onClick={()=>window.open('https://www.baruch.cuny.edu/')} variant="contained" color="primary" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '270px', minHeight: '30px'}}>baruch.cuny.edu/</Button>
                    </div>
                </div>
                <div className="esRight">
                    <Typography variant="h4" paragraph={true}>
                        Skills
                    </Typography>
                    <div className="iconRow">
                        <div className="iconDetails">
                            <img src={jsIcon} alt="js" className="skillsIcons"/>
                            <Typography className="hideTitle" variant="h5">
                                JavaScript
                            </Typography>
                        </div>
                        <div className="iconDetails">
                            <img src={reactIcon} alt="react" className="skillsIcons"/>
                            <Typography className="hideTitle" variant="h5">
                                React
                            </Typography>
                        </div>
                        <div className="iconDetails">
                            <img src={gitIcon} alt="git" className="skillsIcons"/>
                            <Typography className="hideTitle" variant="h5">
                                Git
                            </Typography>
                        </div>
                    </div>
                    <div className="iconRow">
                        <div className="iconDetails">
                            <img src={cssIcon} alt="css" className="skillsIcons"/>
                            <Typography className="hideTitle" variant="h5">
                                CSS
                            </Typography>
                        </div>
                        <div className="iconDetails">
                            <img src={htmlIcon} alt="html" className="skillsIcons"/>
                            <Typography className="hideTitle" variant="h5">
                                HTML
                            </Typography>
                        </div>
                        <div className="iconDetails">
                            <img src={postgresIcon} alt="postgreSQL" className="skillsIcons"/>
                            <Typography className="hideTitle" variant="h5">
                                PostgreSQL
                            </Typography>
                        </div>
                    </div>
                    <div className="iconRow">
                        <div className="iconDetails">
                            <img src={nodeIcon} alt="node" className="skillsIcons"/>
                            <Typography className="hideTitle" variant="h5">
                                Node JS
                            </Typography>
                        </div>
                        <div className="iconDetails">
                            <img src={postIcon} alt="post" className="skillsIcons"/>
                            <Typography className="hideTitle" variant="h5">
                                Postman
                            </Typography>
                        </div>
                        <div className="iconDetails">
                            <img src={expressIcon} alt="express" className="skillsIcons"/>
                            <Typography className="hideTitle" variant="h5">
                                Express JS
                            </Typography>
                        </div>
                    </div>
                </div>
            </div> */
    )
}

export default EducationSkills;