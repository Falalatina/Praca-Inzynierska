import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWorkers = createAsyncThunk(
  "generate/fetchWorkers",
  async () => {
    const res = await fetch("http://localhost:4000/workers");
    return res.json();
  }
);

const initialState = {
  workers: [],
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
    updateGraphicForPerson: (state, action) => {
      const { id, graphic } = action.payload;
      const workerIndex = state.workers.findIndex((worker) => worker.id === id);

      if (workerIndex !== -1) {
        // Znaleziono pracownika o określonym ID, aktualizuj grafik
        state.workers[workerIndex].graphic = graphic;
      }
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
  addGraphic,
  startLoading,
  stopLoading,
  removeGraphic,
  changeWorkers,
  updateGraphicForPerson,
} = generateSlice.actions;
export default generateSlice.reducer;
