import { createSlice } from "@reduxjs/toolkit";
import teams from "../../data";

const initialState = {
  teams: teams,
  name: "",
  workers: "",
  isLoading: true,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
});

export default teamSlice.reducer;
