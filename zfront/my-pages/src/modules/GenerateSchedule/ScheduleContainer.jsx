import React from "react";
import "./ShContainer.css";
import { Grid, GridItem } from "@chakra-ui/react";

const ScheduleContainer = ({ bestSolution, workShifts }) => {
  //console.log(bestSolution);

  return (
    <>
      <Grid
        className="grid-shift-container"
        templateColumns="repeat(5, 1fr)"
        gap={1}
      >
        {workShifts.map((item) => {
          return (
            <GridItem key={item}>
              <div className="shift-container"></div>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default ScheduleContainer;
