import React from "react";
import { Typography, CardMedia, Button } from '@material-ui/core';
import profilePicture from "../images/linkedInPic.jpg";
import 'fontsource-roboto';
import "../css/About.css"

const About = () => {
    return (
        <div className="aboutContainer" >
            <div className="aboutTitle">
                <Typography variant="h2" >
                    Who Am I?
                </Typography>    
            </div>
            <div className="aboutContext">
                <div className="aboutLeft">
                    <div className="aboutPicture">
                        <CardMedia image={profilePicture} component="img" alt="linkedInProfile" height="300"/>    
                    </div>
                    <div className="aboutConnect">
                        <Typography variant="h4">
                            Connect With Me
                        </Typography>
                        <Typography variant="body1" align="center">
                        <b>Phone:</b> 917-232-0042
                        </Typography>
                        <Button className="aboutLinks" onClick={()=>window.open('https://www.linkedin.com/in/jovanniluna')} variant="contained" color="primary" style={{maxWidth: '100%', maxHeight: '10%', minWidth: '50%', minHeight: '5%'}}> LinkedIn </Button>
                        <Button className="aboutLinks" onClick={()=>window.open('https://github.com/jovannil94')} variant="contained" color="primary" style={{maxWidth: '100%', maxHeight: '10%', minWidth: '50%', minHeight: '5%'}}> GitHub </Button>
                        <Button className="aboutLinks" onClick={()=>window.open('https://docs.google.com/document/d/1CA8DVkXFKTe8sec_udYi1kDJccfwlZFGqRcFSdXSyEY/edit?usp=sharing')} variant="contained" color="primary" style={{maxWidth: '100%', maxHeight: '10%', minWidth: '50%', minHeight: '5%'}}> Resume </Button>
                        <Button className="aboutLinks" onClick={()=>window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jovanniluna@pursuit.org;jovannil94@gmail.com')} variant="contained" color="primary" className="aboutEmail" style={{maxWidth: '100%', maxHeight: '10%', minWidth: '50%', minHeight: '5%'}}> Email Me </Button>
                    </div>
                </div>
                <div className="aboutRight">
                    <Typography variant="body1" align="left" paragraph={true}>
                        Hello there, I am <b>Jovanni Luna</b>, an aspiring software engineer from the Big Apple. For the last year, I went from having no background knowledge of coding and through some rigiourious training from a Google-funded program called Pursuit I can now pursue my dream of being a Full-Stack Web developer. I am always ready and eager to learn more about software development and hope for a chance to showcase my new skills.
                    </Typography>
                    <Typography variant="body1" align="left" paragraph={true}>
                        From past experience working in sales for a technology product based company, it always awed me in new technologies and how fast the industry moved. The updates, the hardware, and the functionality was all impressive but how exactly did it work? That's when I realized there were full teams behind it all and a whole nother world behind the hardware. Learning software development really gave me an appreciation for functionality and the work behind the software. I look at sites I’ve visited a thousand times in a new light, like how does that work? Why this choice? I wonder how long this took? To find a few easter eggs here and there left by development teams. If you told me a year ago that I would be learning how to answer those questions myself, I wouldn’t have believed you.
                    </Typography>
                    <Typography variant="body1" align="left">
                        When I am not coding, you can find me either watching or playing soccer, my favourite team of course is Real Madrid. Some other hobbies I have are playing chess, video games, learning new cultures, and keeping up to date with technology. I’ve been on a long journey of self-discovery, where I come from, how can I improve, where I am going, and the future is looking bright.
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default About;