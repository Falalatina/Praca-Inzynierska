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
  updateNOE1,
  updateNOE2,
  updateNOE3,
} from "../../../features/team/modalSlice";

const ShiftModal = () => {
  const dispatch = useDispatch();
  const {
    firstShift,
    secondShift,
    thirdShift,
    numberOfEmployees1,
    numberOfEmployees2,
    numberOfEmployees3,
  } = useSelector((state) => state.modal);

  const handleSwitchToggle1 = () => {
    dispatch(toggleShift1());
  };
  const handleSwitchToggle2 = () => {
    dispatch(toggleShift2());
  };
  const handleSwitchToggle3 = () => {
    dispatch(toggleShift3());
  };
  const handleInputChange1 = (e) => {
    dispatch(updateNOE1(e.target.value));
  };
  const handleInputChange2 = (e) => {
    dispatch(updateNOE2(e.target.value));
  };
  const handleInputChange3 = (e) => {
    dispatch(updateNOE3(e.target.value));
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
                isChecked={firstShift}
                onChange={handleSwitchToggle1}
              />
            </Heading>
            <Text pt="2" fontSize="sm">
              <Input
                placeholder="number of persons"
                type="number"
                value={numberOfEmployees1}
                onChange={handleInputChange1}
              />
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Second Shift{" "}
              <Switch
                colorScheme="purple"
                isChecked={secondShift}
                onChange={handleSwitchToggle2}
              />
            </Heading>
            <Text pt="2" fontSize="sm">
              <Input
                placeholder="number of persons"
                type="number"
                value={numberOfEmployees2}
                onChange={handleInputChange1}
              />
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Third Shift{" "}
              <Switch
                colorScheme="purple"
                isChecked={thirdShift}
                onChange={handleSwitchToggle3}
              />
            </Heading>
            <Text pt="2" fontSize="sm">
              <Input
                placeholder="number of persons"
                type="number"
                value={numberOfEmployees3}
                onChange={handleInputChange1}
              />
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ShiftModal;
