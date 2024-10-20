import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Socials() {
  return (
    <div className="">
      <div className="frontview">
        <motion.ul
          initial={{
            x: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: [0.1, 1.7, 1, 1.17, 1, 1.09, 1, 1.05, 1, 1.02, 1],
          }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 4, ease: [0.25, 0.1, 0.25, 1] }}
          className="wrapper"
        >
          <Link
            // className="animate-bounce"
            to="https://www.linkedin.com/in/kabiru-shaibu-a81082164/"
            target="_blank"
          >
            <li className="icon linkedin">
              <a
                href="https://www.linkedin.com/in/kabiru-shaibu-a81082164/"
                target="_blank"
                rel="noopener noreferrer"
              >
                I
              </a>
              <span className="tooltip">Linkedin</span>
              <span>
                <i className="fab fa-linkedin "></i>
              </span>
            </li>
          </Link>
          <Link to="https://github.com/kabornblack" target="_blank">
            <li className="icon github">
              <a
                href="https://github.com/kabornblack"
                target="_blank"
                rel="noopener noreferrer"
              >
                g
              </a>
              <span className="tooltip">Github</span>
              <span>
                <i className="fab fa-github"></i>
              </span>
            </li>
          </Link>

          <Link to="/portfolio">
            <li className="icon portfolio ">
              <span className="tooltip">Portfolio</span>
              <span>
                <i className="fa-solid fa-briefcase"></i>
              </span>
            </li>
          </Link>
          <Link to="/contact">
            <li className="icon contact">
              <span className="tooltip">Details</span>
              <span>
                <i className="fa-regular fa-address-book"></i>
              </span>
            </li>
          </Link>
        </motion.ul>
      </div>
    </div>
  );
}

export default Socials;
