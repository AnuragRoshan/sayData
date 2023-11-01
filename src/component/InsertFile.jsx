import React, { useState } from "react";
import "../style/main.css";
import Modal from "react-modal";
import axios from "axios";
import { api_key } from "../data/revai";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Set the overlay background color with transparency
  },
};

const InsertFile = ({ name }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [transcript, setTranscript] = useState(""); // Store the transcript result
  const [filesze, setfilesze] = useState(0);
  const [externalLink, setExternalLink] = useState(""); // Store the URL input

  // Event handler to handle the change in the selected option
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Event handler for file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setExternalLink(""); // Reset the URL input

    if (file) {
      // Get the size of the file
      const fileSize = file.size;

      // Display the file size
      console.log("File Size: " + fileSize + " bytes");

      // You can also convert the size to a more human-readable format (e.g., kilobytes or megabytes)
      const fileSizeKB = (fileSize / 1024).toFixed(2); // Convert bytes to kilobytes
      const fileSizeMB = (fileSizeKB / 1024).toFixed(2); // Convert kilobytes to megabytes

      console.log("File Size (KB): " + fileSizeKB + " KB");
      console.log("File Size (MB): " + fileSizeMB + " MB");
      setfilesze(fileSizeMB);
    }
  };

  const transcribeFile = async () => {
    if (selectedFile) {
      // Your transcription logic here
      // ...
    } else if (externalLink) {
      // Your transcription logic for URL here
      // ...
    } else {
      // Handle the case where no file or URL has been selected
      console.log("Please select a file to transcribe or enter a URL.");
    }
  };

  return (
    <div className="insert-file-container">
      <div className="left-content">
        <div className="welcome">{`Welcome Anurag !`} </div>
        <div className="insert-text">
          Insert your video and audio to convert to text
        </div>
      </div>
      <div className="right-content">
        <button className="insert-button" onClick={openModal}>
          Transcribe File
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-top">
            <div className="modal-heading">
              <div>Transcribe File</div>
              <button className="close-button" onClick={closeModal}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="modal-drop">
              <div
                style={{
                  fontSize: "14px",
                  paddingBottom: "10px",
                  fontWeight: "600",
                }}
              >
                Transcription Language
              </div>
              <div>
                <div>
                  <select
                    id="dropdown"
                    value={selectedOption}
                    className="modal-dropdown"
                    onChange={handleOptionChange}
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="German">German </option>
                    <option value="French">French</option>
                  </select>
                </div>
                <div className="modal-upload">
                  <label>
                    <div className="modal-upload-ico">
                      <span className="material-symbols-outlined icons">
                        upload_file
                      </span>
                    </div>
                    <input
                      type="file"
                      accept="audio/*, video/*"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </label>
                  {selectedFile ? (
                    <div className="modal-desc">
                      {selectedFile.name.length > 30
                        ? selectedFile.name.slice(0, 30) + "..."
                        : selectedFile.name}{" "}
                      <br /> {filesze} MB
                    </div>
                  ) : (
                    <div className="modal-desc">Click To Upload</div>
                  )}
                  <div className="modal-size-limit-message">
                    The maximum file size is 1GB for audio and 10 GB for videos
                    <br />
                    Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb, flv,
                    m4a, mov, wmv, wma
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      paddingBlock: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Import From Link
                  </div>
                  <input
                    className="modal-input-file"
                    type="url"
                    value={externalLink}
                    onChange={(e) => setExternalLink(e.target.value)}
                    placeholder="Paste a Google Drive or YouTube URL"
                    disabled={!!selectedFile} // Disable the input if a file is selected
                  />
                  <button
                    className="button-transcribed insert-button"
                    style={{ width: "104%", marginBlockStart: "18px" }}
                    onClick={transcribeFile}
                  >
                    Transcribe File
                  </button>
                </div>
              </div>
              {transcript && (
                <div>
                  <div>Transcript: {transcript}</div>
                </div>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default InsertFile;
