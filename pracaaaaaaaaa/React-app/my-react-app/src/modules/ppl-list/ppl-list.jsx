import React from "react";
import { useState } from "react";
import { data } from "./data";
import "./ppl-list.css";

const renderPeopleOnList = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAllItems = () => {
    setPerson([]);
  };
  return (
    <section className="x ">
      <div className="people-list-container">
        {people.map((person) => {
          const { id, name, img, stage, shifts } = person;
          return (
            <section key={id} className="person-on-list">
              <img className="profilowe" src={img} />
              <div>{name}</div>
              <div>{stage}</div>
              <div>{shifts}</div>
              <button
                onClick={() => removeItem(id)}
                style={{ marginRight: "1rem" }}
              >
                Delete
              </button>
            </section>
          );
        })}
      </div>
      <button>Delete all </button>
    </section>
  );
};

export default renderPeopleOnList;
