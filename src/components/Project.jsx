import React from "react";

function Project(props) {
  return (
    <div>
      <div className="portfolio-card-container">
        <div className="portfolio-card">
          <div className="portfolio-card-side-front">
            <img src={props.img} alt="project image" className="natour-p" />
          </div>
          <div className="portfolio-card-side-back">
            <div className="card-back-details">
              <h1 className="project-name">{props.name}</h1>
              <h3 className="stack">{props.stack}</h3>
              <p className="p">
                {props.description} <br />
                <span className="p1">{props.tech}</span>
              </p>
              <button
                href=""
                className="btn learn-more"
                onClick={() => window.open(props.link, "_blank")}
              >
                Learn more
              </button>
              {props.isLive ? (
                <button
                  className="btn btn-live"
                  onClick={() => window.open(props.liveLink, "_blank")}
                >
                  Go live
                </button>
              ) : (
                <button className="not-live">Not live</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
