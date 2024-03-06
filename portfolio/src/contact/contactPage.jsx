import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import './contactPage.css';

function ContactPage() {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...FormData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(e);
        setFormData({
            user_name: '',
            user_email: '',
            message: ''
        });
    };


    return (
        <form ref={form} onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="user_name" value={formData.user_name} onChange={handleInputChange} />
            <label>Email</label>
            <input type="email" name="user_email" value={formData.user_email} onChange={handleInputChange} />
            <label>Nachricht</label>
            <textarea name="message" value={formData.message} onChange={handleInputChange} />
            <input type="submit" value="Send" />
        </form>
    );
}

export default ContactPage;