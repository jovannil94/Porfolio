import React, { useEffect } from 'react';
import "../css/Contact.css";
import { Form } from '../helper/Form';
import pdf from "../documents/Resume_JovanniLuna.pdf";
import Aos from "aos";
import "aos/dist/aos.css";

export const Contact = ({ contactSection }) => {

    useEffect(() => {
        Aos.init({duration:1500});
      }, [])

    return (
        <div className="contactContainer" ref={contactSection}>
            <h1 data-aos="fade-down" className="contactTitle">Contact</h1>
            <div className="contactContext">
                <div data-aos="fade-right" className="contactLeft">
                    <h1 className="contactFormTitle">More Info</h1>
                    <div className="contactButtonContainer">
                        <a className="contactResumePdf" href={pdf} rel="noopener noreferrer" target="_blank">
                            <button className="contactResumeButton" label="Resume"><span><i className="contactResume fas fa-file-alt"/></span> Resume</button>   
                        </a>
                        <button className="contactGitButton" onClick={()=>window.open('https://github.com/jovannil94')}><span><i className="contactGit fab fa-github-square"/> jovannil94</span></button>
                        <button className="contactLinkButton" onClick={()=>window.open('https://www.linkedin.com/in/jovanniluna')}><span><i className="contactLink fab fa-linkedin"/></span> jovanniluna</button>
                        <button className="contactMailButton" onClick={()=>window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jovanniluna@pursuit.org;jovannil94@gmail.com')}><span><i className="contactMail fas fa-envelope-square"/></span> jovanniluna@pursuit.org</button>
                    </div>
                </div>
                <div data-aos="fade-left" className="contactRight">
                    <h1 className="contactFormTitle">Want to message me or have a question?</h1>
                    <Form/>
                </div>
            </div>
            <p><i className="nameBottom">Jovanni Luna</i> <i className="copyBottom">© 2020</i></p>
        </div>
    )
}
