import React from "react";
import "../css/CovidNearUs.css"

const CovidNearUs = () => {
    return (
        <div className="covidNearUsContainer">
            <div className="covidNearUsContext">
                <div className="covidNearUsLeft">
                    <div className="covidNearUsAbout">
                        <p className="covidNearUsTitle">CovidNearUs</p>    
                        <p className="projectsP">CovidNearUs is a 2-day <b>Codecademy-sponsored Hackathon</b> 3-person project that allows users to get quick information about the current status of the coronavirus across the US and all 50 states as well as aiding in finding local testing centers. As the United States struggles with reopening and closing across the nation, CovidNearUs is a vital tool for Americans to keep up to date with phases, news, and current numbers for each state.</p>
                        <p className="projectsP">CovidNearUs won the <b>Most Ambitious Award</b> for our hard work we achieved within a 48 hour span. More special thanks to our Codecademy technical mentor Josh Goldberg, mParticle UI/UX mentor Sarah Skapik, Pursuit Web Development Instructor Corey Ladovsky, Pursuit Program Manager Caroline Kang, and all the judges from Codecademy. I am extremely proud of this accomplishment and encourage you to see the feedback given to us by the Codecademy engineers by clicking the link.</p>
                    </div>
                </div>
                <div className="covidNearUsRight">
                    <div className="videoContainer">
                    <iframe title="covidNearUsDemo" width="560" height="315" src="https://www.youtube.com/embed/uMqwYI6RfcA?start=2120" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="covidNearUsButtonContainer">
                        <div className="covidNearUsDemoLinks">
                            <button className="covidNearUsButton" onClick={()=>window.open('https://covidnearus.netlify.app/')}>Live Code</button>
                            <button className="covidNearUsButton" onClick={()=>window.open('https://github.com/jovannil94/COVID-Hackathon')}>Github</button>
                            <button className="covidNearUsButton" onClick={()=>window.open('https://youtu.be/uMqwYI6RfcA?t=6720')}>Most Ambitious Award</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CovidNearUs;