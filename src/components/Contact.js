import React from 'react';
import "../css/Contact.css";
import { Form } from '../helper/Form';
import pdf from "../documents/Resume_JovanniLuna.pdf";

export const Contact = ({ contactSection }) => {
    return (
        <div className="contactContainer" ref={contactSection}>
            <h1 className="contactTitle">Contact</h1>
            <div className="contactContext">
                <div className="contactLeft">
                    <h1 className="contactFormTitle">More Info</h1>
                    <div className="contactButtonContainer">
                        <a className="contactResumePdf" href={pdf} without rel="noopener noreferrer" target="_blank">
                            <button className="contactResumeButton" trailingIcon="picture_as_pdf" label="Resume"><span><i class="contactResume fas fa-file-alt"/></span> Resume</button>   
                        </a>
                        <button className="contactGitButton" onClick={()=>window.open('https://github.com/jovannil94')}><span><i class="contactGit fab fa-github-square"/> jovannil94</span></button>
                        <button className="contactLinkButton" onClick={()=>window.open('https://www.linkedin.com/in/jovanniluna')}><span><i class="contactLink fab fa-linkedin"/></span> jovanniluna</button>
                        <button className="contactMailButton" onClick={()=>window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jovanniluna@pursuit.org;jovannil94@gmail.com')}><span><i class="contactMail fas fa-envelope-square"/></span> jovanniluna@pursuit.org</button>
                    </div>
                </div>
                <div className="contactRight">
                    <h1 className="contactFormTitle">Want to message me or have a question?</h1>
                    <Form/>
                </div>
            </div>
            <p><i className="nameBottom">Jovanni Luna</i> <i className="copyBottom">©2020</i></p>
        </div>
    )
}
