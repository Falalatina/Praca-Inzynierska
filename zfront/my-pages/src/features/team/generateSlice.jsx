import { createSlice } from "@reduxjs/toolkit";
import teams from "../../data";
import workers from "../../workers";

const initialState = {
  workers: workers,
  graphic: [],
  isLoading: true,
};

const generateSlice = createSlice({
  name: "generate",
  initialState,
  reducers: {
    addGraphic: (state, { payload }) => {
      const { name, newGraphic } = payload;
      state.workers = state.workers.find((worker) => worker.name === name);
      workers.graphic = newGraphic;
    },
  },
});

export const { addGraphic } = generateSlice.actions;
export default generateSlice.reducer;
