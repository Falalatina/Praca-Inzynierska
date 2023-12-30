import { createSlice } from "@reduxjs/toolkit";
import teams from "../../data";
import workers from "../../workers";

const initialState = {
  workers: workers,
  graphic: [],
  isLoading: false,
};

const generateSlice = createSlice({
  name: "generate",
  initialState,
  reducers: {
    addGraphic: (state, { payload }) => {
      const { bestSolution } = payload;
      state.workers.forEach((person) => {
        let findInArrayIndex = [];
        for (let i = 0; i < bestSolution.length; i++) {
          let bS = bestSolution[i];
          if (bS.includes(person.name)) {
            findInArrayIndex.push([person.name, i]);
            //console.log("ok");

            person.graphic.push(i);
            //console.log(person.graphic);
            //  dispatch(addGraphic(person.name, person.graphic));
            state.isLoading = false;
          }
        }
        // console.log(person);
      });
    },
    removeGraphic: (state) => {
      state.workers.forEach((person) => {
        person.graphic = [];
      });
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    changeWorkers: (state, actions) => {
      state.workers = actions.payload;
    },
  },
});

export const {
  addGraphic,
  startLoading,
  stopLoading,
  removeGraphic,
  changeWorkers,
} = generateSlice.actions;
export default generateSlice.reducer;
