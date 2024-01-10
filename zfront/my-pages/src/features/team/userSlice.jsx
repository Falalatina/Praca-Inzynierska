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
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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

export const {} = userSlice.actions;
export default userSlice.reducer;
