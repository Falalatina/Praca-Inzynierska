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
import { useDispatch } from "react-redux";
import { toggleButton } from "../../../features/team/modalSlice";

const DaysModal = () => {
  const dispatch = useDispatch();
  const [buttonStates, setButtonStates] = useState({
    buttonmon: "purple.500",
    buttontues: "purple.500",
    buttonwed: "purple.500",
    buttonthurs: "purple.500",
    buttonfri: "purple.500",
    buttonsat: "purple.200",
    buttonsun: "purple.200",
  });

  const days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

  const handleChange = (buttonId, day) => {
    const newButtonStates = { ...buttonStates };
    newButtonStates[buttonId] =
      newButtonStates[buttonId] === "purple.500" ? "purple.200" : "purple.500";

    setButtonStates(newButtonStates);
    dispatch(toggleButton(day));
  };
  return (
    <Card
      style={{
        position: "relative",
        marginLeft: "70px",
        display: "flex",
      }}
    >
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Days
            </Heading>
            <Text pt="2" fontSize="sm">
              Check what days you want to work!
            </Text>
          </Box>
          <Box>
            <Grid
              style={{
                overflowX: "auto",
                scrollbarWidth: "thin",
              }}
              templateColumns="repeat(7, 1fr)"
              gap={1}
            >
              {days.map((day) => {
                return (
                  <GridItem key={day} p={-1}>
                    <Button
                      size="sm"
                      bg={buttonStates[`button${day}`]}
                      color="white"
                      onClick={() => handleChange(`button${day}`, day)}
                    >
                      {day}
                    </Button>
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DaysModal;
