import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";

const UserCard = ({ id, name, hoursSum, index, workers }) => {
  const [randomColors, setRandomColors] = useState([]);

  useEffect(() => {
    const generateRandomColors = () => {
      const colorPalette = ["#D2E0FB", "#F3E691", "#D7E5CA", "#8EACCD"];
      if (randomColors.length === colorPalette.length) {
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
        return null;
      });

      setRandomColors((prevColors) => [
        ...prevColors,
        ...colors.filter(Boolean),
      ]);
    };

    generateRandomColors();
  }, []);

  return (
    <Card>
      <CardHeader bg={randomColors[index]}>
        <Text fontSize="3xl">{name.toUpperCase()}</Text>
      </CardHeader>
      <CardBody>{hoursSum}</CardBody>
    </Card>
  );
};

export default UserCard;
