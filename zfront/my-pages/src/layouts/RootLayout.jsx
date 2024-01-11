import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";

import { useColorMode, Button, Switch } from "@chakra-ui/react";

const RootLayout = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <div className="root-layout">
      <header className="header">
        <div className="left-section">
          <h4>Jobagenerate</h4>
        </div>
        <div className="middle-section"></div>
        <div className="right-section">
          <NavLink to="/">
            <Button variant="ghost" color={"black"}>
              Home
            </Button>
          </NavLink>
          <NavLink to="user/">
            <Button variant="ghost" color={"black"}>
              Users
            </Button>
          </NavLink>
          <Button
            ml={5}
            variant="ghost"
            color="black"
            onClick={toggleColorMode}
          >
            Dark Mode
          </Button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{ marginBottom: "10px" }}>
        Aplikacja do tworzenia harmonogramów z wykorzystaniem AI
      </footer>
    </div>
  );
};

export default RootLayout;
