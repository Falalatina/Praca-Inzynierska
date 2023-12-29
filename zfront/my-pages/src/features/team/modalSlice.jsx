import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConfirm: false,
  isOpen: false,
  hourOfStart: 6,
  howLong: 8,
  firstShift: true,
  numberOfEmployees1: 3,
  secondShift: true,
  numberOfEmployees2: 3,
  thirdShift: true,
  numberOfEmployees3: 1,
  days: {
    mon: true,
    tues: true,
    wed: true,
    thurs: true,
    fri: true,
    sat: false,
    sun: false,
  },
  assignments: [
    "pn1",
    "pn2",
    "pn3",
    "wt1",
    "wt2",
    "wt3",
    "sr1",
    "sr2",
    "sr3",
    "czw1",
    "czw2",
    "czw3",
    "pt1",
    "pt2",
    "pt3",
  ],
  forceUpdate: false,
};

const idToAssignmentMap = {
  mon: "pn",
  tues: "wt",
  wed: "sr",
  thurs: "czw",
  fri: "pt",
  sat: "sob",
  sun: "nd",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openConfirm: (state) => {
      state.isConfirm = true;
    },
    closeConfirm: (state) => {
      state.isConfirm = false;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    updateHourOfStart: (state, action) => {
      state.hourOfStart = action.payload;
    },
    updateHowLong: (state, action) => {
      state.howLong = action.payload;
    },

    toggleShift: (state, action) => {
      const { shiftKey, shiftNumber } = action.payload;
      state[shiftKey] = !state[shiftKey];

      if (state.isConfirm && !state[shiftKey]) {
        state.assignments = state.assignments.filter(
          (a) => !a.endsWith(shiftNumber)
        );
      }
      if (!state[shiftKey]) {
        state[`numberOfEmployees${shiftNumber}`] = 0;
      }
      if (state[`numberOfEmployees${shiftNumber}`] === 0 && state[shiftKey]) {
        state[`numberOfEmployees${shiftNumber}`] = 1;
      }
      state.assignments = [];
      state.days = Object.fromEntries(
        Object.keys(state.days).map((day) => [day, false])
      );
    },

    updateNumberOfEmployees: (state, action) => {
      const { shiftNumber, value } = action.payload;
      if (value === 0) {
        console.log("cant be 0");
      } else {
        state[`numberOfEmployees${shiftNumber}`] = value;
      }
    },

    resetState: () => {
      return initialState;
    },
    toggleButton: (state, action) => {
      const buttonKey = action.payload;
      const isButtonChecked = !state.days[buttonKey];
      state.days[buttonKey] = isButtonChecked;

      if (isButtonChecked) {
        const shifts = ["firstShift", "secondShift", "thirdShift"];
        shifts.forEach((shift) => {
          if (state[shift]) {
            const shiftNumber =
              shift === "firstShift"
                ? "1"
                : shift === "secondShift"
                ? "2"
                : shift === "thirdShift"
                ? "3"
                : "";

            const newAssignment = `${idToAssignmentMap[buttonKey]}${shiftNumber}`;

            if (!state.assignments.includes(newAssignment)) {
              state.assignments.push(newAssignment);
            }
          }
        });
      } else {
        state.assignments = state.assignments.filter(
          (a) => !a.startsWith(idToAssignmentMap[buttonKey])
        );
      }

      // console.log(state.assignments);
    },
  },
});

export const {
  toggleButton,
  openModal,
  closeModal,
  updateHourOfStart,
  updateHowLong,
  toggleShift,
  updateNumberOfEmployees,
  resetState,
  openConfirm,
  closeConfirm,
} = modalSlice.actions;
export default modalSlice.reducer;
