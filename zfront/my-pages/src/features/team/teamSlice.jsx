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
    removePersonFromTeam: (state, { payload }) => {
      const { teamId, id } = payload;
      //idTeamu i ID które usuwam z workerId
      console.log("teamId:", teamId, "id:", id);
      console.log("Stan przed mutacją:", state.teams);
      // Zaktualizuj tablicę zespołów przy użyciu map
      state.teams = state.teams.map((team) => {
        // Sprawdź, czy to jest zespół, który chcemy zaktualizować
        if (team.id === Number(teamId)) {
          // Utwórz nowy obiekt zespołu, aby uniknąć mutacji bezpośrednio oryginalnego obiektu
          return {
            ...team,
            workerIds: team.workerIds.filter((person) => person !== id),
          };
        }
        // Jeśli to nie jest zespół, którego szukamy, zwróć go bez zmian
        return team;
      });
      console.log("Stan po mutacji:", state.teams);
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
export const { checkAmount, removePersonFromTeam } = teamSlice.actions;
export default teamSlice.reducer;
