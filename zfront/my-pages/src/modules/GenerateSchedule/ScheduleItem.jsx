import React from "react";
import { useSelector } from "react-redux";

import { Box, Popover, PopoverTrigger } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { WarningIcon, Icon } from "@chakra-ui/icons";

const ScheduleItem = ({ graphic, popoverContent }) => {
  const { hourOfStart, howLong, firstShift, secondShift, thirdShift } =
    useSelector((state) => state.modal);

  const shiftBackColor = useColorModeValue("rgb(216, 226, 223)", "gray.500");

  const allShifts = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21,
  ];
  // const firstShiftsActive = [0, 3, 6, 9, 12];
  // const secondShiftsActive = [1, 4, 7, 10, 13];
  // const thirdShiftsActive = [2, 5, 8, 11, 14];
  let firstShiftsActive = [];
  let secondShiftsActive = [];
  let thirdShiftsActive = [];

  const amount =
    (firstShift ? 1 : 0) + (secondShift ? 1 : 0) + (thirdShift ? 1 : 0);

  const getShiftIndex = (shiftIndex, shiftActive) => {
    if (shiftActive) {
      return allShifts.filter((index) => index % amount === shiftIndex);
    }
    return [];
  };

  const thirdIndex =
    firstShift && secondShift ? 2 : firstShift || secondShift ? 1 : 0;

  firstShiftsActive = getShiftIndex(0, firstShift);
  secondShiftsActive = getShiftIndex(firstShift ? 1 : 0, secondShift);
  thirdShiftsActive = getShiftIndex(thirdIndex, thirdShift);

  firstShiftsActive.sort((a, b) => a - b);
  secondShiftsActive.sort((a, b) => a - b);
  thirdShiftsActive.sort((a, b) => a - b);

  // console.log(firstShift, firstShiftsActive);
  // console.log(secondShift, secondShiftsActive);
  //console.log(amount);

  let n2 = Number(howLong) * 2;
  let n3 = Number(howLong) * 3;

  function addHoursToTime(currentTime, hoursToAdd) {
    let newHour = currentTime + hoursToAdd;

    if (newHour > 48) {
      return newHour - 48;
    }
    if (newHour > 24) {
      return newHour - 24;
    }

    return newHour;
  }
  let newT1 = addHoursToTime(Number(hourOfStart), Number(howLong));
  let newT2 = addHoursToTime(Number(hourOfStart), n2);
  let newT3 = addHoursToTime(Number(hourOfStart), n3);

  return (
    <section>
      {graphic.map((shift) => {
        if (firstShiftsActive.includes(shift)) {
          return (
            <Popover key={shift} placement="right" closeOnBlur={false}>
              <PopoverTrigger>
                {graphic.length > 1 ? (
                  <Box
                    backgroundColor="yellow.300"
                    key={shift}
                    className="shift-container"
                  >
                    <div className="first-shift">
                      {hourOfStart}&#58;00 &ndash; {newT1}&#58;00
                      <div className="tooltip">FIRST SHIFT</div>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                        }}
                      >
                        <Icon as={WarningIcon} boxSize={6} />
                      </div>
                    </div>
                  </Box>
                ) : (
                  <Box
                    backgroundColor={shiftBackColor}
                    key={shift}
                    className="shift-container"
                  >
                    <div className="first-shift">
                      {hourOfStart}&#58;00 &ndash; {newT1}&#58;00
                      <div className="tooltip">FIRST SHIFT</div>
                    </div>
                  </Box>
                )}
              </PopoverTrigger>
              {popoverContent}
            </Popover>
          );
        }
        if (secondShiftsActive.includes(shift)) {
          return (
            <Popover key={shift} placement="right" closeOnBlur={false}>
              <PopoverTrigger>
                {graphic.length > 1 ? (
                  <Box
                    backgroundColor="yellow.300"
                    key={shift}
                    className="shift-container"
                    //onClick={() => console.log(graphic)}
                  >
                    <div className="second-shift">
                      {newT1}&#58;00 &ndash;
                      {newT2}&#58;00
                      <div className="tooltip">SECOND SHIFT</div>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                        }}
                      >
                        <Icon as={WarningIcon} boxSize={6} />
                      </div>
                    </div>
                  </Box>
                ) : (
                  <Box
                    backgroundColor={shiftBackColor}
                    key={shift}
                    className="shift-container"
                    //onClick={() => console.log(graphic)}
                  >
                    <div className="second-shift">
                      {newT1}&#58;00 &ndash;
                      {newT2}&#58;00
                      <div className="tooltip">SECOND SHIFT</div>
                    </div>
                  </Box>
                )}
              </PopoverTrigger>
              {popoverContent}
            </Popover>
          );
        }
        if (thirdShiftsActive.includes(shift)) {
          return (
            <Popover key={shift} placement="right" closeOnBlur={false}>
              <PopoverTrigger>
                {graphic.length > 1 ? (
                  <Box
                    backgroundColor="yellow.300"
                    key={shift}
                    className="shift-container"
                  >
                    <div className="third-shift">
                      {newT2}&#58;00 &ndash;
                      {newT3}&#58;00
                      <div className="tooltip">THIRD SHIFT</div>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                        }}
                      >
                        <Icon as={WarningIcon} boxSize={6} />
                      </div>
                    </div>
                  </Box>
                ) : (
                  <Box
                    backgroundColor={shiftBackColor}
                    key={shift}
                    className="shift-container"
                  >
                    <div className="third-shift">
                      {newT2}&#58;00 &ndash;
                      {newT3}&#58;00
                      <div className="tooltip">THIRD SHIFT</div>
                    </div>
                  </Box>
                )}
              </PopoverTrigger>
              {popoverContent}
            </Popover>
          );
        }
      })}
    </section>
  );
};

export default ScheduleItem;
