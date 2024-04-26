import React, { useRef, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { contact } from "./letters";
import Stack from "@mui/material/Stack";
import LetterAvatars from "./LetterAvatars";
import ContactForm from "./ContactForm";

function ContactMe() {
  return (
    <div className="contact-div">
      <Stack direction="row" spacing={2}>
        {contact.map((letter) => (
          <LetterAvatars
            key={letter.id}
            letter={letter.alphabet}
            color={letter.color}
          />
        ))}
      </Stack>

      <div>
        <h4 className="contact-h4">
          If you think i have what you need, then lets talk
        </h4>
      </div>
      <div className="contact-info-div">
        <div className="contact-icon-div">
          <MapPinIcon className="contact-icon" />
          <p className="contact-p"> Tallinn, Estonia</p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default ContactMe;
