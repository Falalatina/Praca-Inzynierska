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
import UserDetails from "./modules/User/userDetails/userDetails";
import { teamLoader } from "./modules/Team/TeamContainer";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchWorkers } from "./features/team/generateSlice";

import UserChoose from "./modules/User/UserChoose";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<TeamContainer />} loader={teamLoader} />
      <Route path="generate" element={<Generate />}>
        <Route path=":teamId" element={<Generate />} />
      </Route>
      <Route patch="user" element={<UserChoose />}>
        <Route path=":userId" element={<UserDetails />} />
      </Route>

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
