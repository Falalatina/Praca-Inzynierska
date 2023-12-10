import {
  Box,
  Card,
  CardBody,
  CardHeader,
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
        bgGradient="linear(to-l, #38B2AC, #322659, #38B2AC, #322659)"
        color="white"
        h="89"
        w="100%"
        borderTopRadius="1rem"
      >
        <Text as="b" fontSize="4xl">
          {teamName}
        </Text>
      </CardHeader>
      <div className="persons">
        {workers.map((item) => {
          const { id, name } = item;
          return (
            <Box key={id} h="60px">
              <CardBody display="flex" alignItems="baseline">
                <Heading size="sm">{name}</Heading>
              </CardBody>
              <Divider />
            </Box>
          );
        })}
      </div>
    </Card>
  );
};

export default TeamCard;
