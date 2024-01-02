import React from "react";
import "./ShContainer.css";
import { memo } from "react";
import ScheduleItem from "./ScheduleItem";

import {
  Grid,
  Box,
  CircularProgress,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { updateGraphicForPerson } from "../../features/team/generateSlice";

const ScheduleContainer = ({ workShifts, name, id, graphic, isLoading }) => {
  const backgroundColor = useColorModeValue("rgb(236, 236, 236)", "gray.700");
  const shiftBackColor = useColorModeValue("rgb(216, 226, 223)", "gray.500");

  const dispatch = useDispatch();
  //console.log(name, id, graphic);
  //console.log(workShifts);
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
  // console.log(indexesOfDays);

  const filteredDays = daysOfWeek.map((day) => {
    const handleShiftClick = (shiftIndex) => {
      const findIndex = graphic.findIndex((element) =>
        indexesOfDays[day].includes(element)
      );

      if (findIndex !== -1) {
        const newGraphic = [...graphic];
        newGraphic[findIndex] = indexesOfDays[day][shiftIndex];

        dispatch(updateGraphicForPerson({ id: id, graphic: newGraphic }));
      }
    };

    // const popoverContent = (
    //   <PopoverContent>
    //     <PopoverArrow />
    //     <PopoverCloseButton />
    //     <PopoverHeader>Change shift for {name}</PopoverHeader>
    //     <PopoverBody>
    //       <Box
    //         backgroundColor={shiftBackColor}
    //         className="shift-container"
    //         onClick={() => {
    //           let findIndex = graphic.findIndex((element) =>
    //             indexesOfDays[day].includes(element)
    //           );
    //           let newGraphic = [...graphic];
    //           newGraphic[findIndex] = indexesOfDays[day][0];
    //           graphic = newGraphic;
    //           dispatch(updateGraphicForPerson({ id: id, graphic: graphic }));

    //           // console.log(
    //           //   { name },
    //           //   `${day}`,
    //           //   indexesOfDays[day], //jakie zmiany w jaki dzien
    //           //   graphic, //grafik osoby,

    //           //   graphic[findIndex],
    //           //   indexesOfDays[day][0],
    //           //   newGraphic
    //           // );
    //         }}
    //       >
    //         <div className="first-shift">FIRST SHIFT</div>
    //       </Box>
    //       <Box
    //         backgroundColor={shiftBackColor}
    //         className="shift-container"
    //         onClick={() => {
    //           let findIndex = graphic.findIndex((element) =>
    //             indexesOfDays[day].includes(element)
    //           );
    //           let newGraphic = [...graphic];
    //           newGraphic[findIndex] = indexesOfDays[day][1];
    //           graphic = newGraphic;
    //           dispatch(updateGraphicForPerson({ id: id, graphic: graphic }));
    //         }}
    //       >
    //         <div className="second-shift">SECOND SHIFT</div>
    //       </Box>
    //       <Box
    //         backgroundColor={shiftBackColor}
    //         className="shift-container"
    //         onClick={() => {
    //           let findIndex = graphic.findIndex((element) =>
    //             indexesOfDays[day].includes(element)
    //           );
    //           let newGraphic = [...graphic];
    //           newGraphic[findIndex] = indexesOfDays[day][2];
    //           graphic = newGraphic;
    //           dispatch(updateGraphicForPerson({ id: id, graphic: graphic }));
    //         }}
    //       >
    //         <div className="third-shift">THIRD SHIFT</div>
    //       </Box>
    //     </PopoverBody>
    //   </PopoverContent>
    // );

    const popoverContent = (
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Change shift for {name}</PopoverHeader>
        <PopoverBody>
          {[0, 1, 2].map((shiftIndex) => (
            <Box
              key={shiftIndex}
              backgroundColor={shiftBackColor}
              className="shift-container"
              onClick={() => handleShiftClick(shiftIndex)}
            >
              <div className={`shift-${shiftIndex + 1}`}>
                {shiftIndex === 0 ? (
                  <div className="first-shift">FIRST SHIFT</div>
                ) : shiftIndex === 1 ? (
                  <div className="second-shift">SECOND SHIFT</div>
                ) : shiftIndex === 2 ? (
                  <div className="third-shift">THIRD SHIFT</div>
                ) : (
                  <div></div>
                )}
              </div>
            </Box>
          ))}
        </PopoverBody>
      </PopoverContent>
    );
    const popoverTrigger = (
      <PopoverTrigger>
        <Box
          backgroundColor={shiftBackColor}
          key={day}
          className="shift-container"
        ></Box>
      </PopoverTrigger>
    );

    if (indexesOfDays.hasOwnProperty(day)) {
      const filteredData = graphic.filter((element) =>
        indexesOfDays[day].includes(element)
      );

      if (filteredData.length === 0) {
        return (
          <Popover key={day} placement="right">
            {popoverTrigger}
            {popoverContent}
          </Popover>
        );
      }

      return (
        <ScheduleItem
          key={day}
          graphic={filteredData}
          popoverContent={popoverContent}
        />
      );
    } else {
      return (
        <Popover key={day} placement="right">
          {popoverTrigger}
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Change shift for {name}</PopoverHeader>
            <PopoverBody>You've chosen to keep this day free!</PopoverBody>
          </PopoverContent>
        </Popover>
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
