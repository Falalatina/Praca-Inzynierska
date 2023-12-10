import { Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { autoSchedule } from "../../features/team/generateSlice";

const Generate = () => {
  const dispatch = useDispatch();

  const numberOfIterations = 100;
  const numberOfParents = 10;
  const mutate = 50;
  const workers = [
    { name: "a", preferences: { yes: ["pn1"], no: ["wt2"] } },
    { name: "b", preferences: { yes: ["pn2"], no: ["wt3"] } },
  ];
  const population = [];
  const workShifts = [
    "pn1",
    "pn2",
    "pn3",
    "wt1",
    "wt2",
    "wt3",
    "sr1",
    "sr2",
    "sr3",
    "czw1",
    "czw2",
    "czw3",
    "pt1",
    "pt2",
    "pt3",
  ];
  const numberOfPersonOnShift = 3;

  const randomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const createStartingPopulation = (
    numberOfParents,
    workShifts,
    numberOfPersonOnShift
  ) => {
    for (let index = 0; index < numberOfParents; index++) {
      const chromosome = [];
      for (let index = 0; index < workShifts.length; index++) {
        const day = [];
        const re1 = /.+[1-2]/;
        const re3 = /.+[3]/;
        if (workShifts[index].match(re1)) {
          for (let index = 0; index < numberOfPersonOnShift; index++) {
            day.push(randomElement(workers).name);
          }
        }
        if (workShifts[index].match(re3)) {
          for (let index = 0; index < numberOfPersonOnShift - 2; index++) {
            day.push(randomElement(workers).name);
          }
        }
        chromosome.push(day);
      }
      population.push(chromosome);
    }
  };

  const startGenerate = () => {
    console.log(population);
    createStartingPopulation(
      numberOfParents,
      workShifts,
      numberOfPersonOnShift
    );
    console.log(population);
  };

  return <Button onClick={() => startGenerate()}>Generate</Button>;
};

export default Generate;
