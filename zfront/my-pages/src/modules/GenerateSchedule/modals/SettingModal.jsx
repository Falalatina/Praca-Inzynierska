import React, { useState } from "react";
import "./modal.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../features/team/modalSlice";
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
} from "@chakra-ui/react";
import DaysModal from "./DaysModal";

const SettingModal = () => {
  const dispatch = useDispatch();
  const [openDays, setOpenDays] = useState(true);

  return (
    <aside className="modal-container">
      <div className="modal">
        <Card>
          <CardHeader style={{ background: "#805AD5" }}>
            <Heading size="md">Settings</Heading>
          </CardHeader>
        </Card>
        <div className="setting-menu">
          <Button w="67px" variant="ghost">
            Days
          </Button>
          <Button w="67px" variant="ghost">
            Hours
          </Button>
          <Button w="67px" variant="ghost">
            Shift
          </Button>
        </div>

        <Card
          style={{
            position: "relative",
            marginLeft: "70px",
            display: "flex",
          }}
        >
          <CardBody style={{ minWidth: "600px" }}>
            <Stack divider={<StackDivider />} spacing="4"></Stack>
            <Box className="grid-container">
              <Heading size="xs" textTransform="uppercase">
                Days
              </Heading>
              <Text pt="2" fontSize="sm">
                Check what days you want to work!
              </Text>

              <DaysModal />
            </Box>
          </CardBody>
        </Card>

        <div className="btn-container">
          <Button
            type="button"
            className="btn confirm-btn"
            onClick={() => dispatch(closeModal())}
          >
            Confirm
          </Button>
          <Button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default SettingModal;
