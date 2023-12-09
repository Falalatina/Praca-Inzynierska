import React from "react";

const TeamCard = ({ id, name, workers }) => {
  return (
    <div style={{ backgroundColor: "yellow", margin: 1 }}>
      {workers.map((item) => {
        const { id, name } = item;
        return <div>{(id, name)}</div>;
      })}
    </div>
  );
};

export default TeamCard;
