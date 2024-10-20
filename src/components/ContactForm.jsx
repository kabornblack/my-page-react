import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
      <motion.form
        initial={{ x: 100, scale: 0.1, opacity: 0 }}
        whileInView={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-2 w-full max-w-2xl mx-auto text-gray-500 font-serif text-sm"
      >
        <div className="flex space-x-2">
          <input
            className="w-full p-2 border border-gray-700 rounded-md outline-none text-slate-500 placeholder-gray-600"
            id="input1"
            name="input1"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="w-full p-2 border border-gray-700 rounded-md outline-none text-slate-500 placeholder-gray-600"
            id="input2"
            name="input2"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="w-full p-2 border border-gray-700 rounded-md outline-none text-slate-500 placeholder-gray-600"
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="w-full p-2 h-28 border border-gray-700 rounded-md outline-none text-slate-500 placeholder-gray-600"
            id="message"
            name="message"
            placeholder="Message here.."
            required
          />
        </div>
        <div className="form-group pt-8">
          <button
            className="px-6 py-3 top-6  border border-gray-700 rounded-full uppercase text-xs tracking-widest text-gray-600 transition-all
    hover:border hover:bg-gray-800 hover:text-gray-400 active:cursor-wait mb-20"
            type="submit"
          >
            Submit
          </button>
        </div>
      </motion.form>
    </div>
  );
}

export default ContactForm;
