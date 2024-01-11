import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

export const fetchWorkers = createAsyncThunk(
  "generate/fetchWorkers",
  async () => {
    try {
      const resp = await axios("http://localhost:4000/workers");
      //   console.log(resp.data);
      return resp.data;
    } catch (error) {}
  }
);

const initialState = {
  workers: [],
  currentWorkers: [],
  graphic: [],
  howLongS: 8,
  assignments: [],
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
        person.hoursSum = person.graphic.length * state.howLongS;
        // console.log(person);
      });
    },
    removePerson: (state, action) => {
      const { id } = action.payload;
      state.currentWorkers = state.currentWorkers.filter(
        (person) => person.id !== id
      );
    },
    changeSum: (state, action) => {
      const { howLong } = action.payload;
      state.howLongS = howLong;
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
    changeWorkers: (state, action) => {
      state.workers = action.payload;
    },
    changeCurrentWorkers: (state, action) => {
      state.currentWorkers = action.payload;
    },
    updateGraphicForPerson: (state, action) => {
      const { id, graphic } = action.payload;
      const workerIndex = state.currentWorkers.findIndex(
        (worker) => worker.id === id
      );

      if (workerIndex !== -1) {
        // Znaleziono pracownika o określonym ID, aktualizuj grafik
        state.currentWorkers[workerIndex].graphic = graphic;
        state.currentWorkers[workerIndex].hoursSum =
          state.howLongS * state.currentWorkers[workerIndex].graphic.length;
      }
    },
    updateAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    saveToLocalStorage: (state, action) => {
      const { teamId } = action.payload;
      localStorage.setItem(
        `generateStateTeamId${teamId}`,
        JSON.stringify({
          savedWorkers: {
            teamId: teamId,
            workers: state.currentWorkers,
            assignments: state.assignments,
          },
        })
      );
    },
  },
  extraReducers: (builder) => {
    // Obsługa zdarzenia związanego z pobieraniem danych
    builder.addCase(fetchWorkers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWorkers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.workers = action.payload;
    });
    builder.addCase(fetchWorkers.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  updateAssignments,
  addGraphic,
  startLoading,
  stopLoading,
  removeGraphic,
  changeWorkers,
  updateGraphicForPerson,
  saveToLocalStorage,
  changeCurrentWorkers,
  removePerson,
  changeSum,
} = generateSlice.actions;
export default generateSlice.reducer;

// export const fetchDataIfNeeded = () => (dispatch, getState) => {
//   const state = getState();
//   if (!state.generate.workersFetched) {
//     return dispatch(fetchWorkers());
//   }
// };
