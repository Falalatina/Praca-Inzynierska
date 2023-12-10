import React from "react";
import "./LogNav.css";
import { SettingsIcon, AddIcon } from "@chakra-ui/icons";

const LogNav = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-link">
          <div>
            {" "}
            <SettingsIcon />
          </div>
          <div> Add Team</div>
        </div>
      </div>
      <div className="mobile-add">
        <AddIcon />
      </div>
    </>
  );
};

export default LogNav;
