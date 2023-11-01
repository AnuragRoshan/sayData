import React, { useState, useEffect } from "react";
import "../style/main.css";

const Filedetails = () => {
  const [uploadedFiles, setUploadedFiles] = useState(0);
  const [transcribedFiles, setTranscribedFiles] = useState(0);
  const [savedFiles, setSavedFiles] = useState(0);

  useEffect(() => {
    // Define a function to increment numbers with animation
    const incrementWithAnimation = (targetValue, setterFunction) => {
      let startValue = 0;
      // const animationInterval = 100; // Animation interval in milliseconds

      const increment = () => {
        if (startValue < targetValue) {
          setterFunction(startValue);
          startValue += 1;
          requestAnimationFrame(increment);
        } else {
          setterFunction(targetValue);
        }
      };

      increment();
    };

    incrementWithAnimation(100, setUploadedFiles); // Animate the Uploaded Files number
    incrementWithAnimation(50, setTranscribedFiles); // Animate the Transcribed Files number
    incrementWithAnimation(20, setSavedFiles); // Animate the Saved Files number
  }, []);

  return (
    <div className="details-top">
      <div className="details-upload">
        <div className="detail-icon">
          <span className="material-symbols-outlined">folder</span>
        </div>
        <div className="detail-number">{uploadedFiles}</div>
        <div className="detail-name">Uploaded Files</div>
      </div>

      <div className="details-transcribed">
        <div className="detail-icon">
          <span className="material-symbols-outlined">transcribe</span>
        </div>
        <div className="detail-number">{transcribedFiles}</div>
        <div className="detail-name">Transcribed Files</div>
      </div>

      <div className="details-saved">
        <div className="detail-icon">
          <span className="material-symbols-outlined">bookmark</span>
        </div>
        <div className="detail-number">{savedFiles}</div>
        <div className="detail-name">Saved Files</div>
      </div>
    </div>
  );
};

export default Filedetails;
