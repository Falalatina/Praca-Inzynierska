import React from "react";
import { useState } from "react";
import { data } from "./data";
import "./ppl-list.css";
import avatar from "../../assets/images/default-avatar.svg";

const RenderPeopleOnList = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const [stage, setStage] = useState("");
  const [shifts, setShifts] = useState("");
  const [toggle, setToggle] = useState(false);

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

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAllItems = () => {
    setPeople([]);
  };
  return (
    <section className="x ">
      <div className="header-secion-list-ppl">
        <div></div>
        <div>Name</div>
        <div>Stage</div>
        <div>Shifts</div>
        <div></div>
      </div>
      <div className="people-list-container">
        {people.map((person) => {
          const { id, name, img, stage, shifts } = person;
          const image = img ?? avatar;
          return (
            <section key={id} className="person-on-list">
              <img className="profilowe" src={image} />
              <div>{name}</div>
              <div>{stage}</div>
              <div>{shifts}</div>
              <button
                className="btn"
                type="button"
                onClick={() => removeItem(id)}
                style={{ marginRight: "1rem", backgroundColor: "red" }}
              >
                Delete
              </button>
            </section>
          );
        })}

        <button
          className="btn-delete btn"
          style={{ backgroundColor: "red" }}
          type="button"
          onClick={clearAllItems}
        >
          Delete all
        </button>

        <section className="person-on-list">
          <div></div>
          <button
            className="btn"
            type="button"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "Hide Add User" : "Add User"}
          </button>
          <div></div>
        </section>
      </div>
      {toggle ? (
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
      ) : (
        <div> </div>
      )}
    </section>
  );
};

export default RenderPeopleOnList;
