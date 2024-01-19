import React, { useState } from "react";
import { memo } from "react";
import {
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Card,
  CardBody,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleButton } from "../../../features/team/modalSlice";

const DaysModal = () => {
  const dispatch = useDispatch();
  const { days } = useSelector((store) => store.modal);

  const daysA = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

  const handleChange = (day) => {
    dispatch(toggleButton(day));
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
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Days
            </Heading>
            <Text pt="2" fontSize="sm">
              Check what days you want to work!
            </Text>
          </Box>
          <Box>
            <Grid
              style={{
                overflowX: "auto",
                scrollbarWidth: "thin",
              }}
              templateColumns="repeat(7, 1fr)"
              gap={1}
            >
              {daysA.map((day) => {
                return (
                  <GridItem key={day} p={-1}>
                    <Button
                      size="sm"
                      bg={days[day] ? "purple.500" : "purple.200"}
                      color="white"
                      onClick={() => handleChange(day)}
                    >
                      {day}
                    </Button>
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default memo(DaysModal);
