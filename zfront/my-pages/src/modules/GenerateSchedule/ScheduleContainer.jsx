import React from "react";
import "./ShContainer.css";
import { Grid, GridItem } from "@chakra-ui/react";
import ScheduleItem from "./ScheduleItem";

const ScheduleContainer = ({ workShifts, name, id, graphic }) => {
  //console.log(name, id, graphic);
  const daysOfWeek = ["pn", "wt", "sr", "czw", "pt"];

  const findDay = (array, values) => {
    return array.reduce((acc, shift, index) => {
      values.forEach((value) => {
        if (shift.includes(value)) {
          acc[value] = [...(acc[value] || []), index];
        }
      });
      return acc;
    }, {});
  };

  const indexesOfDays = findDay(workShifts, daysOfWeek);

  const filteredDays = daysOfWeek.map((day) => {
    const filteredData = graphic.filter((element) =>
      indexesOfDays[day].includes(element)
    );
    return <ScheduleItem key={day} graphic={filteredData} />;
  });

  console.log(graphic);

  return (
    <>
      <Grid
        className="grid-shift-container"
        templateColumns="repeat(6, 1fr)"
        gap={1}
      >
        <div className="workers-container">
          <div className="worker">{name}</div>
        </div>

        {filteredDays}
      </Grid>
    </>
  );
};

export default ScheduleContainer;
