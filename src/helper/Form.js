import React from 'react';
import "../css/Form.css";

export const Form = () => {
    return (
        <form className="formContainer" action="https://formspree.io/f/meqpevpl" method="POST">
            <label>
                Name:
                <input type="text" name="_replyto"/>
            </label>
            <label>
                Email:
                <input type="text" name="_replyto"/>
            </label>
            <label>
                Message:
                <textarea name="message"></textarea>
            </label>
            <button type="submit">Send</button>
        </form>
    )
}
