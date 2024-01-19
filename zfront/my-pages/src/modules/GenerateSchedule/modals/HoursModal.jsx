import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateHourOfStart,
  updateHowLong,
} from "../../../features/team/modalSlice";
import { changeSum } from "../../../features/team/generateSlice";
import {
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Card,
  CardBody,
  Input,
} from "@chakra-ui/react";

const HoursModal = () => {
  const dispatch = useDispatch();
  const { hourOfStart, howLong } = useSelector((state) => state.modal);

  const handleInputChange1 = (e) => {
    dispatch(updateHourOfStart(e.target.value));
  };
  const handleInputChange2 = (e) => {
    dispatch(updateHowLong(e.target.value));
    dispatch(changeSum({ howLong: e.target.value }));
  };

  let isInvalid = false;
  let isInvalidHour = false;

  howLong > 20 ? (isInvalid = true) : (isInvalid = false);
  hourOfStart > 24 ? (isInvalidHour = true) : (isInvalidHour = false);

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
              Hours
            </Heading>
            <Text pt="2" fontSize="sm">
              Check what hours you want to work!
            </Text>
          </Box>
          <Box style={{ maxWidth: "400px" }}>
            <Heading size="xs" textTransform="uppercase">
              First Shift Start
            </Heading>
            <Text pt="2" fontSize="sm">
              X:00
              <Input
                isInvalid={isInvalidHour}
                errorBorderColor="red.300"
                placeholder="X:00"
                type="number"
                value={hourOfStart}
                onChange={handleInputChange1}
              />
            </Text>
          </Box>
          <Box style={{ maxWidth: "400px" }}>
            <Heading size="xs" textTransform="uppercase">
              How Long Shift takes
            </Heading>
            <Text pt="2" fontSize="sm">
              Hours
              <Input
                isInvalid={isInvalid}
                errorBorderColor="red.300"
                placeholder="8"
                type="number"
                value={howLong}
                onChange={handleInputChange2}
              />
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default HoursModal;
