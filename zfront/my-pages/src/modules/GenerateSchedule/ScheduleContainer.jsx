import React from "react";
import "./ShContainer.css";
import { Grid, GridItem } from "@chakra-ui/react";
import ScheduleItem from "./ScheduleItem";

const ScheduleContainer = ({ workShifts, name, id, graphic }) => {
  //console.log(name, id, graphic);
  const valuesToCheck = ["pn", "wt", "sr", "czw", "pt"];

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

  const indexesOfDays = findDay(workShifts, valuesToCheck);

  const isThatMonday = graphic.filter((element) =>
    indexesOfDays["pn"].includes(element)
  );
  const isThatTuesday = graphic.filter((element) =>
    indexesOfDays["wt"].includes(element)
  );
  const isThatWednesday = graphic.filter((element) =>
    indexesOfDays["sr"].includes(element)
  );
  const isThatThursday = graphic.filter((element) =>
    indexesOfDays["czw"].includes(element)
  );
  const isThatFriday = graphic.filter((element) =>
    indexesOfDays["pt"].includes(element)
  );

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

        <ScheduleItem graphic={isThatMonday} />
        <ScheduleItem graphic={isThatTuesday} />
        <ScheduleItem graphic={isThatWednesday} />
        <ScheduleItem graphic={isThatThursday} />
        <ScheduleItem graphic={isThatFriday} />
      </Grid>
    </>
  );
};

export default ScheduleContainer;
