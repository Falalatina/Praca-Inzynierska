import { configureStore } from "@reduxjs/toolkit";
import teamSlice from "./features/team/teamSlice";
import generateSlice from "./features/team/generateSlice";
import modalReducer from "./features/team/modalSlice";
import userSlice from "./features/team/userSlice";

export const store = configureStore({
  reducer: {
    team: teamSlice,
    generate: generateSlice,
    modal: modalReducer,
    user: userSlice,
  },
});
