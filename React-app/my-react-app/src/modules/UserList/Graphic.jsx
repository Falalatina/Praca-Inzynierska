import React from "react";
import "./Graphic.css";
import "./UserList";

const Graphic = ({ user, people }) => {
  return (
    <section>
      <div className="grafik-container">
        <div>
          <div className="week-container">
            <div className="name"> User</div>
            <div className="day-in-week">
              Monday
              <div className="date-time-day">21.08</div>
            </div>
            <div className="day-in-week">
              Tuesday
              <div className="date-time-day">22.08</div>
            </div>
            <div className="day-in-week">
              Wednesday
              <div className="date-time-day">23.08</div>
            </div>
            <div className="day-in-week">
              Thursday
              <div className="date-time-day">24.08</div>
            </div>
            <div className="day-in-week">
              Friday
              <div className="date-time-day">25.08</div>
            </div>
            <div className="day-in-week">
              Saturday
              <div className="date-time-day">26.08</div>
            </div>
            <div className="day-in-week">
              Sunday
              <div className="date-time-day">27.08</div>
            </div>
          </div>

          {people.map((person) => {
            const { name } = person;
            return (
              <div className="grid-shift-container" key={name}>
                <div className="workers-container">
                  <div className="worker">
                    <h3>{name}</h3>
                  </div>
                </div>
                <div className="shift-container">
                  <div className="off-day">
                    X<div className="tooltip">OFF DAY</div>
                  </div>
                </div>
                <div className="shift-container">
                  <div className="first-shift">
                    6&#58;00 &ndash; 14&#58;00
                    <div className="tooltip">FIRST SHIFT</div>
                  </div>
                </div>
                <div className="shift-container">
                  <div className="second-shift">
                    14&#58;00 &ndash; 22&#58;00
                    <div className="tooltip">SECOND SHIFT</div>
                  </div>
                </div>
                <div className="shift-container">
                  <div className="third-shift">
                    22&#58;00 &ndash; 6&#58;00
                    <div className="tooltip">THIRD SHIFT</div>
                  </div>
                </div>
                <div className="shift-container"></div>
                <div className="shift-container">
                  <div className="first-shift">
                    6&#58;00 &ndash; 14&#58;00
                    <div className="tooltip">FIRST SHIFT</div>
                  </div>
                </div>
                <div className="shift-container"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Graphic;
