import { createSlice } from "@reduxjs/toolkit";
import teams from "../../data";

const initialState = {
  items: teams,
  name: "",
  workers: [
    {
      id: "",
      name: "",
      stage: "",
      shifts: "s",
      preferences: { yes: [], no: [] },
      graphic: {
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: " ",
      },
    },
  ],
  isLoading: true,
};

const generateSlice = createSlice({
  name: "generate",
  initialState,
  reducers: {
    autoSchedule: (state) => {
      console.log();
    },
  },
});

export const { autoSchedule } = generateSlice.actions;
export default generateSlice.reducer;
