import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkers } from "../../features/team/userSlice";
import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

import "./userStyle.css";

const UserChoose = () => {
  const { workers } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchWorkers());
    };

    fetchData();
  }, [workers]);

  return (
    <section>
      <h1>Check the user</h1>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {workers.map((person) => {
          const { id, name, hoursSum } = person;
          return (
            <GridItem className="user-card" key={id}>
              <Card>
                <CardHeader>
                  <Text>{name}</Text>
                </CardHeader>
                <CardBody>{hoursSum}</CardBody>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    </section>
  );
};

export default UserChoose;
