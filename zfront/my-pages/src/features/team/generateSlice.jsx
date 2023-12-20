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
          }
        }
        // console.log(person);
      });
    },
  },
});

export const { addGraphic } = generateSlice.actions;
export default generateSlice.reducer;
