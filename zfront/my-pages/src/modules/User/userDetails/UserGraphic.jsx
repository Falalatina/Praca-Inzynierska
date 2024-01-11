import { useEffect } from "react";
import ScheduleContainer from "../../GenerateSchedule/ScheduleContainer";

const UserGraphic = ({ setTotalSum, teamIds, userId, teams }) => {
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

    return user;
  });

  const savedUser = sWW.filter((person) => person.id === Number(userId));

  useEffect(() => {
    let totalSum = 0;

    sWW.forEach((person) => {
      if (person) {
        totalSum += getTheSum(person);
      }
    });

    setTotalSum(totalSum);
  }, [sWW, setTotalSum]);

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
