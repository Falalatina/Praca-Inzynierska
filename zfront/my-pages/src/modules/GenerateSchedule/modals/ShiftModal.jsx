import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Input,
} from "@chakra-ui/react";
import {
  toggleShift1,
  toggleShift2,
  toggleShift3,
} from "../../../features/team/modalSlice";

const ShiftModal = () => {
  const dispatch = useDispatch();
  const { firstShift, secondShift, thirdShift } = useSelector(
    (state) => state.modal
  );
  const handleSwitchToggle1 = () => {
    dispatch(toggleShift1());
  };
  const handleSwitchToggle2 = () => {
    dispatch(toggleShift2());
  };
  const handleSwitchToggle3 = () => {
    dispatch(toggleShift3());
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
          <Box className="grid-container">
            <Heading size="xs" textTransform="uppercase">
              Shift
            </Heading>
            <Text pt="2" fontSize="sm">
              Check your shifts
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              First Shift
              <Switch
                colorScheme="purple"
                defaultChecked
                onChange={handleSwitchToggle1}
              />
            </Heading>
            <Text pt="2" fontSize="sm">
              <Input placeholder="number of persons: 3" type="number" />
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Second Shift{" "}
              <Switch
                colorScheme="purple"
                defaultChecked
                onChange={handleSwitchToggle2}
              />
            </Heading>
            <Text pt="2" fontSize="sm">
              <Input placeholder="number of persons: 3" type="number" />
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Third Shift{" "}
              <Switch
                colorScheme="purple"
                defaultChecked
                onChange={handleSwitchToggle3}
              />
            </Heading>
            <Text pt="2" fontSize="sm">
              <Input placeholder="number of persons: 1" type="number" />
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ShiftModal;
