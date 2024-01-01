import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // Dodaj styl globalny tutaj
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
