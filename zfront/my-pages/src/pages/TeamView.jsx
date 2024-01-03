import React from "react";
import Generate from "../modules/GenerateSchedule";
import UserList from "../modules/UserList";

const TeamView = () => {
  return (
    <div>
      <Generate />
      <UserList />
    </div>
  );
};

export default TeamView;
