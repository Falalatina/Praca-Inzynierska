import React, { useState } from "react";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  resetState,
  openConfirm,
  closeConfirm,
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
} from "@chakra-ui/react";
import DaysModal from "./DaysModal";
import HoursModal from "./HoursModal";
import ShiftModal from "./ShiftModal";

const SettingModal = () => {
  const dispatch = useDispatch();
  const [openDays, setOpenDays] = useState(false);
  const [openHours, setOpenHours] = useState(true);
  const [openShift, setOpenShift] = useState(false);
  const { assignments, howLong, hourOfStart } = useSelector(
    (store) => store.modal
  );

  let isLoading = false;
  let whatText = "";
  let hourError = false;

  hourError = howLong > 20 || hourOfStart > 24;

  if (assignments.length === 0) {
    isLoading = true;
    whatText = "Select days";
  } else {
    isLoading = false;
    whatText = "";
  }

  const handleConfirmBtn = () => {
    dispatch(closeModal());
    dispatch(openConfirm());
    setTimeout(() => dispatch(closeConfirm()), 0);
  };

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
            background={hourError ? "red" : ""}
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
            isLoading={isLoading}
            loadingText={whatText}
            type="button"
            className="btn confirm-btn"
            onClick={handleConfirmBtn}
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
