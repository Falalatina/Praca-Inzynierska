import React from "react";
import Generate from "./Generate";
import "./ShContainer.css";
import { IconButton } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import SettingModal from "./modals/SettingModal";
import { openModal } from "../../features/team/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

const index = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <>
      <div className="week-container">
        <div className="name"> User</div>
        <div className="day-in-week">
          Monday
          <div className="date-time-day">21.08</div>
        </div>
        <div className="day-in-week">
          Tuesday
          <div className="date-time-day">22.08</div>
        </div>
        <div className="day-in-week">
          Wednesday
          <div className="date-time-day">23.08</div>
        </div>
        <div className="day-in-week">
          Thursday
          <div className="date-time-day">24.08</div>
        </div>
        <div className="day-in-week">
          Friday
          <div className="date-time-day">25.08</div>
        </div>
        <div className="day-in-week">
          Saturday
          <div className="date-time-day">26.08</div>
        </div>
        <div className="day-in-week">
          Sunday
          <div className="date-time-day">27.08</div>
        </div>
      </div>
      <IconButton
        onClick={() => dispatch(openModal())}
        icon={<SettingsIcon />}
      />

      {isOpen && <SettingModal />}
      <Generate />
    </>
  );
};

export default index;
