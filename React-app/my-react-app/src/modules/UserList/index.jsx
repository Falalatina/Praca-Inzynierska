import RenderPeopleOnList from "./UserList";
import React from "react";

import { useState } from "react";
import { data, shiftsSystem } from "./data";

const index = () => {
  const [people, setPeople] = useState(data);
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState({
    name: "",
    stage: "",
    shifts: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name) return;
    const fakeId = Date.now();
    const name = user.name;
    const stage = user.stage;
    const shifts = user.shifts;
    const newPerson = { id: fakeId, name, stage, shifts };
    const updatePeople = [...people, newPerson];
    setPeople(updatePeople);

    // console.log(name);
    setUser({ name: "", stage: "", shifts: "" });
  };
  return (
    <div>
      <RenderPeopleOnList
        people={people}
        toggle={toggle}
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setPeople={setPeople}
        setToggle={setToggle}
      />
    </div>
  );
};

export default index;
