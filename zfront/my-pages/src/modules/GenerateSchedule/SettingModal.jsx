import React from "react";
import "./modal.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/team/modalSlice";
import { Switch } from "@chakra-ui/react";

const SettingModal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h3>Generator settings</h3>
        <div className="btn-container">
          <h4>Hej</h4>
          <Switch size="lg" />
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => dispatch(closeModal())}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SettingModal;
