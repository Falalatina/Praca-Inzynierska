import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";

const TeamCard = ({ id, teamName, workers }) => {
  return (
    <Card variant="elevated" mb="2">
      <CardHeader background="purple.800">{teamName}</CardHeader>
      {workers.map((item) => {
        const { id, name } = item;
        return (
          <CardBody key={id}>
            <Heading size="sm">{name}</Heading>
          </CardBody>
        );
      })}
    </Card>
  );
};

export default TeamCard;
