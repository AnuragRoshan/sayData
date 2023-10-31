import React from "react";
import "../style/main.css";
const InsertFile = ({ name }) => {
  return (
    <div className="insert-file-container">
      <div className="left-content">
        <div className="welcome">{`Welcome Anurag`}</div>
        <div className="insert-text">
          Insert your video and audio to convert to text
        </div>
      </div>
      <div className="right-content">
        <button className="insert-button">Transcribe File</button>
      </div>
    </div>
  );
};

export default InsertFile;
