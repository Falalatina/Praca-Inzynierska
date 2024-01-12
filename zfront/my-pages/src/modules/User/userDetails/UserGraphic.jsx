import { useEffect } from "react";
import ScheduleContainer from "../../GenerateSchedule/ScheduleContainer";
import { findDay } from "../../GenerateSchedule/ScheduleContainer";
import { useDispatch } from "react-redux";
import { updateShiftOccupied } from "../../../features/team/userSlice";

const UserGraphic = ({ setTotalSum, teamIds, userId, teams }) => {
  const dispatch = useDispatch();
  const getUserLocalStorageData = (teamId) => {
    const localStorageKey = `generateStateTeamId${teamId}`;
    const localStorageData = localStorage.getItem(localStorageKey);
    const parsedData = JSON.parse(localStorageData);
    return parsedData;
  };

  const savedWorker = teamIds.flatMap((teamId) =>
    getUserLocalStorageData(teamId)
  );

  const getTheSum = (user) => {
    const { graphic, howLongS } = user;
    return graphic.length * Number(howLongS);
  };

  const sWW = savedWorker.map((data) => {
    const worker = data.savedWorkers?.workers || [];
    const user = worker.find((person) => person.id === Number(userId));

    if (user) {
      user.assignments = data.savedWorkers?.assignments || [];
      user.idTeam = data.savedWorkers?.teamId || [];
      user.howLongS = data.savedWorkers?.howLongS || [];
    }
    // console.log(user);
    return user;
  });

  const savedUser = sWW.filter((person) => person.id === Number(userId));
  const daysOfWeek = ["pn", "wt", "sr", "czw", "pt", "sob", "nd"];

  useEffect(() => {
    let totalSum = 0;

    const indexesOfShift = savedUser.map((user) => {
      const graphic = user.graphic;
      return [...graphic];
    });

    sWW.forEach((person) => {
      const { assignments, id, name } = person;
      if (person) {
        totalSum += getTheSum(person);
        const indexesOfDays = findDay(assignments, daysOfWeek);
        // console.log(indexesOfDays);
        const numbers = assignments.map((element) =>
          parseInt(element.match(/\d+/)[0])
        );

        const shiftsNumber = Math.max(...numbers);
        // console.log(shiftsNumber);

        const arrayOfDays = Object.keys(assignments).flatMap((day) => {
          const categoryData = assignments[day]; //wszystkie

          return categoryData;
        });

        dispatch(
          updateShiftOccupied({
            id,
            name,
            shifts: arrayOfDays,
            indexesOfShift: indexesOfShift,
          })
        );

        const result = indexesOfShift.map((indices) => {
          return indices
            .filter((index) => index >= 0 && index < arrayOfDays.length)
            .map((index) => arrayOfDays[index]);
        });
        console.log("result", result);
        //  console.log(arrayOfDays);
      }
    });

    setTotalSum(totalSum);
  }, [setTotalSum]);

  const findTeamNameById = (teamId) => {
    const team = teams.find((team) => team.id === teamId);
    return team ? team.teamName : null;
  };

  return (
    <div>
      {savedUser.map((person) => {
        const { assignments, idTeam, graphic, howLongS } = person;
        const name = findTeamNameById(Number(idTeam));
        //console.log(name);

        return (
          <ScheduleContainer
            isUser={true}
            key={idTeam}
            {...person}
            name={name}
            workShifts={assignments}
            isLoading={false}
          />
        );
      })}
    </div>
  );
};

export default UserGraphic;
