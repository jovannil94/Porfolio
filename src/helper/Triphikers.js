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
                    </div>
                </div>
                <div className="tripHikersRight">
                    <div className="videoContainer">
                        <iframe title="triphikersDemo" width="560" height="315" src="https://www.youtube.com/embed/fJBdcmVWWoY?start=2510" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Triphikers;