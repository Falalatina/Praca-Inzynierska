import React from "react";
import { useSelector } from "react-redux";

const ScheduleItem = ({ graphic }) => {
  const { hourOfStart, howLong } = useSelector((state) => state.modal);
  const firstShifts = [0, 3, 6, 9, 12];
  const secondShifts = [1, 4, 7, 10, 13];
  const thirdShifts = [2, 5, 8, 11, 14];

  let n2 = Number(howLong) * 2;
  let n3 = Number(howLong) * 3;

  function addHoursToTime(currentTime, hoursToAdd) {
    let newHour = currentTime + hoursToAdd;

    if (newHour > 48) {
      return newHour - 48;
    }
    if (newHour > 24) {
      return newHour - 24;
    }

    return newHour;
  }
  let newT1 = addHoursToTime(Number(hourOfStart), Number(howLong));
  let newT2 = addHoursToTime(Number(hourOfStart), n2);
  let newT3 = addHoursToTime(Number(hourOfStart), n3);

  return (
    <section>
      {graphic.map((shift) => {
        if (firstShifts.includes(shift)) {
          return (
            <div key={shift} className="shift-container">
              <div className="first-shift">
                {hourOfStart}&#58;00 &ndash; {newT1}&#58;00
                <div className="tooltip">FIRST SHIFT</div>
              </div>
            </div>
          );
        }
        if (secondShifts.includes(shift)) {
          return (
            <div key={shift} className="shift-container">
              <div className="second-shift">
                {newT1}&#58;00 &ndash;
                {newT2}&#58;00
                <div className="tooltip">SECOND SHIFT</div>
              </div>
            </div>
          );
        }
        if (thirdShifts.includes(shift)) {
          return (
            <div key={shift} className="shift-container">
              <div className="third-shift">
                {newT2}&#58;00 &ndash;
                {newT3}&#58;00
                <div className="tooltip">THIRD SHIFT</div>
              </div>
            </div>
          );
        }
      })}
    </section>
  );
};

export default ScheduleItem;
