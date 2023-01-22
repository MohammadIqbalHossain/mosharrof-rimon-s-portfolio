import React, { useState } from 'react'
import './Contact.scss';
import emailjs from 'emailjs-com';

function Contact() {

    const [emailSent, setEmailSent] = useState(false);

    function sendEmail(e) {
       

        emailjs.sendForm('service_77qgkae', 'template_ipjmprs', e.target, 'ev44dS__JGJuVIlEh')
            .then((result) => {
                if (result.status === 200) {
                    setEmailSent(true);
                }
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    }

    function clearMessage(e) {
        if (e.type === "click") {
            setEmailSent(false);
        }
    }

    return (
        <section className="get-in-touch">
            <h1 className="title">Get in touch</h1>
            <form className="contact-form row" onSubmit={sendEmail}>
                <div className="form-field col x-50">
                    <input id="name" name="user_name" className="input-text js-input" type="text" required />
                    <label className="label" htmlFor="name">Name</label>
                </div>
                <div className="form-field col x-50">
                    <input id="email" name="user_email" className="input-text js-input" type="email" required />
                    <label className="label" htmlFor="email">E-mail</label>
                </div>
                <div className="form-field col x-100">
                    <textarea id="message" name="message" className="input-text js-input" required />
                    <label className="label" htmlFor="message">Message</label>
                </div>
                <div className="form-field col x-100 align-center">
                    <input className="submit-btn" type="submit" value="Submit" />
                </div>
                {emailSent ? <div className="email-sent-message" >
                    Email sent successfully! <button onClick={clearMessage}>Clear</button>
                </div> : ""}
            </form>
        </section>
    )
}

export default Contact;





