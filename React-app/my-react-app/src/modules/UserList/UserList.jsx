import "./UserList.css";
import avatar from "../../assets/images/default-avatar.svg";
import AddUser from "./AddUser";
import Graphic from "./Graphic";

const RenderPeopleOnList = ({
  people,
  toggle,
  user,
  handleChange,
  handleSubmit,
  setPeople,
  setToggle,
}) => {
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAllItems = () => {
    setPeople([]);
  };
  return (
    <section className="x ">
      <Graphic user={user} people={people} />

      <div className="people-list-container">
        <div className="header-secion-list-ppl">
          <div></div>
          <div>Name</div>
          <div>Stage</div>
          <div>Shifts</div>
          <div></div>
        </div>
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
