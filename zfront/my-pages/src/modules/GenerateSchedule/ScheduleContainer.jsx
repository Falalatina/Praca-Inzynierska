import React from "react";
import "./ShContainer.css";
import { Grid, GridItem } from "@chakra-ui/react";
import ScheduleItem from "./ScheduleItem";

const ScheduleContainer = ({ bestSolution, workShifts }) => {
  console.log(bestSolution);

  return (
    <>
      <Grid
        className="grid-shift-container"
        templateColumns="repeat(5, 1fr)"
        gap={1}
      >
        <div className="shift-container">
          {workShifts.map((item) => {
            //console.log(item);
            const re3 = /[p]+[n]+./;
            if (item.match(re3)) {
              return item;
            }
          })}
        </div>
      </Grid>
    </>
  );
};

export default ScheduleContainer;
