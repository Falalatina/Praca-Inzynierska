import React from "react";
import { useState } from "react";
import { data } from "./data";
import "./ppl-list.css";

const AddUser = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const [stage, setStage] = useState("");
  const [shifts, setShifts] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name, stage, shifts };
    const updatePeople = [...people, newPerson];
    setPeople(updatePeople);

    console.log(name);
    setName("");
    setStage("");
    setShifts("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add User</h3>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label htmlFor="stage" className="form-label">
          stage
        </label>
        <input
          type="text"
          className="form-input"
          id="stage"
          value={stage}
          onChange={(e) => setStage(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label htmlFor="shifts" className="form-label">
          shifts
        </label>
        <input
          type="text"
          className="form-input"
          id="shifts"
          value={shifts}
          onChange={(e) => setShifts(e.target.value)}
        />
      </div>

      <button type="submit" className="btn ">
        submit
      </button>
    </form>
  );
};

export default AddUser;
