import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Generate from "./pages/TeamView";
import TeamContainer from "./modules/Team";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import UserDetails, {
  userDLoader,
} from "./modules/User/userDetails/UserDetails";
import UserChoose from "./modules/User/UserChoose";

import { teamLoader } from "./modules/Team/TeamContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchWorkers } from "./features/team/generateSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<TeamContainer />} loader={teamLoader} />

      <Route path="generate" element={<Generate />}>
        <Route path=":teamId" element={<Generate />} />
      </Route>

      <Route path="user" element={<UserChoose />} />
      <Route
        path="user/:userId"
        element={<UserDetails />}
        loader={userDLoader}
      />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWorkers());
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
