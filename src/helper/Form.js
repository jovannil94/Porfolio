import React from 'react';
import "../css/Form.css";

export const Form = () => {
    return (
        <form className="formContainer" action="https://formspree.io/f/meqpevpl" method="POST">
            <input className="inputBox" placeholder="Name" required type="text" name="name"/>
            <input className="inputBox" placeholder="Enter Email" required type="email" name="_replyto"/>
            <textarea className="textBox" placeholder="Your Message" required name="message"></textarea>
            <input className="submitButton" type="submit" value="Send"/>
        </form>
    )
}