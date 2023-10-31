import React from "react";
import "../style/main.css";

const Filedetails = () => {
  return (
    <div className="details-top">
      <div className="details-upload">
        <div className="detail-icon">
          <span class="material-symbols-outlined">folder</span>
        </div>

        <div className="detail-number">100</div>

        <div className="detail-name">Uploaded Files</div>
      </div>

      <div className="details-transcribed">
        <div className="detail-icon">
          <span class="material-symbols-outlined">transcribe</span>
        </div>

        <div className="detail-number">50</div>

        <div className="detail-name">Transcribed Files</div>
      </div>

      <div className="details-saved">
        <div className="detail-icon">
          <span class="material-symbols-outlined">bookmark</span>
        </div>

        <div className="detail-number">20</div>

        <div className="detail-name">Saved Files</div>
      </div>
    </div>
  );
};

export default Filedetails;
