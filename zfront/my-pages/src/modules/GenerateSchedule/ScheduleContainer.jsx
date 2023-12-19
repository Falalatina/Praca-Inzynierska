import React from "react";
import "./ShContainer.css";
import { Grid, GridItem } from "@chakra-ui/react";
import ScheduleItem from "./ScheduleItem";

const ScheduleContainer = ({ bestSolution, workShifts, name, id, graphic }) => {
  //console.log(name, id, graphic);

  console.log(graphic);

  return (
    <>
      <Grid
        className="grid-shift-container"
        templateColumns="repeat(6, 1fr)"
        gap={1}
      >
        <div className="shift-container">{name}</div>
        {
          (graphic = [] ? (
            <></>
          ) : (
            graphic.map((shift) => {
              return <div className="shift-container">{shift}</div>;
            })
          ))
        }
      </Grid>
    </>
  );
};

export default ScheduleContainer;
