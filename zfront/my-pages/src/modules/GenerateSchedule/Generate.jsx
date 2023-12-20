import { Button } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGraphic } from "../../features/team/generateSlice";
import ScheduleContainer from "./ScheduleContainer";

const Generate = () => {
  const dispatch = useDispatch();
  const [bestSolution, setBestSolution] = useState([]);
  const [wasChanged, setWasChanged] = useState(false);
  const { workers } = useSelector((store) => store.generate);

  // console.log(
  //   useSelector((store) => {
  //     console.log(store.generate.generateItems[0].workers);
  //   })
  // );

  // console.log(workers[0].graphic);

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
  const minWithKey = (array, keyFunction) => {
    return array.reduce((max, current) => {
      const currentValue = keyFunction(current);
      const maxValue = keyFunction(max);

      return currentValue < maxValue ? current : max;
    }, array[0]);
  };
  const maxWithKey = (array, keyFunction) => {
    return array.reduce((max, current) => {
      const currentValue = keyFunction(current);
      const maxValue = keyFunction(max);

      return currentValue > maxValue ? current : max;
    }, array[0]);
  };
  const createStartingPopulation = (
    numberOfParents,
    workShifts,
    numberOfPersonOnShift
  ) => {
    for (let i = 0; i < numberOfParents; i++) {
      const chromosome = [];
      for (let index = 0; index < workShifts.length; index++) {
        const day = [];
        const re1 = /.+[1-2]/;
        const re3 = /.+[3]/;
        if (workShifts[index].match(re1)) {
          for (let index = 0; index < numberOfPersonOnShift; index++) {
            day.push(randomElement(workers).name);
            // console.log(randomElement(workers).name);
          }
        }
        if (workShifts[index].match(re3)) {
          for (let index = 0; index < numberOfPersonOnShift - 2; index++) {
            day.push(randomElement(workers).name);
          }
        }
        // console.log("DAY: ", day);
        chromosome.push(day);
      }
      // console.log("CHROMOSOME: ", chromosome);
      population.push(chromosome);
      // console.log("POPULATION: ", population);
    }
  };
  const evaluateForOne = (item) => {
    let fitness = 0;
    item.map((innerItem) => {
      for (let index = 0; index < innerItem.length - 1; index++) {
        if (innerItem[index] === innerItem[index + 1]) {
          fitness = fitness - 1;
        }
        // console.log(workShifts[index]); - pn1 pn2 etc.
        const array = [workers[index].preferences.yes];
        // console.log(array[0].length > 0);
        for (let i = 0; i < array[0].length; i++) {
          // console.log(workers[index].preferences.yes[i]);
          if (workShifts[index] === workers[index].preferences.yes[i]) {
            fitness = fitness + 1;
          }
          if (workShifts[index] === workers[index].preferences.no[i]) {
            fitness = fitness - 1;
          }
        }
        // console.log(workers[index].preferences.yes);
      }
    });
    //console.log(fitness);
    return fitness;
  };

  const tournamentSelection = (population) => {
    const selectedToMate = [];
    let winner = "";
    for (let index = 0; index < population.length; index++) {
      let contestant1 = randomElement(population);
      let contestant2 = randomElement(population);
      //console.log(contestant1); to to index
      // console.log([...population]);
      if (contestant1 === contestant2) {
        contestant2 = randomElement(population);
      }
      let item1 = population.filter((con) => con === contestant1);

      let item2 = population.filter((con) => con === contestant2);

      //console.log(item1);
      let pointsForC1 = evaluateForOne(item1[0]);
      let pointsForC2 = evaluateForOne(item2[0]);

      // console.log(pointsForC1);

      if (pointsForC1 > pointsForC2) {
        winner = contestant1;
      } else {
        winner = contestant2;
      }
      // console.log(winner);
      selectedToMate.push(winner);
    }
    // console.log(selectedToMate[1]);
    for (let index = 0; index < selectedToMate.length - 1; index++) {
      crossover(selectedToMate[index], selectedToMate[index + 1]);
    }
  };

  const crossover = (parent1, parent2) => {
    let splitPoint = randomIntFromInterval(1, workShifts.length - 1);
    //console.log(splitPoint);
    //console.log(parent1.slice(0, splitPoint));
    // console.log(parent2.slice(splitPoint, parent2.length));

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
    //nawiasy by był aarray
  };

  const mutating = (child) => {
    // console.log(child[0]);
    let childCopy = JSON.parse(JSON.stringify(child));
    //console.log(childCopy[0]);
    if (mutate <= randomIntFromInterval(1, 100)) {
      for (let index = 0; index < randomIntFromInterval(1, 2); index++) {
        let mutatedGene = randomIntFromInterval(0, workShifts.length - 1);
        // console.log(child[0][mutatedGene]);
        let randomGen = randomIntFromInterval(
          0,
          childCopy[0][mutatedGene]?.length - 1
        );

        // console.log("był: " + child[0][mutatedGene][randomGen]);
        childCopy[0][mutatedGene][randomGen] = randomElement(workers).name;

        // console.log("NOWY: " + child[0][mutatedGene][randomGen]);
      }
    }
    // console.log(population);
    population.push(childCopy[0]);
  };

  const reducePopulation = (population) => {
    while (population.length > 10) {
      const index = population.indexOf(minWithKey(population, evaluateForOne));
      population.splice(index, 1);
      // console.log(minWithKey(population, evaluateForOne));
      // console.log(evaluateForOne(minWithKey(population, evaluateForOne)));
      //Math.min();
    }
  };

  const startGenerate = () => {
    for (let index = 0; index < numberOfIterations; index++) {
      tournamentSelection(population);
      reducePopulation(population);

      // console.log(index, population);
    }
    // console.log(population);
    maxWithKey(population, evaluateForOne);
    //console.log(maxWithKey(population, evaluateForOne));
    let bestSolution = maxWithKey(population, evaluateForOne);
    console.log(bestSolution);
    setBestSolution(bestSolution || []);
    setWasChanged(!wasChanged);
  };

  useEffect(() => {
    dispatch(addGraphic({ bestSolution }));
  }, [bestSolution]);

  // const addGraphicToWorker = () => {
  //   workers.forEach((person) => {
  //     let findInArrayIndex = [];
  //     for (let i = 0; i < bestSolution.length; i++) {
  //       let bS = bestSolution[i];
  //       if (bS.includes(person.name)) {
  //         findInArrayIndex.push([person.name, i]);
  //         console.log("ok");

  //         person.graphic.push(i);
  //         console.log(person.graphic);
  //         //  dispatch(addGraphic(person.name, person.graphic));
  //       }
  //     }
  //     // console.log(person);
  //   });
  // };

  //console.log(workers);

  return (
    <>
      <Button onClick={() => startGenerate()}>Generate</Button>
      {workers.map((person) => {
        return (
          <ScheduleContainer
            key={person.id}
            {...person}
            bestSolution={bestSolution}
            workShifts={workShifts}
          />
        );
      })}
    </>
  );
};

export default Generate;
