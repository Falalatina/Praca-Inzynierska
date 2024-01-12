import React, { useEffect } from "react";
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
  Button,
} from "@chakra-ui/react";
import { useColorModeValue, useToast } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { updateGraphicForPerson } from "../../features/team/generateSlice";

export const findDay = (array, values) => {
  return array.reduce((acc, shift, index) => {
    values.forEach((value) => {
      if (shift.includes(value)) {
        acc[value] = [...(acc[value] || []), index];
      }
    });
    return acc;
  }, {});
};

const ScheduleContainer = ({
  workShifts,
  name,
  id,
  graphic,
  isLoading,
  isUser,
}) => {
  const backgroundColor = useColorModeValue("white", "gray.700");
  const shiftBackColor = useColorModeValue("rgb(216, 226, 223)", "gray.500");

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isLoading === false) {
        return () => clearTimeout(timeoutId);
      }

      toast({
        title: "Operation takes too long....",
        description: "Maybe You should check your settings or try to refresh.",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, [dispatch, toast, isLoading]);

  //console.log(name, id, graphic);
  //console.log(workShifts);
  const daysOfWeek = ["pn", "wt", "sr", "czw", "pt", "sob", "nd"];

  const indexesOfDays = findDay(workShifts, daysOfWeek);
  // console.log(indexesOfDays);

  const filteredDays = daysOfWeek.map((day) => {
    const handleShiftClick = (shiftIndex) => {
      const findIndex = graphic.findIndex((element) =>
        indexesOfDays[day].includes(element)
      );
      console.log(indexesOfDays[day], graphic);
      if (findIndex !== -1) {
        const newGraphic = [...graphic];
        const newShift = indexesOfDays[day][shiftIndex];

        //  console.log(indexesOfDays[day][shiftIndex] === undefined);
        // Sprawdź, czy nowy element już istnieje w grafiku
        if (!newGraphic.includes(newShift)) {
          if (newShift === undefined) {
            newGraphic.splice(findIndex, 1);
            dispatch(updateGraphicForPerson({ id: id, graphic: newGraphic }));
            return;
          }
          newGraphic[findIndex] = newShift;
          dispatch(updateGraphicForPerson({ id: id, graphic: newGraphic }));
        } else {
          toast({
            title: "Operation forbidden.",
            description: "This element already exists in graphic.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      } else {
        // Jeśli element nie istnieje, dodaj go do grafiku
        if (indexesOfDays[day][shiftIndex] === undefined) {
          const newGraphic = [...graphic];
          newGraphic.splice(findIndex, 1);
          dispatch(updateGraphicForPerson({ id: id, graphic: newGraphic }));
          toast({
            title: "Operation forbidden.",
            description: "This shift is off.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return;
        }

        const newGraphic = [...graphic];
        newGraphic.push(indexesOfDays[day][shiftIndex]);
        dispatch(updateGraphicForPerson({ id: id, graphic: newGraphic }));
      }
    };

    const handleFreeSpots = () => {
      //trzeba pogrupowac indeksy do shiftów!!!

      ///najlepiej to do itema wyslac
      //tam mmam shift active i callback
      const thatDayIndexes = indexesOfDays[day];
      const myArray = [];

      for (let i = 0; i <= 21; i++) {
        myArray.push(i);
      }
      const freeDays = myArray.filter((element) => !graphic.includes(element));

      console.log(graphic, freeDays, thatDayIndexes);
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

    const popoverContentForUser = (
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <div>Do you wanna change?</div>
        </PopoverHeader>
        <PopoverBody>
          <Button onClick={() => handleFreeSpots()}>Yes</Button>
        </PopoverBody>
      </PopoverContent>
    );

    const popoverContent = (
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Change shift for {name}</PopoverHeader>
        <PopoverBody>
          {[0, 1, 2, 3].map((shiftIndex) => (
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
                  <div className="off-day">X</div>
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
            {isUser ? popoverContentForUser : popoverContent}
          </Popover>
        );
      }

      return (
        <ScheduleItem
          key={day}
          graphic={filteredData}
          popoverContent={isUser ? popoverContentForUser : popoverContent}
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
            <PopoverBody>
              You've chosen to keep this day free! If you want to change go to
              days settings
            </PopoverBody>
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
