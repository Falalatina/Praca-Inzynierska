import React, { useState } from "react";
import {
  Switch,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";

const DaysModal = () => {
  const [buttonStates, setButtonStates] = useState({
    buttonMon: "purple.500",
    buttonTues: "purple.500",
    buttonWed: "purple.500",
    buttonThurs: "purple.500",
    buttonFri: "purple.500",
    buttonSat: "purple.200",
    buttonSun: "purple.200",
  });

  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  const handleChange = (buttonId) => {
    const newButtonStates = { ...buttonStates };
    newButtonStates[buttonId] =
      newButtonStates[buttonId] === "purple.500" ? "purple.200" : "purple.500";

    setButtonStates(newButtonStates);
  };
  return (
    <Card
      className="grid-container"
      style={{
        position: "relative",
        marginLeft: "70px",
        display: "flex",
      }}
    >
      <CardBody style={{ minWidth: "600px" }}>
        <Stack divider={<StackDivider />} spacing="4"></Stack>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Days
          </Heading>
          <Text pt="2" fontSize="sm">
            Check what days you want to work!
          </Text>

          <Grid
            style={{ overflowX: "auto", width: "100%" }}
            alignItems="center"
            justifyContent="center"
            templateColumns="repeat(7, 1fr)"
            gap={5}
          >
            {days.map((day) => {
              return (
                <GridItem key={day} p={-1}>
                  <Button
                    size="sm"
                    bg={buttonStates[`button${day}`]}
                    color="white"
                    onClick={() => handleChange(`button${day}`)}
                  >
                    {day}
                  </Button>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </CardBody>
    </Card>
  );
};

export default DaysModal;
