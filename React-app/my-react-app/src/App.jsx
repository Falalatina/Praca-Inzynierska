import "./App.css";
import UserList from "./modules/UserList";
import Header from "./modules/HeaderMod";

function App() {
  return (
    <div className="container">
      <Header />
      <UserList />
    </div>
  );
}

export default App;
