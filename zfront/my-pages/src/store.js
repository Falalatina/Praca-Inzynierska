import { configureStore } from "@reduxjs/toolkit";
import teamSlice from "./features/team/teamSlice";

export const store = configureStore({
  reducer: {
    team: teamSlice,
  },
});
