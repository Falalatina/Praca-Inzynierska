import React from "react";
import "./Back.css";
import { Box } from "@chakra-ui/react";
const Back = () => {
  return (
    <Box
      bgGradient="linear(to-l, #7928CA,#38B2AC, #322659)"
      w="100%"
      h={"110%"}
      p={10}
      mt={"20"}
      style={{ position: "absolute", left: 0 }}
    ></Box>
  );
};

export default Back;
