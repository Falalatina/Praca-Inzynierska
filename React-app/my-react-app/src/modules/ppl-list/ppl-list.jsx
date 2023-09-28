import React, { useEffect } from "react";
import { useState } from "react";
import { data, shiftsSystem } from "./data";
import "./ppl-list.css";
import avatar from "../../assets/images/default-avatar.svg";
import AddUser from "./AddUser";

const RenderPeopleOnList = () => {
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
        <AddUser
          user={user}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div> </div>
      )}
    </section>
  );
};

export default RenderPeopleOnList;
