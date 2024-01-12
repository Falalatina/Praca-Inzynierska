import { Button } from "@chakra-ui/react";

import { React, useEffect, useState, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getWorkersForTeam } from "../Team/TeamContainer";

import {
  addGraphic,
  removeGraphic,
  startLoading,
  changeCurrentWorkers,
  updateAssignments,
} from "../../features/team/generateSlice";
import ScheduleContainer from "./ScheduleContainer";

import { checkAmount, fetchTeams } from "../../features/team/teamSlice";

const Generate = () => {
  const dispatch = useDispatch();
  const [bestSolution, setBestSolution] = useState([]);
  const [population, setPopulation] = useState([]);
  const {
    currentWorkers,
    isLoading,
    workers: w,
  } = useSelector((store) => store.generate);
  const { assignments } = useSelector((store) => store.modal);
  const { teams } = useSelector((store) => store.team);
  const [newGeneration, setNewGeneration] = useState(0);
  const { shiftOccupied } = useSelector((store) => store.user);
  const { isOpen, numberOfEmployees1, numberOfEmployees2, numberOfEmployees3 } =
    useSelector((store) => store.modal);
  const { teamId } = useParams();
  let workers = currentWorkers;

  // Przekazuj teams i currentWorkers do funkcji getWorkersForTeam

  //console.log(workers);

  //fetchuje workerów by miec wszystkich dostepnych pomimo reload i teamy
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchTeams());
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkAmount(teams.length));
    const teamWorkers = getWorkersForTeam(Number(teamId), teams, w);
    // console.log(teamWorkers);
    //sprawdzam, czy nie sa elementy undefined jak nie ma to changeCurrentWorkers
    const areElementsDefined = (array) => {
      return array.every((element) => element !== undefined);
    };
    if (areElementsDefined(teamWorkers)) {
      dispatch(changeCurrentWorkers(teamWorkers));
    }
  }, [teams.length, dispatch, getWorkersForTeam, teamId, w, teams]);

  /////
  ///////
  //////
  useEffect(() => {
    setNewGeneration((prevGeneration) => prevGeneration + 1);
  }, [isOpen]);

  const [e1, setE1] = useState(numberOfEmployees1);
  const [e2, setE2] = useState(numberOfEmployees2);
  const [e3, setE3] = useState(numberOfEmployees3);
  const [workShifts, setWorkShifts] = useState(assignments);

  useEffect(() => {
    setE1(numberOfEmployees1);
    setE2(numberOfEmployees2);
    setE3(numberOfEmployees3);
    setWorkShifts(assignments);
    dispatch(updateAssignments(assignments));
  }, [numberOfEmployees1, numberOfEmployees2, numberOfEmployees3, assignments]);

  const numberOfIterations = 100;
  const numberOfParents = 10;
  const mutate = 50;

  //console.log(assignments);

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
    numberOfEmployees1,
    numberOfEmployees2,
    numberOfEmployees3
  ) => {
    for (let i = 0; i < numberOfParents; i++) {
      const chromosome = [];

      for (let index = 0; index < workShifts.length; index++) {
        // console.log(workShifts.length);
        const day = [];
        const re1 = /.+[1]/;
        const re2 = /.+[2]/;
        const re3 = /.+[3]/;
        if (workShifts[index].match(re1)) {
          for (let i = 0; i < numberOfEmployees1; i++) {
            day.push(randomElement(workers).name);
            //  console.log(randomElement(workers).name);
          }
        }
        if (workShifts[index].match(re2)) {
          for (let i = 0; i < numberOfEmployees2; i++) {
            day.push(randomElement(workers).name);
          }
        }
        if (workShifts[index].match(re3)) {
          for (let i = 0; i < numberOfEmployees3; i++) {
            day.push(randomElement(workers).name);
          }
        }
        // console.log("DAY: ", day);
        chromosome.push(day);
      }
      //console.log("CHROMOSOME: ", chromosome);

      population.push(chromosome);

      // console.log("POPULATION: ", population);
    }
  };
  const evaluateForOne = (item) => {
    let fitness = 0;

    for (let i1 = 0; i1 < item.length - 2; i1++) {
      for (let i2 = 0; i2 < item[i1].length; i2++) {
        if (
          item[i1 + 2].includes(item[i1][i2]) ||
          item[i1 + 1].includes(item[i1][i2])
        ) {
          fitness -= 1;
        }
      }
    }

    item.map((innerItem) => {
      for (let index = 0; index < innerItem.length - 1; index++) {
        if (innerItem[index] === innerItem[index + 1]) {
          fitness = fitness - 10;
        }
        if (innerItem[index] === innerItem[index + 2]) {
          fitness = fitness - 5;
        }
        if (innerItem[index] === innerItem[index + 3]) {
          fitness = fitness - 5;
        }
        // console.log(workShifts[index]); - pn1 pn2 etc.
        const array = [workers[index].preferences.yes];
        // console.log(array[0].length );
        for (let i = 0; i < array[0].length; i++) {
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
      //console.log([...population]);
      if (contestant1 === contestant2) {
        contestant2 = randomElement(population);
      }
      let pointsForC1 = evaluateForOne(contestant1);
      let pointsForC2 = evaluateForOne(contestant2);

      // console.log(pointsForC1);

      if (pointsForC1 > pointsForC2) {
        winner = contestant1;
      } else {
        winner = contestant2;
      }
      // console.log(winner);
      selectedToMate.push(winner);
    }
    //console.log(selectedToMate[1]);
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
    //console.log(child[0]);
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
  // console.log(population);
  const startGenerate = () => {
    if (population.length > 0) {
      setPopulation([]);
    }
    createStartingPopulation(numberOfParents, workShifts, e1, e2, e3);

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

  const start = () => {
    dispatch(removeGraphic());
    dispatch(startLoading());
    setNewGeneration(newGeneration + 1);

    setTimeout(startGenerate(), 0);
  };

  const handleSave = () => {
    const item = JSON.parse(
      localStorage.getItem(`generateStateTeamId${teamId}`)
    );

    let savedWorkers = item.savedWorkers.workers;
    console.log(savedWorkers);
    if (savedWorkers.length !== 0) {
      dispatch(changeCurrentWorkers(savedWorkers));
    }
    console.log(workers);
  };
  return (
    <>
      <Button ml={3} onClick={() => handleSave()}>
        Show Saved Graphic
      </Button>
      <Button style={{ margin: "1rem" }} onClick={() => start()}>
        Generate
      </Button>

      {workers.map((person) => {
        return (
          <ScheduleContainer
            key={person.id}
            {...person}
            bestSolution={bestSolution}
            workShifts={workShifts}
            isLoading={isLoading}
          />
        );
      })}
    </>
  );
};

export default Generate;
