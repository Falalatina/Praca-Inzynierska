import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeams = createAsyncThunk("team/fetchTeams", async () => {
  try {
    const resp = await axios("http://localhost:4000/teams");

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
    removePersonFromTeam: (state, { payload }) => {
      const { teamId, id } = payload;

      state.teams = state.teams.map((team) => {
        if (team.id === Number(teamId)) {
          return {
            ...team,
            workerIds: team.workerIds.filter((person) => person !== id),
          };
        }
        return team;
      });
    },
    addUserToTeam: (state, action) => {
      const { teamId, userId } = action.payload;

      state.teams = state.teams.map((team) => {
        if (team.id === Number(teamId)) {
          if (!team.workerIds.includes(Number(userId))) {
            team.workerIds.push(Number(userId));
          }
        }
        return team;
      });
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
export const { checkAmount, removePersonFromTeam, addUserToTeam } =
  teamSlice.actions;
export default teamSlice.reducer;
