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
              <option selected value="1">
                Home
              </option>
              <option value="2">Educational institution</option>
              <option value="3">Undertaking</option>
              <option value="4">Personal</option>
            </select>
          </label>
        </div>
        <button>Filter</button>
        <button>FaQ</button>
      </div>
      <div className="right-section"></div>
    </header>
  );
};

export default Header;
