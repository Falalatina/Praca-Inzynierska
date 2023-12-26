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
  },
});

export const { openModal, closeModal, updateHourOfStart, updateHowLong } =
  modalSlice.actions;
export default modalSlice.reducer;
