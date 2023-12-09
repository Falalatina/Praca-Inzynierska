import React from "react";
import TeamCard from "./Teamcard";
import { useSelector } from "react-redux";

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
    <section>
      <header>
        <h1>Your teams: </h1>
        <h2>You have {amount} teams. </h2>
      </header>
      <div>
        {teams.map((item) => {
          return <TeamCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default TeamContainer;
