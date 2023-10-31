import React, { useState } from "react";
import recentfiles from "../data/recentfiles";

const Recentfiles = () => {
  const [selectedFileIndex, setSelectedFileIndex] = useState(""); // State to store the index of the selected file

  // Function to handle radio button selection
  const handleRadioChange = (index) => {
    setSelectedFileIndex(index);
    console.log(selectedFileIndex);
  };

  return (
    <div className="recent-top">
      <div className="recent-heading">Recent Files</div>
      <div className="recent-line">
        <div className="horizontal-line"></div>
      </div>
      <div className="recent-table-container">
        <table className="recent-files-table">
          <thead>
            <tr>
              <th>Select</th>
              <th>Name</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Created</th>
              <th>Last Updated</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentfiles.map((file, index) => (
              <tr className="recent-file-row" key={index}>
                <td>
                  <input
                    className="checkbox"
                    type="radio"
                    name="fileSelection"
                    checked={file.name === selectedFileIndex}
                    onChange={() => handleRadioChange(file.name)}
                  />
                </td>
                <td className="recent-file-name">{file.name}</td>
                <td>{file.type}</td>
                <td>{file.duration}</td>
                <td>{file.datecreated}</td>
                <td>{file.lastupdated}</td>
                <td>Action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recentfiles;
