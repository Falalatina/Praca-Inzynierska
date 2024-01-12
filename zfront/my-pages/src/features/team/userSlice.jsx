import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
  isLoading: false,
  shiftOccupied: [],
  shifts: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateShiftOccupied: (state, action) => {
      const { id, name, shifts, indexesOfShift } = action.payload;
      // console.log(id, name, shifts);

      const uniqueShiftsSet = new Set([...state.shifts, ...shifts]);

      // Przekształć Set z powrotem na tablicę
      const uniqueShiftsArray = [...uniqueShiftsSet];

      console.log(id, name, uniqueShiftsArray);

      const result = indexesOfShift.map((indices) => {
        return indices
          .filter((index) => index >= 0 && index < uniqueShiftsArray.length)
          .map((index) => uniqueShiftsArray[index]);
      });

      const res2 = [...result];
      console.log("result", res2.flat(Infinity));

      // Zaktualizuj stan Redux z unikalnymi shiftami
      return {
        ...state,
        shifts: uniqueShiftsArray,
      };
    },
  },
  extraReducers: (builder) => {
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

export const { updateShiftOccupied } = userSlice.actions;
export default userSlice.reducer;
