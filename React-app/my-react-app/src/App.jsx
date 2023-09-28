import "./App.css";
import UserList from "./modules/UserList";
import Header from "./modules/HeaderMod";
import Sidebar from "./modules/SidebarMod";

function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <UserList />
    </div>
  );
}

export default App;
