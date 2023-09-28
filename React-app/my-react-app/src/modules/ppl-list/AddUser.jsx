import React from "react";
import { useState } from "react";
import { data, shiftsSystem } from "./data";
import "./ppl-list.css";

const AddUser = ({ user, handleChange, handleSubmit }) => {
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
  );
};

export default AddUser;
