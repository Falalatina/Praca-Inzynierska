import React from "react";

const ScheduleItem = ({ bestSolution }) => {
  // console.log(bestSolution);
  const workers = [
    { id: 1, name: "asia", preferences: { yes: ["pn1"], no: ["pn3", "wt3"] } },
    { id: 2, name: "basia", preferences: { yes: ["wt1"], no: ["wt2"] } },
    { id: 3, name: "kasia", preferences: { yes: ["sr1"], no: ["wt1"] } },
    { id: 4, name: "kacper", preferences: { yes: ["czw1"], no: ["czw1"] } },
  ];
  return (
    <section>
      {bestSolution[0] ? (
        <div>
          {bestSolution.map((item) => {
            return (
              <div>
                {item[0].map((inner) => {
                  return <div>{inner}</div>;
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ScheduleItem;
