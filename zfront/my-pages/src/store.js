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

// store.subscribe(() => {
//   const state = store.getState();
//   localStorage.setItem("generateState", JSON.stringify(state.generate));
// });

// // Inicjalizuj stan z localStorage (jeśli dostępny)
// const savedState = localStorage.getItem("generateState");
// if (savedState) {
//   const parsedState = JSON.parse(savedState);
//   store.dispatch(changeWorkers(parsedState.workers));
// }
