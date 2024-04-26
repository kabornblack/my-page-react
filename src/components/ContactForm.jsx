import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2jvy9v2", "template_6y15vlf", form.current, {
        publicKey: "u9IjaIdCyf3hGYAmK",
      })
      .then(
        () => {
          alert("Congratulations! Email sent successfully.");
        },
        (error) => {
          alert("Oops! Something went wrong. Please try again.");
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <input
            className="input"
            id="input1"
            name="input1"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="input"
            id="input2"
            name="input2"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="input"
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="textarea"
            id="message"
            name="message"
            placeholder="Message here.."
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
