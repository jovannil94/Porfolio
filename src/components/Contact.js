import React from 'react';
import "../css/Contact.css";
import { Form } from '../helper/Form';

export const Contact = ({ contactSection }) => {
    return (
        <div className="contactContainer" ref={contactSection}>
            <h1 className="contactTitle">Contact</h1>
            <div className="contactContext">
                <div className="contactLeft">
                    <div className="contactButtonContainer">
                        <button className="contactResumeButton" ><span><i class="contactResume fas fa-file-alt"/></span> Resume</button>
                        <button className="contactGitButton" onClick={()=>window.open('https://github.com/jovannil94')}><span><i class="contactGit fab fa-github-square"/> jovannil94</span></button>
                        <button className="contactLinkButton" onClick={()=>window.open('https://www.linkedin.com/in/jovanniluna')}><span><i class="contactLink fab fa-linkedin"/></span> jovanniluna</button>
                        <button className="contactMailButton" onClick={()=>window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jovanniluna@pursuit.org;jovannil94@gmail.com')}><span><i class="contactMail fas fa-envelope-square"/></span> jovanniluna@pursuit.org</button>
                    </div>
                </div>
                <div className="contactRight">
                    <Form/>
                </div>
            </div>
        </div>
    )
}
