import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { contact } from "./letters";
import Stack from "@mui/material/Stack";
import LetterAvatars from "./LetterAvatars";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

function ContactMe() {
  return (
    <div className="flex flex-col relative text-center px-10 justify-evenly max-w-3xl mx-auto items-center ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Stack direction="row" spacing={0.2} className="animate-bounce">
          {contact.map((letter) => (
            <LetterAvatars
              key={letter.id}
              letter={letter.alphabet}
              color={letter.color}
            />
          ))}
        </Stack>
      </motion.div>

      <div>
        <h4 className="mt-12 mb-4 text-1xl text-gray-500 font-serif">
          If you think i have what you need, lets talk
        </h4>
      </div>
      <div className="flex-row">
        <div className="flex justify-center pb-7 space-x-2 text-gray-500 font-serif">
          <MapPinIcon className="h-4 w-4" />
          <p className="contact-p"> Tallinn Estonia</p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default ContactMe;
