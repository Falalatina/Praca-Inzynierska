import React from "react";
import hamburgerMenu from "../../assets/icons/hamburger-menu.svg";
import "./Header.css";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <img className="hamburger-menu" src={hamburgerMenu} />
      </div>
      <div className="middle-section">
        <div>
          <Menu className="selector">
            <MenuButton>Pages</MenuButton>
            <MenuList>
              <MenuItem>Educational institution</MenuItem>
              <MenuItem>Undertaking</MenuItem>
              <MenuItem>Personal</MenuItem>
            </MenuList>
          </Menu>
        </div>

        <button>FaQ</button>
      </div>
      <div className="right-section"></div>
    </header>
  );
};

export default Header;
