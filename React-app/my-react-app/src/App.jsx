import "./App.css";
import UserList from "./modules/UserList";
import Header from "./modules/HeaderMod";
import Sidebar from "./modules/SidebarMod";
import Graphic from "./modules/Graphic/Graphic";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="container">
      <ChakraProvider>
        <Header />
        <Sidebar />
        <Graphic />
        <UserList />
      </ChakraProvider>
    </div>
  );
}

export default App;
