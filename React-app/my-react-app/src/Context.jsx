import React, { createContext, useContext, useState } from "react";
import { data } from "./modules/UserList/data";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [people, setPeople] = useState(data);
  const [user, setUser] = useState({
    name: "",
    stage: "",
    shifts: "",
  });

  return (
    <GlobalContext.Provider value={{ user, setUser, people, setPeople }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
