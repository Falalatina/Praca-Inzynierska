import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
  hourOfStart: 6,
  howLong: 8,
  firstShift: true,
  numberOfEmployees1: 3,
  secondShift: true,
  numberOfEmployees2: 3,
  thirdShift: true,
  numberOfEmployees3: 1,
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
    toggleShift1: (state) => {
      state.firstShift = !state.firstShift;
    },
    toggleShift2: (state) => {
      state.secondShift = !state.secondShift;
    },
    toggleShift3: (state) => {
      state.thirdShift = !state.thirdShift;
    },
  },
});

export const {
  openModal,
  closeModal,
  updateHourOfStart,
  updateHowLong,
  toggleShift1,
  toggleShift2,
  toggleShift3,
} = modalSlice.actions;
export default modalSlice.reducer;
