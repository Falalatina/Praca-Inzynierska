import React from "react";
import Generate from "./Generate";
import "./ShContainer.css";

const index = () => {
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
      <Generate />
    </>
  );
};

export default index;
