import React from "react";
import { Typography, Button } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import "../css/Triphikers.css"

const Triphikers = () => {
    return (
        <div className="tripHikersContainer">
            <div className="tripHikersTitle">
                <Typography variant="h3">
                    Triphikers
                </Typography>    
            </div>
            <div className="tripHikersContext">
                <div className="tripHikersLeft">
                    <div className="tripHikersVid">
                        <Typography variant="h4" paragraph={true}>
                            Capstone Presentation
                        </Typography>
                        <div className="videoContainer">
                            <iframe title="triphikersDemo" width="560" height="315" src="https://www.youtube.com/embed/fJBdcmVWWoY?start=2510" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="tripHikersAbout">
                        <Typography variant="h4" paragraph={true}>
                            About
                        </Typography>
                        <Typography variant="body1" align="left" paragraph={true}>
                            Triphikers is a 10-week Capstone 3-person project with the aim of allowing users to post, share, and join others trips from around the world. We hope to connect and encourage people to travel, share photos, and make new friends. Hosted live, both front and backend, Triphikers uses several complex components to achieve the functionality and UI/UX we deemed best for our users. 
                        </Typography>
                        <Typography variant="body1" align="left" paragraph={true}>
                            Our unique Hotspots Map feature was complicated but well worth the effort. Using several resting APIs such as Google’s geolocation, maps, driving directions, autocomplete as well as Google’s firebase and our own database, the Hotspots Map allows all users to post live Hotspots anywhere for the world to see. 
                        </Typography>
                        <Typography variant="body1" align="left" paragraph={true}>
                            Special thanks to our Google technical mentor Josh Click, mParticle UI/UX mentor Sarah Skapik, Pursuit Web Development Instructor Corey Ladovsky, Pursuit Program Manager Caroline Kang, and the 190 people who attended. If you wish to see more explanations and Q&A sessions about the technical approaches to this application please feel free to visit the Youtube links below. 
                        </Typography>
                        <Button startIcon={<YouTubeIcon/>} onClick={()=>window.open('https://youtu.be/XwrPQEWrUqo?t=2584')} variant="contained" color="primary" className="aboutEmail" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '160px', minHeight: '30px'}}> Q&A 1 </Button>
                        <Button startIcon={<YouTubeIcon/>} onClick={()=>window.open('https://youtu.be/T1b6qX6qxJs?t=3603')} variant="contained" color="primary" className="aboutEmail" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '160px', minHeight: '30px'}}> Q&A 2 </Button>
                        <Button startIcon={<YouTubeIcon/>} onClick={()=>window.open('https://youtu.be/JZyE2J-MAHE?t=1380')} variant="contained" color="primary" className="aboutEmail" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '160px', minHeight: '30px'}}> Q&A 3 </Button>
                    </div>
                </div>
                <div className="tripHikersRight">
                    <Typography variant="h4" paragraph={true}>
                        Check It Out
                    </Typography>
                    <Button startIcon={<GitHubIcon/>} onClick={()=>window.open('https://github.com/IsaiahCollazo99/triphikers')} variant="contained" color="primary" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '160px', minHeight: '30px'}}> GitHub </Button>
                    <Button startIcon={<HttpIcon/>} onClick={()=>window.open('https://triphikers.netlify.app/')} variant="contained" color="primary" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '160px', minHeight: '30px'}}> TRIPHIKERS </Button>
                    <div className="linkedInContainer">
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6714695065781993472" height="766" width="504" frameborder="0" allowFullScreen title="Embedded post"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Triphikers;