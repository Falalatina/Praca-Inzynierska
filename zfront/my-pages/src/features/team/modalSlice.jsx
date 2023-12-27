import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
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
      if (!state[shiftKey]) {
        state[`numberOfEmployees${shiftNumber}`] = 0;
      }
    },
    updateNumberOfEmployees: (state, action) => {
      const { shiftNumber, value } = action.payload;
      state[`numberOfEmployees${shiftNumber}`] = value;
    },

    resetState: (state) => {
      return initialState;
    },
    toggleButton: (state, action) => {
      const buttonKey = action.payload;
      state.days[buttonKey] = !state.days[buttonKey];

      if (state.days[buttonKey]) {
        if (state.firstShift === true) {
          state.assignments.push(`${idToAssignmentMap[buttonKey]}1`);
        }
        if (state.secondShift === true) {
          state.assignments.push(`${idToAssignmentMap[buttonKey]}2`);
        }
        if (state.thirdShift === true) {
          state.assignments.push(`${idToAssignmentMap[buttonKey]}3`);
        }
      }
      if (!state.days[buttonKey]) {
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
} = modalSlice.actions;
export default modalSlice.reducer;
