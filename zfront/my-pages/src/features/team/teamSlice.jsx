import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeams = createAsyncThunk("team/fetchTeams", async () => {
  const res = await fetch("http://localhost:4000/teams");
  return res.json();
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
