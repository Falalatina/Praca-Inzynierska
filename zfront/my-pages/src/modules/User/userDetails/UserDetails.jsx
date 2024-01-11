import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import ScheduleContainer from "../../GenerateSchedule/ScheduleContainer";

const UserDetails = () => {
  const { workers } = useSelector((store) => store.user);
  const { userId } = useParams();
  const teams = useLoaderData();

  const findTeamIdsByUserId = (userId) => {
    const matchingTeams = teams.filter((team) =>
      team.workerIds.includes(userId)
    );
    return matchingTeams.map((team) => team.id);
  };

  const findTeamNameById = (teamId) => {
    const team = teams.find((team) => team.id === teamId);
    return team ? team.teamName : null;
  };

  const user = workers.find((person) => person.id === parseInt(userId));
  const teamIds = findTeamIdsByUserId(Number(userId));

  const getUserLocalStorageData = (teamId) => {
    const localStorageKey = `generateStateTeamId${teamId}`;
    const localStorageData = localStorage.getItem(localStorageKey);
    const parsedData = JSON.parse(localStorageData);
    return parsedData;
  };

  const savedWorker = teamIds.flatMap((teamId) =>
    getUserLocalStorageData(teamId)
  );

  const sWW = savedWorker.map((data) => {
    const worker = data.savedWorkers?.workers || [];
    const user = worker.find((person) => person.id === Number(userId));

    // Dodaj pole 'assignments' do user
    if (user) {
      user.assignments = data.savedWorkers?.assignments || [];
      user.idTeam = data.savedWorkers?.teamId || [];
    }

    return user;
  });

  const savedUser = sWW.filter((person) => person.id === Number(userId));

  //console.log(savedWorker, savedUser);

  return (
    <div>
      <div>User ID: {userId}</div>
      <div>User Name: {user.name}</div>
      {teamIds.length > 0 ? (
        <div>
          Belongs to teams:{" "}
          {teamIds
            .map((teamId) => teams.find((team) => team.id === teamId)?.teamName)
            .join(", ")}
        </div>
      ) : (
        " Haven't found matching teams"
      )}
      <div>
        {savedUser.map((person) => {
          const { assignments, idTeam } = person;
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
    </div>
  );
};

export const userDLoader = async () => {
  const res = await fetch("http://localhost:4000/teams");
  return res.json();
};

export default UserDetails;
