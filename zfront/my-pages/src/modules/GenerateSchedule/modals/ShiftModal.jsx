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

const ShiftModal = () => {
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
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ShiftModal;
