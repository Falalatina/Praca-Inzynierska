import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {},
    },
  },
  colors: {
    light: {
      background: "#ffffff",
      text: "#333333",
    },
    dark: {
      background: "#1a202c",
      text: "#ffffff",
      Headers: "#ffffff",
    },
  },
});

export default theme;
