import { configureStore } from "@reduxjs/toolkit";
import teamSlice from "./features/team/teamSlice";
import generateSlice from "./features/team/generateSlice";

export const store = configureStore({
  reducer: {
    team: teamSlice,
    generate: generateSlice,
  },
});
