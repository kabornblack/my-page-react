import React from "react";

function Secrets() {
    return <>
        <div className="portfolio-card-container">
            <div className="portfolio-card">
              <div className="portfolio-card-side-front"><img
                  src="../profilePic/secrets.png"
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
    </>
}

export default Secrets;