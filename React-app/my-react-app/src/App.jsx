import { useState } from "react";
import PplList from "./modules/ppl-list";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <PplList />
    </div>
  );
}

export default App;
