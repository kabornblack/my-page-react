import React from "react";
import Avatar from "@mui/material/Avatar";

function LetterAvatars({ color, letter }) {
  return (
    <div className="letter-div">
      <Avatar sx={color}>{letter}</Avatar>
    </div>
  );
}

export default LetterAvatars;
