import React from "react";
import hamburgerMenu from "../../assets/icons/hamburger-menu.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <img className="hamburger-menu" src={hamburgerMenu} />
      </div>
      <div className="middle-section">
        <div>
          <label className="selector">
            <select>
              <option>Home</option>
              <option>Educational institution</option>
              <option>Undertaking</option>
              <option>Personal</option>
            </select>
          </label>
        </div>

        <button>FaQ</button>
      </div>
      <div className="right-section"></div>
    </header>
  );
};

export default Header;
