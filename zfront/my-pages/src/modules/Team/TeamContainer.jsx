import React from "react";
import TeamCard from "./Teamcard";
import { useDispatch, useSelector } from "react-redux";
import { Card, Grid, GridItem, CardBody } from "@chakra-ui/react";
import "./container.css";
import workers from "../../workers";
import { checkAmount } from "../../features/team/teamSlice";
import { changeWorkers } from "../../features/team/generateSlice";
import { useNavigate } from "react-router-dom";

const TeamContainer = () => {
  const { teams, amount } = useSelector((state) => state.team);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(checkAmount(teams.length));

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
    <section className="container">
      <Card variant="filled">
        <CardBody>
          <header>
            <h1>Your teams: </h1>
            <h2 className="txt">You have {amount} teams. </h2>
          </header>
          <div>
            <Grid templateColumns="repeat(2, 1fr)" gap={10}>
              {teams.map((team) => {
                const teamWorkers = getWorkersForTeam(team.id, workers);

                return (
                  <GridItem
                    key={team.id}
                    onClick={() => {
                      dispatch(changeWorkers(teamWorkers));
                      navigate("generate");
                    }}
                  >
                    <TeamCard key={team.id} {...team} workers={teamWorkers} />
                  </GridItem>
                );
              })}
            </Grid>
          </div>
        </CardBody>
      </Card>
    </section>
  );

  //loader
  const teamLoader = async () => {};
};

export default TeamContainer;
