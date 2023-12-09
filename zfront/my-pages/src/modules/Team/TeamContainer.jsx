import React from "react";
import TeamCard from "./Teamcard";
import { useSelector } from "react-redux";
import { Grid, GridItem } from "@chakra-ui/react";
import "./container.css";

const TeamContainer = () => {
  const { teams, amount } = useSelector((state) => state.team);

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
      <header>
        <h1>Your teams: </h1>
        <h2 className="txt">You have {amount} teams. </h2>
      </header>
      <div>
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          {teams.map((item) => {
            return (
              <GridItem key={item.id}>
                <TeamCard key={item.id} {...item} />
              </GridItem>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default TeamContainer;
