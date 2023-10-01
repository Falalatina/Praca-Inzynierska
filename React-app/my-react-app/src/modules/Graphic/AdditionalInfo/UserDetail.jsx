import React from "react";
import "./UserDetail.css";
import { useGlobalContext } from "../../../Context";

import { CloseButton } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

const UserDetail = ({ getPerson, toggle, setToggle }) => {
  return (
    <section className="user-detail-container">
      <h2>UserDetail</h2>
      <Divider style={{ marginBottom: "1rem" }} />
      <button className=" btn btn-edit">Edit</button>
      <div className="info-container">
        <div>
          <h3>Name:</h3>
          <h3>Stage:</h3>
          <h3>Shifts:</h3>
        </div>
        <div>
          <h3>{getPerson[0].name}</h3>
          <h3>{getPerson[0].stage}</h3>
          <h3>{getPerson[0].shifts}</h3>
        </div>
      </div>
      <h3>Preferences: </h3>

      <div>
        {getPerson[0]?.preferences ? (
          <div className="preferences-container">
            {getPerson[0].preferences.yes ? (
              <div>
                <Divider style={{ marginBottom: "1rem" }} />
                <h4>
                  <CheckIcon />
                </h4>
                <div>{getPerson[0]?.preferences?.yes}</div>
              </div>
            ) : (
              <div></div>
            )}

            {getPerson[0].preferences.no ? (
              <div>
                <Divider style={{ marginBottom: "1rem" }} />
                <h4>
                  <CloseIcon />
                </h4>
                <div>{getPerson[0]?.preferences?.no}</div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="btn-return" onClick={() => setToggle(!toggle)}>
        <CloseButton />
      </div>
    </section>
  );
};

export default UserDetail;
