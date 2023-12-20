import React from "react";
import "./ShContainer.css";
import { Grid, GridItem } from "@chakra-ui/react";
import ScheduleItem from "./ScheduleItem";

const ScheduleContainer = ({ workShifts, name, id, graphic }) => {
  //console.log(name, id, graphic);
  // console.log(graphic);
  //console.log(graphic);

  const firstShifts = [0, 3, 6, 9, 12];
  const secondShifts = [1, 4, 7, 10, 13];
  const thirdShifts = [2, 5, 8, 11, 14];

  return (
    <>
      <Grid
        className="grid-shift-container"
        templateColumns="repeat(6, 1fr)"
        gap={1}
      >
        <div className="shift-container">{name}</div>

        {graphic.map((shift) => {
          if (firstShifts.includes(shift)) {
            return (
              <div key={shift} className="shift-container">
                <div className="first-shift">
                  6&#58;00 &ndash; 14&#58;00
                  <div className="tooltip">FIRST SHIFT</div>
                </div>
              </div>
            );
          }
          if (secondShifts.includes(shift)) {
            return (
              <div key={shift} className="shift-container">
                <div className="second-shift">
                  14&#58;00 &ndash; 22&#58;00
                  <div className="tooltip">SECOND SHIFT</div>
                </div>
              </div>
            );
          }
          if (thirdShifts.includes(shift)) {
            return (
              <div key={shift} className="shift-container">
                <div className="third-shift">
                  22&#58;00 &ndash; 6&#58;00
                  <div className="tooltip">THIRD SHIFT</div>
                </div>
              </div>
            );
          }
        })}
      </Grid>
    </>
  );
};

export default ScheduleContainer;
