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
          src="pics/profile.jpg"
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
