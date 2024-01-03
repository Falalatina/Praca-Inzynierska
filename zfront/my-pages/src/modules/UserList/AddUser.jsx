import React from "react";

import "./UserList";

import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";

const AddUser = ({ handleChange, handleSubmit, toggle }) => {
  const { user } = useGlobalContext();

  const goTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScaleFade initialScale={0.9} in={toggle}>
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
          <select
            id="shifts"
            value={user.shifts}
            onChange={handleChange}
            name="shifts"
            className="form-input"
          >
            <option></option>
            {shiftsSystem.map((shift) => {
              return <option key={shift}>{shift}</option>;
            })}
          </select>
        </div>

        <button type="submit" className="btn ">
          submit
        </button>
      </form>
    </ScaleFade>
  );
};

export default AddUser;
