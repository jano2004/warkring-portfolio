import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

function ContactPage() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service id",
                "template id",
                form.current,
                "user id"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Nachricht</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
}

export default ContactPage;