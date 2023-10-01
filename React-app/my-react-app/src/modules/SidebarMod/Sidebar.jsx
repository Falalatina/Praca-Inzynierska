import React from "react";
import "./Sidebar.css";
import calendar from "../../assets/icons/calendar-svgrepo-com.svg";
import idCard from "../../assets/icons/id-card-svgrepo-com.svg";
import heart from "../../assets/icons/heart-icon.svg";
import sun from "../../assets/icons/sun-svgrepo-com.svg";
import pencil from "../../assets/icons/pencil-svgrepo-com.svg";

const Sidebar = () => {
  const goTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToWorkerList = () => {
    window.scroll({
      top: 700,
      behavior: "smooth",
    });
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-link" onClick={goTop}>
        <img src={calendar} />
        <div>Schedule</div>
      </div>
      <div className="sidebar-link" onClick={goToWorkerList}>
        <img src={idCard} />
        <div>Workers List</div>
      </div>
      <div className="sidebar-link">
        <img src={heart} />
        <div>Preferences</div>
      </div>
      <div className="sidebar-link">
        <img src={sun} />
        <div>Holiday Events</div>
      </div>
      <div className="sidebar-link">
        <img src={pencil} />
        <div>
          Shifts
          <div> Requirements </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
