import React, { useState } from "react";
import "./modal.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/team/modalSlice";
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

const SettingModal = () => {
  const dispatch = useDispatch();
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
    <aside className="modal-container">
      <div className="modal">
        <div className="setting-menu">
          <Button>Days</Button>
          <Button>Hours</Button>
          <Button>Shift</Button>
        </div>
        <Card
          style={{ position: "relative", marginLeft: "70px", display: "flex" }}
        >
          <CardHeader style={{ background: "#805AD5" }}>
            <Heading size="md">Settings</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4"></Stack>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Days
              </Heading>
              <Text pt="2" fontSize="sm">
                Check what days you want to work!
              </Text>
            </Box>

            <Grid
              alignItems="center"
              justifyContent="center"
              templateColumns="repeat(7, 1fr)"
              gap={5}
            >
              {days.map((day) => {
                return (
                  <GridItem key={day} justifyContent="center">
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
          </CardBody>
        </Card>

        <div className="btn-container">
          <Button
            type="button"
            className="btn confirm-btn"
            onClick={() => dispatch(closeModal())}
          >
            Confirm
          </Button>
          <Button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default SettingModal;
