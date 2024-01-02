import React, { useEffect } from "react";
import TeamCard from "./Teamcard";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  Grid,
  GridItem,
  CardBody,
  CircularProgress,
} from "@chakra-ui/react";

import "./container.css";

import { checkAmount, fetchTeams } from "../../features/team/teamSlice";
import { changeWorkers } from "../../features/team/generateSlice";

import { useLoaderData, useNavigate } from "react-router-dom";

const TeamContainer = () => {
  const { teams, amount, isLoading } = useSelector((state) => state.team);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchTeams());
      dispatch(checkAmount(teams.length));
    };

    fetchData();
  }, [dispatch, teams.length]);

  const data = useLoaderData();
  const workers = JSON.parse(JSON.stringify(data));

  //funkcja do szukania workerów po id
  const getWorkersForTeam = (teamId) => {
    const team = teams.find((t) => t.id === teamId);
    if (team) {
      const teamWorkers = team.workerIds.map((workerId) =>
        workers.find((worker) => worker.id === workerId)
      );
      return teamWorkers;
    }
    return [];
  };
  ///

  if (amount < 1) {
    return (
      <section>
        <header>
          <h1>Your teams :</h1>
          <h4>You do not have any teams.</h4>
        </header>
      </section>
    );
  }
  return (
    <>
      {isLoading ? (
        <div>
          <CircularProgress isIndeterminate color="green.300" />
        </div>
      ) : (
        <section className="container">
          <Card bg="rgb(0,0,0,0);">
            <CardBody>
              <header className="header-container">
                <h2>Your teams: </h2>
                <h4 className="txt">You have {amount} teams. </h4>
              </header>
              <div>
                <Grid
                  templateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                  }}
                  gap={7}
                >
                  {teams.map((team) => {
                    const teamWorkers = getWorkersForTeam(team.id, workers);

                    return (
                      <GridItem
                        key={team.id}
                        onClick={() => {
                          dispatch(changeWorkers(teamWorkers));
                          navigate("generate/" + team.id.toString());
                        }}
                      >
                        <TeamCard
                          key={team.id}
                          {...team}
                          workers={teamWorkers}
                        />
                      </GridItem>
                    );
                  })}
                </Grid>
              </div>
            </CardBody>
          </Card>
        </section>
      )}
    </>
  );
};
//loader
export const teamLoader = async () => {
  const res = await fetch("http://localhost:4000/workers");
  return res.json();
};

export default TeamContainer;
