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
                <Typography variant="h2">
                    COVIDNearUs
                </Typography>    
            </div>
            <div className="covidNearUsContext">
                <div className="covidNearUsLeft">
                    <div className="covidNearUsVid">
                        <Typography variant="h4" paragraph={true}>
                            Hackathon Presentation
                        </Typography>
                        <iframe title="covidNearUsDemo" width="560" height="315" src="https://www.youtube.com/embed/uMqwYI6RfcA?start=2120" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="covidNearUsAbout">
                        <Typography variant="h4" paragraph={true}>
                            About
                        </Typography>
                        <Typography variant="body1" align="left" paragraph={true}>
                            covidNearUs is a 10-week Capstone project with the aim of allowing users to post, share, and join others trips from around the world. We hope to connect and encourage people to travel, share photos, and make new friends. Hosted live, both front and backend, covidNearUs uses several complex components to achieve the functionality and UI/UX we deemed best for our users. 
                        </Typography>
                        <Typography variant="body1" align="left" paragraph={true}>
                            Our unique Hotspots Map feature was complicated but well worth the effort. Using several resting APIs such as Google’s geolocation, maps, driving directions, autocomplete as well as Google’s firebase and our own database, the Hotspots Map allows all users to post live Hotspots anywhere for the world to see. 
                        </Typography>
                        <Typography variant="body1" align="left" paragraph={true}>
                            If you wish to see more explanations and Q&A sessions about the technical approaches to this application please feel free to visit the Youtube links below. 
                        </Typography>
                        <Button startIcon={<YouTubeIcon/>} onClick={()=>window.open('https://youtu.be/uMqwYI6RfcA?t=6720')} variant="contained" color="primary" className="aboutEmail" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '160px', minHeight: '30px'}}> Most Ambitious Award</Button>
                    </div>
                </div>
                <div className="covidNearUsRight">
                    <Typography variant="h4" paragraph={true}>
                        Check It Out
                    </Typography>
                    <Button startIcon={<HttpIcon/>} onClick={()=>window.open('https://covidnearus.netlify.app/')} variant="contained" color="primary" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '160px', minHeight: '30px'}}> COVIDNearUs </Button>
                    <Button startIcon={<GitHubIcon/>} onClick={()=>window.open('https://github.com/jovannil94/COVID-Hackathon')} variant="contained" color="primary" style={{maxWidth: '400px', maxHeight: '50px', minWidth: '160px', minHeight: '30px'}}> GitHub </Button>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6714684406197448704" height="728" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>
            </div>
        </div>
    )
}

export default CovidNearUs;