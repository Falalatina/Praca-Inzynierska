import React from "react";
import "./ShContainer.css";
import { Grid, GridItem, CircularProgress } from "@chakra-ui/react";
import ScheduleItem from "./ScheduleItem";
import { useDispatch, useSelector } from "react-redux";
import { startLoading } from "../../features/team/generateSlice";
import { memo } from "react";

const ScheduleContainer = ({ workShifts, name, id, graphic, isLoading }) => {
  const dispatch = useDispatch();
  //console.log(name, id, graphic);
  const daysOfWeek = ["pn", "wt", "sr", "czw", "pt", "sob", "nd"];

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
    if (indexesOfDays.hasOwnProperty(day)) {
      const filteredData = graphic.filter((element) =>
        indexesOfDays[day].includes(element)
      );

      if (filteredData.length === 0) {
        return <div key={day} className="shift-container"></div>;
      }

      return <ScheduleItem key={day} graphic={filteredData} />;
    } else {
      return <div key={day} className="shift-container"></div>;
    }
  });

  // console.log(graphic);

  return (
    <>
      <Grid
        className="grid-shift-container"
        templateColumns="repeat(8, 1fr)"
        gap={1}
      >
        <div key={name} className="workers-container">
          <div key={name} className="worker">
            {name}
          </div>
        </div>

        {isLoading ? (
          <div>
            <CircularProgress isIndeterminate color="green.300" />
          </div>
        ) : (
          filteredDays
        )}
      </Grid>
    </>
  );
};

export default memo(ScheduleContainer);
