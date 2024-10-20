import React from "react";
import Socials from "./Socials";

function Home() {
  return (
    <header>
      <div className="bg-transparent h-100 w-100 ">
        <img
          src="/profilePic/moon1.jpg"
          alt="moon"
          style={{
            width: "20%",
            height: "auto",
            position: "absolute",
            top: "0",
            right: "0",
          }}
        />
      </div>
      <span>
        <Socials />
      </span>
    </header>
  );
}

export default Home;
