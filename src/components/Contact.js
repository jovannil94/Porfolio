import React from 'react';
import "../css/Contact.css";

export const Contact = ({ contactSection }) => {
    return (
        <div className="contactContainer">
            <h1 className="contactTitle">Contact</h1>
            <div className="contactButtonContainer">
                <button className="contactButton" ref={contactSection}><i class="fas fa-file-alt"/> Resume</button>
                <button className="contactButton" onClick={()=>window.open('https://github.com/jovannil94')}><i class="fab fa-github-square"/> jovannil94</button>
                <button className="contactButton" onClick={()=>window.open('https://www.linkedin.com/in/jovanniluna')}><i class="fab fa-linkedin"/> jovanniluna</button>
                <button className="contactButton" onClick={()=>window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jovanniluna@pursuit.org;jovannil94@gmail.com')}><i class="fas fa-envelope-square"/> jovanniluna@pursuit.org</button>
            </div>
        </div>
    )
}
