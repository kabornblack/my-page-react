import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex justify-between p- items-center text-gray-300 px-5 md:px-20 py-10">
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 hover:text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </a>
      </motion.div>

      {/* <div className="headerdiv1">
        <SocialIcon
          url="https://twitter.com/iam_kaborn"
          fgColor="#64748b"
          bgColor="transparent"
          className="hover:text-red"
        />
      </div> */}

      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex items-center bg-transparent space-x-2 "
      >
        <SocialIcon
          href="/contact#contactme"
          class="hover:text-gray-600"
          network="email"
          fgColor="#94a3b8"
          bgColor="transparent"
        />
        <p className="font-mono text-sm uppercase hidden md:inline-flex bg-transparent">
          Get in touch
        </p>
      </motion.div>
    </div>
  );
}

export default Header;
