import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeams = createAsyncThunk("team/fetchTeams", async () => {
  try {
    const resp = await axios("http://localhost:4000/teams");
    //console.log(resp.data);
    return resp.data;
  } catch (error) {}
});

const initialState = {
  teams: [],
  name: "",
  workers: "",
  amount: 0,
  isLoading: false,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    checkAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teams = action.payload;
      })
      .addCase(fetchTeams.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { checkAmount } = teamSlice.actions;
export default teamSlice.reducer;
