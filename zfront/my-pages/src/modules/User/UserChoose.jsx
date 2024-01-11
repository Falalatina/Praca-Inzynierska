import { useEffect, useState } from "react";
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
  const [randomColors, setRandomColors] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchWorkers());
    };
    fetchData();
  }, []);

  useEffect(() => {
    const generateRandomColors = () => {
      const colorPalette = ["#D2E0FB", "#F9F3CC", "#D7E5CA", "#8EACCD"];
      if (randomColors.length === colorPalette.length) {
        // Zresetuj tablicę randomColors, gdy wszystkie kolory są już użyte
        setRandomColors([]);
      }

      const colors = workers.map(() => {
        let randomColor;
        const remainingColors = colorPalette.filter(
          (color) => !randomColors.includes(color)
        );

        if (remainingColors.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * remainingColors.length
          );
          randomColor = remainingColors[randomIndex];
          return randomColor;
        }

        return null; // Jeżeli nie ma dostępnych kolorów
      });

      setRandomColors((prevColors) => [
        ...prevColors,
        ...colors.filter(Boolean),
      ]);
    };

    generateRandomColors();
  }, [workers, randomColors]);

  return (
    <section>
      <h1>Check the user</h1>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {workers.map((person, index) => {
          const { id, name, hoursSum } = person;
          return (
            <GridItem className="user-card" key={id}>
              <Card>
                <CardHeader bg={randomColors[index]}>
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
