import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkers } from "../../features/team/userSlice";
import { Grid, GridItem } from "@chakra-ui/react";

import "./userStyle.css";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";

const UserChoose = () => {
  const { workers } = useSelector((store) => store.user);
  const { currentWorkers } = useSelector((store) => store.generate);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchWorkers());
    };
    fetchData();
  }, []);

  return (
    <section>
      <h1>Check the user</h1>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        mt={10}
      >
        {workers.map((person, index) => {
          const { id } = person;
          const currentWorker = currentWorkers.find(
            (currentPerson) => currentPerson.id === id
          );

          return (
            <GridItem
              className="user-card"
              key={id}
              onClick={() => {
                navigate(`/user/${id.toString()}`);
              }}
            >
              <UserCard
                {...person}
                {...currentWorker}
                index={index}
                workers={workers}
              />
            </GridItem>
          );
        })}
      </Grid>
    </section>
  );
};

export default UserChoose;
