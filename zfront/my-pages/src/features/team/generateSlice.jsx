import { createSlice } from "@reduxjs/toolkit";
import teams from "../../data";

const initialState = {
  generate: teams,
  name: "",
  workers: "",
  isLoading: true,
};

const generateSlice = createSlice({
  name: "generate",
  initialState,
});

export default generateSlice.reducer;
