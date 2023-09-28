import { useState } from "react";
import UserList from "./modules/UserList";
import Header from "./modules/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <UserList />
    </div>
  );
}

export default App;
