import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "./cart.css";

const TeamCard = ({ id, teamName, workers }) => {
  return (
    <Card variant="elevated" mb="2" className="card-container">
      <CardHeader
        bgGradient="linear(to-l, white)"
        h="89"
        w="100%"
        borderTopRadius="2rem"
      >
        <Text as="b" fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}>
          {teamName}
        </Text>
      </CardHeader>
      <div className="persons">
        {workers.map((item) => {
          const { id, name } = item;
          return (
            <Box key={id} h="60px">
              <Divider />
              <CardBody display="flex" alignItems="center">
                <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                  {name}
                </Text>
              </CardBody>
            </Box>
          );
        })}
      </div>
    </Card>
  );
};

export default TeamCard;
