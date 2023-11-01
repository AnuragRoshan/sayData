import React from "react";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <div className="nav-top">
      <div className="search-bar">
        <div
          className="nav-search-icon"
          style={{
            color: "grey",
            width: "30px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <span class="material-symbols-outlined">search</span>
        </div>{" "}
        <input type="text" placeholder="Search" />
        {/* Magnifying glass icon */}
      </div>
      <div className="icons">
        <div className="notification-icon">
          <span class="material-symbols-outlined">notifications</span>
        </div>
        <div className="profile-icon">
          <img
            src="https://anuragroshan.github.io/mycv/img/about.png"
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
