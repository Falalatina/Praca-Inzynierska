import React from "react";
import { useState } from "react";
import { data } from "./data";
import "./ppl-list.css";
import avatar from "../../assets/images/default-avatar.svg";

const renderPeopleOnList = () => {
  const [people, setPeople] = useState(data);

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
                type="button"
                onClick={() => removeItem(id)}
                style={{ marginRight: "1rem" }}
              >
                Delete
              </button>
            </section>
          );
        })}
      </div>
      <button type="button" onClick={clearAllItems}>
        Delete all
      </button>
    </section>
  );
};

export default renderPeopleOnList;
