import React from "react";
import "./modal.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/team/modalSlice";
import {
  Switch,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const SettingModal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <Card>
          <CardHeader>
            <Heading size="md">Settings</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4"></Stack>
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
                alignItems="center"
                justifyContent="center"
                templateColumns="repeat(7, 1fr)"
                gap={6}
              >
                <GridItem justifyContent="center">
                  <Box w="100%" h="10" bg="purple.500" borderRadius="1rem">
                    <Text paddingTop="10%">J</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="10" bg="blue.500" />
                <GridItem w="100%" h="10" bg="blue.500" />
                <GridItem w="100%" h="10" bg="blue.500" />
                <GridItem w="100%" h="10" bg="blue.500" />
                <GridItem w="100%" h="10" bg="blue.500" />
                <GridItem w="100%" h="10" bg="blue.500" />
              </Grid>
            </Box>
          </CardBody>
        </Card>
        <div className="btn-container">
          <div className="btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={() => dispatch(closeModal())}
            >
              Confirm
            </button>
            <button
              type="button"
              className="btn clear-btn"
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </button>
          </div>
          <h4>Dni</h4>
          <Switch size="lg" />
        </div>
      </div>
    </aside>
  );
};

export default SettingModal;
