import React from "react";
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
              <Input placeholder="6:00" />
            </Text>
          </Box>
          <Box style={{ maxWidth: "400px" }}>
            <Heading size="xs" textTransform="uppercase">
              How Long Shift takes
            </Heading>
            <Text pt="2" fontSize="sm">
              <Input placeholder="8H" />
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default HoursModal;
