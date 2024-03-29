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
  CardBody,
  Input,
} from "@chakra-ui/react";
import {
  toggleShift,
  updateNumberOfEmployees,
} from "../../../features/team/modalSlice";

const ShiftModal = () => {
  const dispatch = useDispatch();
  const [disabled, setIsDisabled] = useState(false);
  const {
    firstShift,
    secondShift,
    thirdShift,
    numberOfEmployees1,
    numberOfEmployees2,
    numberOfEmployees3,
  } = useSelector((state) => state.modal);

  const handleSwitchToggle1 = () => {
    if (thirdShift || secondShift) {
      dispatch(toggleShift({ shiftKey: "firstShift", shiftNumber: 1 }));
    }
  };
  const handleSwitchToggle2 = () => {
    if (thirdShift || firstShift) {
      dispatch(toggleShift({ shiftKey: "secondShift", shiftNumber: 2 }));
    }
  };
  const handleSwitchToggle3 = () => {
    if (firstShift || secondShift) {
      dispatch(toggleShift({ shiftKey: "thirdShift", shiftNumber: 3 }));
    }
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
                isDisabled={disabled}
                colorScheme="purple"
                isChecked={firstShift}
                onChange={handleSwitchToggle1}
              />
            </Heading>
            <Text pt="2" fontSize="sm">
              Number of employees
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
              Number of employees
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
              Number of employees
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
