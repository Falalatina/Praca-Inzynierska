import React from "react";
import Generate from "./Generate";
import "./ShContainer.css";
import { IconButton } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import SettingModal from "./Settingmodal";
import { openModal } from "../../features/team/modalSlice";
import { useDispatch, useSelector } from "react-redux";

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
      </div>
      <IconButton
        icon={<SettingsIcon onClick={() => dispatch(openModal())} />}
      />
      {isOpen && <SettingModal />}
      <Generate />
    </>
  );
};

export default index;
