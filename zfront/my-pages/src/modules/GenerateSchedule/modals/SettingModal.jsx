import React, { useState } from "react";
import "./modal.css";
import { useDispatch } from "react-redux";
import { closeModal, resetState } from "../../../features/team/modalSlice";
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
import HoursModal from "./HoursModal";
import ShiftModal from "./ShiftModal";

const SettingModal = () => {
  const dispatch = useDispatch();
  const [openDays, setOpenDays] = useState(true);
  const [openHours, setOpenHours] = useState(false);
  const [openShift, setOpenShift] = useState(false);

  return (
    <aside className="modal-container">
      <div className="modal">
        <Card>
          <CardHeader style={{ background: "#805AD5" }}>
            <Heading size="md">Settings</Heading>
          </CardHeader>
        </Card>
        <div className="setting-menu">
          <Button
            w="67px"
            variant="ghost"
            onClick={() => {
              setOpenDays(true);
              setOpenHours(false);
              setOpenShift(false);
            }}
          >
            Days
          </Button>
          <Button
            w="67px"
            variant="ghost"
            onClick={() => {
              setOpenHours(true);
              setOpenDays(false);
              setOpenShift(false);
            }}
          >
            Hours
          </Button>
          <Button
            w="67px"
            variant="ghost"
            onClick={() => {
              setOpenHours(false);
              setOpenDays(false);
              setOpenShift(true);
            }}
          >
            Shift
          </Button>
        </div>

        {openDays ? (
          <DaysModal />
        ) : openHours ? (
          <HoursModal />
        ) : openShift ? (
          <ShiftModal />
        ) : (
          <div></div>
        )}

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
            onClick={() => {
              dispatch(resetState());
              dispatch(closeModal());
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default SettingModal;
