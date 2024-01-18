import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: ({ colorMode }) => ({
      body: {
        background: colorMode === "light" ? "#F7FAFC" : "#1a202c",
      },
    }),
  },
  colors: {
    light: {
      background: "#FFFFFF",
      text: "#333333",
    },
    dark: {
      background: "#1a202c",
      text: "#ffffff",
      headers: "#ffffff",
    },
  },
});

export default theme;
