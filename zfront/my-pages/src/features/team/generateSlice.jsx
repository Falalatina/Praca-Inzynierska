import { createSlice } from "@reduxjs/toolkit";
import teams from "../../data";

const initialState = {
  items: teams,
  name: "",
  workers: "",
  isLoading: true,
};

const generateSlice = createSlice({
  name: "generate",
  initialState,
  reducers: {
    autoSchedule: (state) => {
      console.log(state.items);
    },
  },
});

export const { autoSchedule } = generateSlice.actions;
export default generateSlice.reducer;
