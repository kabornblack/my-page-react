import React from "react";
import Footer from "../components/Footer";
// import Secrets from "..components/Secrets";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="static-sidebar">
        <figure className="header-image">
          <img
            src="./profilePic/profile.jpg"
            alt="page image"
            className="image"
          />
          <figcaption className="img-caption">Kabiru Shaibu</figcaption>
        </figure>
        <div className="static-content">
          <ul className="ul-list tech-level">
            <li class="li-items">
              <p class="li-link">
                Front-End
              </p>
            </li>
            <li class="li-items">
              <p class="li-link">
                Back-End
              </p>
            </li>
            <li class="li-items">
              <p class="li-link">
                Full-Stack
              </p>
            </li>
            <li class="li-items">
              <p class="li-link">
                Web 3.0
              </p>
              {/* a href="#popup-front-end" */}
            </li>
          </ul>
        </div>
        <div className="popup" id="popup-front-end">
          {/* <a href="#portfolio" className="popup-close">
            &times;
          </a> */}
          <div className="popup-content">
            <div className="popup-front-end">
              <h3>Front-End</h3>

              {/* <p className="end-p">
                Client-side elements, user-friendly, layout, design, and
                functionality.
              </p> */}
            </div>
          </div>
        </div>
        <div className="popup" id="popup-back-end">
          {/* <a href="#portfolio" className="popup-close">
            &times;
          </a> */}
          <div className="popup-content">
            <div className="popup-back-end">
              <h3>Back-End</h3>

              {/* <p className="end-p">
                Application's functionality, data integrity, security, and
                efficient operations.
              </p> */}
            </div>
          </div>
        </div>
        <div className="popup" id="popup-full-stack">
          {/* <a href="#portfolio" className="popup-close">
            &times;
          </a> */}
          <div className="popup-content">
            <div className="popup-full-stack">
              <h3>Full-Stack</h3>

              {/* <p className="end-p">
                Versatile and well-rounded in web development.
              </p> */}
            </div>
          </div>
        </div>
        <div className="popup" id="popup-web-3">
          {/* <a href="#portfolio" className="popup-close">
            &times;
          </a> */}
          <div className="popup-content">
            <div className="popup-web-3">
              <h3>Web-3.0</h3>

              {/* <p className="end-p">
                Web 3.0, user-centric web, blockchain, decentralized
                applications (DApps), and smart contracts, with a focus on
                enhancing privacy, security, and user empowerment.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="scrollable-content">
        <div className="portfolio-heading">
          <h1 className="portfolio-title">Portfolio</h1>
        </div>
        <section className="portfolio-section">
          <div className="portfolio-card-container">
            <div className="portfolio-card">
              <div className="portfolio-card-side-front"><img
                  src="./profilePic/secrets.png"
                  alt="secret project image"
                  className="natour-p"
                /></div>
              <div className="portfolio-card-side-back">
                <div className="card-back-details">
                  <h1 className="project-name">secrets</h1>
                  <h3 className="stack">Back-end</h3>
                  <p className="p">
                  A web application that allows users to securely authenticate, register, and access a community-driven collection of secrets and anonymous confessions. <br/><span className="p1">NODE/EXPRESS/EJS/PASSPORT <br /> MONGODB</span>
                  </p>
                  <button className="btn go-live">Go live</button>
                  <a href="" className="learn-more" onClick={() => window.open("https://github.com/kabornblack/Secrets", "_blank")}>
                    Learn more
                  </a>
                
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-card-container">
            <div className="portfolio-card">
              <div className="portfolio-card-side-front"><img
                  src="./profilePic/uptodate.png"
                  alt="page image"
                  className="natour-p"
                /></div>
              <div className="portfolio-card-side-back">
                <div className="card-back-details">
                  <h1 className="project-name">Upto-date</h1>
                  <h3 className="stack">Full-Stack</h3>
                  <p className="p">
                    A web App where you can share facts and other users can agree or dispute it by clicking on Interesting, Mindblowing or Disputed. <br /><span className="p1">HTML/CSS/JAVASCRIPT/REACT <br /> SUPABSE</span>
                  </p>
  
                  <button className="btn btn-live" onClick={() => window.open("https://uptodate-kabbi.netlify.app/", "_blank")}>
                     Go live
                  </button>
                  <a href="" className="learn-more" onClick={() => window.open("https://github.com/kabornblack/Upto-date", "_blank")}>
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-card-container">
            <div className="portfolio-card">
              <div className="portfolio-card-side-front">
                <img
                  src="./profilePic/natour.png"
                  alt="page image"
                  className="natour-p"
                />
              </div>
              <div className="portfolio-card-side-back">
                <div className="card-back-details">
                  <h1 className="project-name">Natours project</h1>
                  <h3 className="stack">Front-end</h3>
                  <p className="p">
                    A tour to nature, a project that helps with the functions
                    and traditional ways of working with <br/><span className="p1">HTML/CSS/SASS</span>
                  </p>
                  <button className="btn go-live">Go live</button>
                  <a href="" className="learn-more" onClick={() => window.open("https://github.com/kabornblack/nature-css", "_blank")}>
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="popup-project" id="popup-natour"> */}
            {/* <a href="#portfolio" className="popup-project-close">
              &times;
            </a> */}
            {/* <div className="popup-project-content">
              <div className="popup-natour"> */}
                {/* <div className="natour-left"> */}
                  {/* <img
                    src="./profilePic/natour1.png"
                    alt="page image"
                    className="natour-img-code"
                  /> */}
                  {/* <img
                    src="./profilePic/natour2.png"
                    alt="page image"
                    className="natour-img-code"
                  /> */}
                {/* </div>
                <div className="natour-middle"> */}
                  {/* <img
                    src="./profilePic/natour3.png"
                    alt="page image"
                    className="natour-img-code"
                  /> */}
                  {/* <img
                    src="./profilePic/natour4.png"
                    alt="page image"
                    className="natour-img-code"
                  /> */}
                {/* </div>
                <div className="natour-right">
                  <h3 className="project-heading">
                    NATOUR &rarr; Exciting Tours for Adventurous People
                  </h3> */}
                  {/* <p className="project-paragraph">
                    Natours is a modern and visually stunning website dedicated
                    to offering exciting tours for adventurous individuals. This
                    project is built with a focus on providing a seamless user
                    experience, captivating design, and engaging content. From
                    the sleek navigation to the immersive tour sections, Natours
                    invites users to explore the beauty of the outdoors.
                  </p>
                  <h5 className="project-tech">
                    FRONT-END &rarr; HTML &ndash; SASS &ndash; CSS
                  </h5>
                  <p className="project-paragraph1">
                    METHODOLOGY &rarr; BEM: for promoting a clear and scalable
                    structure for easy SASS nesting and CSS classes.
                  </p>
                  <p className="project-paragraph1">
                    RESPONSIVE DESIGN &rarr; Flexbox and Grid: crafted to be
                    fully responsive, ensuring an optimal viewing experience
                    across various devices.
                  </p> */}
                {/* </div> */}
              {/* </div>
            </div>
          </div> */}

          <div className="portfolio-card-container">
            <div className="portfolio-card">
              <div className="portfolio-card-side-front">LOADING...</div>
              <div className="portfolio-card-side-back">
                <div className="card-back-details">
                  <h1 className="project-name">Natours project</h1>
                  <h3 className="stack">Full-Stack</h3>
                  <p className="p">
                    A tour to nature, a project that helps with the functions
                    and traditional ways of working with <br/><span className="p1">HTML/CSS/SASS</span>
                  </p>
                  <button className="btn go-live">Go live</button>
                  <button href="popup-natour" className="btn learn-more">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-card-container">
            <div className="portfolio-card">
              <div className="portfolio-card-side-front">LOADING...</div>
              <div className="portfolio-card-side-back">
                <div className="card-back-details">
                  <h1 className="project-name">Natours project</h1>
                  <h3 className="stack">Full-Stack</h3>
                  <p className="p">
                    A tour to nature, a project that helps with the functions
                    and traditional ways of working with <br/><span className="p1">HTML/CSS/SASS</span>
                  </p>
                  <button className="btn go-live">Go live</button>
                  <button href="popup-natour" className="btn learn-more">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-card-container">
            <div className="portfolio-card">
              <div className="portfolio-card-side-front">LOADING...</div>
              <div className="portfolio-card-side-back">
                <div className="card-back-details">
                  <h1 className="project-name">Natours project</h1>
                  <h3 className="stack">Full-Stack</h3>
                  <p className="p">
                    A tour to nature, a project that helps with the functions
                    and traditional ways of working with <br/><span className="p1">HTML/CSS/SASS</span>
                  </p>
                  <button className="btn go-live">Go live</button>
                  <button href="popup-natour" className="btn learn-more">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-card-container">
            <div className="portfolio-card">
              <div className="portfolio-card-side-front">LOADING...</div>
              <div className="portfolio-card-side-back">
                <div className="card-back-details">
                  <h1 className="project-name">Natours project</h1>
                  <h3 className="stack">Full-Stack</h3>
                  <p className="p">
                    A tour to nature, a project that helps with the functions
                    and traditional ways of working with <br/><span className="p1">HTML/CSS/SASS</span>
                  </p>
                  <button className="btn go-live">Go live</button>
                  <button href="popup-natour" className="btn learn-more">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <Secrets /> */}
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;
