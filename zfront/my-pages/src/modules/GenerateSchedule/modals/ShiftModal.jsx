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
  toggleShift,
  updateNumberOfEmployees,
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
    dispatch(toggleShift({ shiftKey: "firstShift", shiftNumber: 1 }));
  };
  const handleSwitchToggle2 = () => {
    dispatch(toggleShift({ shiftKey: "secondShift", shiftNumber: 2 }));
  };
  const handleSwitchToggle3 = () => {
    dispatch(toggleShift({ shiftKey: "thirdShift", shiftNumber: 3 }));
  };
  const handleInputChange1 = (e) => {
    dispatch(
      updateNumberOfEmployees({
        shiftNumber: "1",
        value: Number(e.target.value),
      })
    );
  };
  const handleInputChange2 = (e) => {
    dispatch(
      updateNumberOfEmployees({
        shiftNumber: "2",
        value: Number(e.target.value),
      })
    );
  };
  const handleInputChange3 = (e) => {
    dispatch(
      updateNumberOfEmployees({
        shiftNumber: "3",
        value: Number(e.target.value),
      })
    );
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
              Check your shifts!
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
                placeholder={numberOfEmployees1}
                type="number"
                onChange={handleInputChange1}
                disabled={!firstShift}
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
                disabled={!secondShift}
                type="number"
                placeholder={numberOfEmployees2}
                onChange={handleInputChange2}
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
                disabled={!thirdShift}
                type="number"
                placeholder={numberOfEmployees3}
                onChange={handleInputChange3}
              />
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ShiftModal;
