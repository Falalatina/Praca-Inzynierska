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
  Input,
} from "@chakra-ui/react";

const ShiftModal = () => {
  const [check, setCheck] = useState({
    first: true,
    second: true,
    third: true,
  });
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
              Check your shift
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              First Shift
              <Switch colorScheme="purple" onChange={() => console.log("hi")} />
            </Heading>
            <Text pt="2" fontSize="sm">
              <Input placeholder="number of person: 3" type="number" />
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Second Shift <Switch colorScheme="purple" />
            </Heading>
            <Text pt="2" fontSize="sm">
              <Input placeholder="number of person: 3" type="number" />
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Third Shift <Switch colorScheme="purple" />
            </Heading>
            <Text pt="2" fontSize="sm">
              <Input placeholder="number of person: 1" type="number" />
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ShiftModal;
