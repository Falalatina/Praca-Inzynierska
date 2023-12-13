import { Button } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { autoSchedule } from "../../features/team/generateSlice";

const Generate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    createStartingPopulation(
      numberOfParents,
      workShifts,
      numberOfPersonOnShift
    );
  }, []);

  const numberOfIterations = 100;
  const numberOfParents = 10;
  const mutate = 50;
  const workers = [
    { name: "asia", preferences: [{ yes: ["pn1"] }, { no: ["wt2"] }] },
    { name: "basia", preferences: { yes: ["pn2"], no: ["wt3"] } },
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
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
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
  const evaluateForOne = (item) => {
    let fitness = 0;
    item.map((innerItem) => {
      for (let index = 0; index < innerItem.length - 1; index++) {
        if (innerItem[index] === innerItem[index + 1]) {
          fitness = fitness - 1;
        }
      }
    });
    return fitness;
  };

  const evaluate = () => {
    population.map((item) => {
      return evaluateForOne(item);
    });
  };

  const tournamentSelection = (population) => {
    const selectedToMate = [];
    let winner = "";
    for (let index = 0; index < population.length; index++) {
      let contestant1 = randomElement(population);
      let contestant2 = randomElement(population);
      if (contestant1 === contestant2) {
        contestant2 = randomElement(population);
      }
      let item1 = population.filter((con) => con === contestant1);

      let item2 = population.filter((con) => con === contestant2);

      let pointsForC1 = evaluateForOne(item1[0]);
      let pointsForC2 = evaluateForOne(item2[0]);

      if (pointsForC1 > pointsForC2) {
        winner = contestant1;
      } else {
        winner = contestant2;
      }
      selectedToMate.push(winner);
    }

    for (let index = 0; index < selectedToMate.length - 1; index++) {
      crossover(selectedToMate[index], selectedToMate[index + 1]);
    }
  };

  const crossover = (parent1, parent2) => {
    let splitPoint = randomIntFromInterval(1, workShifts.length - 1);
    mutating([
      parent1
        .slice(0, splitPoint)
        .concat(parent2.slice(splitPoint, parent2.length)),
    ]);
    mutating([
      parent2
        .slice(0, splitPoint)
        .concat(parent1.slice(splitPoint, parent1.length)),
    ]);
  };

  const mutating = (child) => {
    console.log(child);
  };

  const startGenerate = () => {
    //evaluate();

    tournamentSelection(population);
  };

  return <Button onClick={() => startGenerate()}>Generate</Button>;
};

export default Generate;
