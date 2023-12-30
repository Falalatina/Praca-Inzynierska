import { createSlice } from "@reduxjs/toolkit";
import teams from "../../data";

const initialState = {
  teams: teams,
  name: "",
  workers: "",
  amount: 0,
  isLoading: true,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    checkAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});
export const { checkAmount } = teamSlice.actions;
export default teamSlice.reducer;
