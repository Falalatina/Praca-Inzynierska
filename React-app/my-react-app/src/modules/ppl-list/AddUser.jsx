import React from "react";
import { useState } from "react";
import { data } from "./data";
import "./ppl-list.css";

const AddUser = () => {
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
          value={user.name}
          onChange={handleChange}
          name="name"
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
          value={user.stage}
          onChange={handleChange}
          name="stage"
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
          value={user.shifts}
          onChange={handleChange}
          name="shifts"
        />
      </div>

      <button type="submit" className="btn ">
        submit
      </button>
    </form>
  );
};

export default AddUser;
