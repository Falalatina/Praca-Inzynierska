import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { store } from "./store";

import { Provider } from "react-redux";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "./themes";
import { ThemeProvider } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
