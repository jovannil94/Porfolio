import React from 'react';
import "../css/Contact.css";

export const Contact = ({ contactSection }) => {
    return (
        <div className="contactContainer">
            <button className="aboutButton" ref={contactSection}>PDF: Resume</button>
            <button className="aboutButton" onClick={()=>window.open('https://github.com/jovannil94')}>GitHub: jovannil94</button>
            <button className="aboutButton" onClick={()=>window.open('https://www.linkedin.com/in/jovanniluna')}>LinkedIn: jovanniluna</button>
            <button className="aboutButton" onClick={()=>window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jovanniluna@pursuit.org;jovannil94@gmail.com')}>Email: jovanniluna@pursuit.org</button>
        </div>
    )
}
