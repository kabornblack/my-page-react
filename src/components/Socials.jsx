import React from "react";
import { Link } from "react-router-dom";

function Socials() {
  return (
    <div className="links">
      <div className="frontview">
        <ul className="wrapper">
          <Link
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
                <i className="fab fa-linkedin"></i>
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
          <Link to="/youtube">
            <li className="icon youtube">
              <span className="tooltip">Youtube</span>
              <span>
                <i className="fab fa-youtube"></i>
              </span>
            </li>
          </Link>
          <Link to="/portfolio">
            <li className="icon portfolio">
              <span className="tooltip">Portfolio</span>
              <span>
                <i className="fa-solid fa-briefcase"></i>
              </span>
            </li>
          </Link>
          <Link to="/contact">
            <li className="icon contact">
              <span className="tooltip">contact</span>
              <span>
                <i className="fa-regular fa-address-book"></i>
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Socials;
