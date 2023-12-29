import React, { useEffect, useState } from "react";

function Content() {
  const [advice, setAdvice] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  async function getAdvice() {
    const res = await fetch("https:api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }
  useEffect(() => {
    getAdvice();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <div class="image-container">
        <img
          src="profilePic/profile.jpg"
          alt="profile pic"
          width="200"
          height="250"
        />
      </div>

      <p>
        <strong>{time}</strong>
      </p>
      <h1 onChange={getAdvice}>{advice}</h1>
    </div>
  );
}

export default Content;

//  To split screen and make half static and halk movable

function SplitLayout() {
  return (
    <div className="split-layout">
      <div className="fixed-half">{/* Content for the fixed half */}</div>
      <div className="scrollable-half">
        {/* Content for the scrollable half */}
      </div>
    </div>
  );
}


/* Reset some default styles to ensure consistency */
body, html {
  margin: 0;
  padding: 0;
}

/* Set the overall container to a flex display */
body {
  display: flex;
  height: 100vh; /* 100% of viewport height */
  overflow: hidden; /* Hide any overflow on the body */
}

/* Style for the fixed half */
.fixed-half {
  flex: 1; /* Take up half of the available space */
  background-color: #f0f0f0; /* Optional: Add a background color for visual separation */
  overflow: hidden; /* Hide any overflow in the fixed half */
}

/* Style for the scrollable half */
.scrollable-half {
  flex: 1; /* Take up half of the available space */
  overflow-y: auto; /* Enable vertical scrolling as needed */
  background-color: #ffffff; /* Optional: Add a background color for visual separation */
}
