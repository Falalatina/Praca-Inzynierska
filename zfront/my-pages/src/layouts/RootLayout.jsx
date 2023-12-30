import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header className="header">
        <div className="left-section">
          <h4>Jobagenerate</h4>
        </div>
        <div className="middle-section"></div>
        <div className="right-section">
          <NavLink to="/">Home</NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
