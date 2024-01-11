import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";

const UserCard = ({ name, hoursSum, teams }) => {
  const colorPalette = ["#D2E0FB", "#F3E691", "#D7E5CA", "#8EACCD"];

  const randomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  return (
    <Card>
      <CardHeader bg={randomElement(colorPalette)}>
        <Text fontSize="3xl">{name.toUpperCase()}</Text>
      </CardHeader>
      <CardBody> Hours at edit: {hoursSum}</CardBody>
    </Card>
  );
};

export default UserCard;
