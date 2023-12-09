import { createSlice } from "@reduxjs/toolkit";
import teams from "../../data";

const initialState = {
  teams: teams,
  name: "",
  workers: "",
  amount: 2,
  isLoading: true,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
});

export default teamSlice.reducer;
