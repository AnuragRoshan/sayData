import React from "react";
import Navbar from "./Navbar";
import InsertFile from "./InsertFile";
import Filedetails from "./Filedetails";
import Recentfiles from "./Recentfiles";

const MainArea = () => {
  return (
    <div style={{ width: "100%" }}>
      <InsertFile />
      <Filedetails />
      <Recentfiles />
    </div>
  );
};

export default MainArea;
