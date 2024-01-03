import "./UserList.css";

import AddUser from "./AddUser";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { removePerson } from "../../features/team/generateSlice";
import { removePersonFromTeam } from "../../features/team/teamSlice";

const RenderPeopleOnList = () => {
  const [toggle, setToggle] = useState(false);
  const { currentWorkers } = useSelector((store) => store.generate);
  const dispatch = useDispatch();
  const { teamId } = useParams();

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

  const clearAllItems = () => {
    setPeople([]);
  };

  const showForm = () => {
    setToggle(!toggle);
    setTimeout(() => {
      window.scroll({
        top: 1900,
        behavior: "smooth",
      });
    }, 0);
  };

  const handleRemove = (teamId, id) => {
    dispatch(removePerson({ id }));
    dispatch(removePersonFromTeam({ teamId, id }));
  };

  return (
    <section className="x ">
      <div className="people-list-container">
        <div className="header-secion-list-ppl">
          <div></div>
          <div>Name</div>
          {/* <div>Stage</div>
          <div>Shifts</div> */}
          <div></div>
        </div>
        {currentWorkers.map((person) => {
          const { id, name } = person;

          return (
            <section key={id} className="person-on-list">
              <div>{name}</div>

              <button
                className="btn"
                type="button"
                onClick={handleRemove(teamId, id)}
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
          <button className="btn" type="button" onClick={showForm}>
            {toggle ? "Hide Add User" : "Add User"}
          </button>
          <div></div>
        </section>
      </div>
      {toggle ? (
        <AddUser
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          toggle={toggle}
        />
      ) : (
        <div> </div>
      )}
    </section>
  );
};

export default RenderPeopleOnList;
