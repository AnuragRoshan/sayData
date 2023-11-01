import React from "react";
import menuitem from "../data/menuItem";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <div className="logoText">Verbalyze</div>
        </div>
        <div className="sidebar-body">
          <div className="sidebar-inner-body">
            {menuitem.map((item, index) => (
              <div className="menu-item">
                <div className="sideMenu-item" key={index}>
                  <div>
                    <i class="material-symbols-outlined">{item.icon}</i>
                  </div>
                  <div style={{ fontWeight: "600" }}>{item.item}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-bottom-logo">
          <span
            class="material-symbols-outlined"
            style={{ fontSize: "2.2rem" }}
          >
            rocket_launch
          </span>
        </div>
        <div className="sidebar-bottom-title">Upgrade Account</div>
        <div className="sidebar-bottom-description">
          Access To Unlimited Transcription
        </div>
        <div className="sidebar-bottom-upgrade">Upgrade</div>
      </div>
    </div>
  );
};

export default Sidebar;
