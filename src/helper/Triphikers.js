import React from "react";
import "../css/Triphikers.css"

const Triphikers = () => {
    return (
        <div className="tripHikersContainer">
            <div className="tripHikersContext">
                <div className="tripHikersLeft">
                    <div className="tripHikersAbout">
                        <p className="tripHikersTitle">Triphikers</p>    
                        <p className="projectsP">Triphikers is a 10-week Capstone 3-person project with the aim of allowing users to post, share, and join others trips from around the world. We hope to connect and encourage people to travel, share photos, and make new friends. Hosted live, both front and backend, Triphikers uses several complex components to achieve the functionality and UI/UX we deemed best for our users.</p>
                        <p className="projectsP">Special thanks to our Google technical mentor Josh Click, mParticle UI/UX mentor Sarah Skapik, Pursuit Web Development Instructor Corey Ladovsky, Pursuit Program Manager Caroline Kang, and the 190 people who attended. If you wish to see more explanations and Q&A sessions about the technical approaches to this application please feel free to visit the Youtube links.</p>
                    </div>
                </div>
                <div className="tripHikersRight">
                    <div className="videoContainer">
                        <iframe title="triphikersDemo" width="560" height="315" src="https://www.youtube.com/embed/fJBdcmVWWoY?start=2510" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="tripHikersButtonContainer">
                        <div className="tripHikersDemoLinks">
                            <button className="tripHikersButton" onClick={()=>window.open('https://triphikers.netlify.app/')}>Live Code</button>
                            <button className="tripHikersButton" onClick={()=>window.open('https://github.com/IsaiahCollazo99/triphikers')}>Github</button>
                        </div>
                        <div className="tripHikersQA1">
                            <button className="tripHikersButton" onClick={()=>window.open('https://youtu.be/XwrPQEWrUqo?t=2585')}>Q&A 1</button>
                            <button className="tripHikersButton" onClick={()=>window.open('https://youtu.be/T1b6qX6qxJs?t=3603')}>Q&A 2</button>
                        </div>
                        <div className="tripHikersQA2">
                            <button className="tripHikersButton" onClick={()=>window.open('https://youtu.be/D__aDODth-0?t=722')}>Q&A 3</button>
                            <button className="tripHikersButton" onClick={()=>window.open('https://youtu.be/JZyE2J-MAHE?t=1381')}>Q&A 4</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Triphikers;