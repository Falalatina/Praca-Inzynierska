import React from "react";
import "./ShContainer.css";
import { memo } from "react";
import ScheduleItem from "./ScheduleItem";

import { Grid, Box, CircularProgress } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

import { useDispatch } from "react-redux";

const ScheduleContainer = ({ workShifts, name, id, graphic, isLoading }) => {
  const backgroundColor = useColorModeValue("rgb(236, 236, 236)", "gray.700");
  const shiftBackColor = useColorModeValue("rgb(216, 226, 223)", "gray.500");

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
        return (
          <Box
            backgroundColor={shiftBackColor}
            key={day}
            className="shift-container"
          ></Box>
        );
      }

      return <ScheduleItem key={day} graphic={filteredData} />;
    } else {
      return (
        <Box
          backgroundColor={shiftBackColor}
          key={day}
          className="shift-container"
        ></Box>
      );
    }
  });

  // console.log(graphic);

  return (
    <>
      <Grid
        backgroundColor={backgroundColor}
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
