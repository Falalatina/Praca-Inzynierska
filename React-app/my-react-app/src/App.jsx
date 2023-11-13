import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import AdminPage from "./pages/AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
