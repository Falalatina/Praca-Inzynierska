import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const TeamCard = ({ id, teamName, workers }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem>
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
      </GridItem>
    </Grid>
  );
};

export default TeamCard;
