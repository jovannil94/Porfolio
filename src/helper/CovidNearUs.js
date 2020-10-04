import React from "react";
import { Typography, Button } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import "../css/CovidNearUs.css"

const CovidNearUs = () => {
    return (
        <div className="covidNearUsContainer">
            <div className="covidNearUsTitle">
                <Typography variant="h3">
                    CovidNearUs
                </Typography>    
            </div>
            <div className="covidNearUsContext">
                <div className="covidNearUsLeft">
                    <div className="covidNearUsVid">
                        <Typography variant="h4" paragraph={true}>
                            Hackathon Presentation
                        </Typography>
                        <div className="videoContainer">
                            <iframe title="covidNearUsDemo" width="560" height="315" src="https://www.youtube.com/embed/uMqwYI6RfcA?start=2120" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="covidNearUsAbout">
                        <Typography variant="h4" paragraph={true}>
                            About
                        </Typography>
                        <Typography variant="body1" align="left" paragraph={true}>
                            CovidNearUs is a 2-day <b>Codecademy-sponsored Hackathon</b> 3-person project that allows users to get quick information about the current status of the coronavirus across the US and all 50 states as well as aiding in finding local testing centers. As the United States struggles with reopening and closing across the nation, CovidNearUs is a vital tool for Americans to keep up to date with phases, news, and current numbers for each state. 
                        </Typography>
                        <Typography variant="body1" align="left" paragraph={true}>
                            CovidNearUs utilizes Twitter for quick information as most COVID-19 related articles provide extensive information that can be overwhelming for the average American. However, our approach includes using each state’s verified Department of Health Twitter to show recommendations, rules, phases, etc... to that specific state. While also encouraging users to get tested for the coronavirus, regardless of their location in the US, using Google’s geolocation and driving directions for local testing sites in their area equipped with phone numbers, addresses, and websites for each specific testing site. 
                        </Typography>
                        <Typography variant="body1" align="left" paragraph={true}>
                            Codecademy software engineers judged each project based on certain criteria and awarded prizes. CovidNearUs won the <b>Most Ambitious Award</b> for our hard work we achieved within a 48 hour span. More special thanks to our Codecademy technical mentor Josh Goldberg, mParticle UI/UX mentor Sarah Skapik, Pursuit Web Development Instructor Corey Ladovsky, Pursuit Program Manager Caroline Kang, and all the judges from Codecademy. I am extremely proud of this accomplishment and encourage you to see the feedback given to us by the Codecademy engineers by clicking below.
                        </Typography>
                        <Button startIcon={<YouTubeIcon/>} onClick={()=>window.open('https://youtu.be/uMqwYI6RfcA?t=6720')} variant="contained" color="primary" className="aboutEmail" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '160px', minHeight: '30px'}}> Most Ambitious Award</Button>
                    </div>
                </div>
                <div className="covidNearUsRight">
                    <Typography variant="h4" paragraph={true}>
                        Check It Out
                    </Typography>
                    <div className="buttonsContainer">
                        <Button startIcon={<GitHubIcon/>} onClick={()=>window.open('https://github.com/jovannil94/COVID-Hackathon')} variant="contained" color="primary" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '160px', minHeight: '30px'}}> GitHub </Button>
                        <Button startIcon={<HttpIcon/>} onClick={()=>window.open('https://covidnearus.netlify.app/')} variant="contained" color="primary" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '160px', minHeight: '30px'}}> COVIDNearUs </Button>
                    </div>
                    <div className="frameContainer">
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6714684406197448704" height="728" width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CovidNearUs;