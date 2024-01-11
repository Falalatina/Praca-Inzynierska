import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";

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

  const user = workers.find((person) => person.id === parseInt(userId));
  const teamIds = findTeamIdsByUserId(Number(userId));

  const getUserLocalStorageData = (teamId) => {
    const localStorageKey = `generateStateTeamId${teamId}`;
    const localStorageData = localStorage.getItem(localStorageKey);
    const parsedData = JSON.parse(localStorageData);
    return parsedData.savedWorkers.workers;
  };

  const savedWorker = teamIds.flatMap((teamId) =>
    getUserLocalStorageData(teamId)
  );

  const savedUser = savedWorker.filter(
    (person) => person.id === Number(userId)
  );

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
          const { id, graphic } = person;
          return <div key={graphic}>{graphic}</div>;
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
