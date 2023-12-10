import React from "react";
import TeamCard from "./Teamcard";
import { useSelector } from "react-redux";
import { Card, Grid, GridItem, CardBody } from "@chakra-ui/react";
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
      <Card variant="filled">
        <CardBody>
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
        </CardBody>
      </Card>
    </section>
  );
};

export default TeamContainer;
