import React from "react";
import { Typography, CardMedia } from '@material-ui/core';
import 'fontsource-roboto';
import "../css/About.css"

const About = () => {
    return (
        <div className="aboutContainer">
            <Typography variant="h2" className="aboutTitle">
                Who Am I?
            </Typography>
            <div className="aboutBody">
                <Typography variant="body1" align="left" paragraph={true}>
                    Hello there, I am Jovanni Luna, an aspiring software engineer from the Big Apple. For the last year, I went from having no background knowledge of coding and through some rigiourious training from a Google-funded program called Pursuit I can now pursue my dream of being a Full-Stack Web developer. I am always ready and eager to learn more about software development and hope for a chance to showcase my new skills.
                </Typography>
                <Typography variant="body1" align="left" paragraph={true}>
                    From past experience working in sales for a technology product based company, it always awed me in new technologies and how fast the industry moved. The updates, the hardware, and the functionality was all impressive but how exactly did it work? That's when I realized there were full teams behind it all and a whole nother world behind the hardware. Learning software development really gave me an appreciation for functionality and work behind the software. I look at sites I’ve visited a thousand times in a new light, like how does that work? Why this choice? I wonder how long this took? To find a few easter eggs here and there left by development teams. If you told me a year ago that I would be learning how to answer those questions myself, I wouldn’t have believed you.
                </Typography>
                <Typography variant="body1" align="left">
                    When I am not coding, you can find me either watching or playing soccer, my favourite team of course is Real Madrid. Some other hobbies I have are playing chess, video games, learning new cultures, and keeping up to date with technology. I’ve been on a long journey of self-discovery, where I come from, how can I improve, where I am going, and the future is looking bright.
                </Typography>
            </div>
        </div>
    )
}

export default About;