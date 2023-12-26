import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateHourOfStart,
  updateHowLong,
} from "../../../features/team/modalSlice";
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

const HoursModal = () => {
  const dispatch = useDispatch();
  const { hourOfStart, howLong } = useSelector((state) => state.modal);

  const handleInputChange1 = (e) => {
    dispatch(updateHourOfStart(e.target.value));
  };
  const handleInputChange2 = (e) => {
    dispatch(updateHowLong(e.target.value));
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
