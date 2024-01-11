import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import ScheduleContainer from "../../GenerateSchedule/ScheduleContainer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { DragHandleIcon, CopyIcon } from "@chakra-ui/icons";
import UserGraphic from "./UserGraphic";

const UserDetails = () => {
  const { workers } = useSelector((store) => store.user);
  const { userId } = useParams();
  const teams = useLoaderData();
  const [totalSum, setTotalSum] = useState(0);

  const colorPalette = ["#D2E0FB", "#F3E691", "#D7E5CA", "#8EACCD"];

  const randomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const findTeamIdsByUserId = (userId) => {
    const matchingTeams = teams.filter((team) =>
      team.workerIds.includes(userId)
    );
    return matchingTeams.map((team) => team.id);
  };

  const setValue = (value) => {
    setTotalSum(value);
  };
  const user = workers.find((person) => person.id === parseInt(userId));
  const teamIds = findTeamIdsByUserId(Number(userId));

  // console.log(savedWorker, savedUser);

  return (
    <section>
      <Card>
        <CardHeader>
          <Flex justifyContent="space-between">
            <Flex>
              <Box w="10" h="100" bg={randomElement(colorPalette)} mr="5"></Box>
              <div style={{ textAlign: "left", minWidth: "200px" }}>
                <Text as="b" fontSize="2xl">
                  {user.name.toUpperCase()}
                </Text>
                <Flex>
                  <Text mb="0" fontSize="xl">
                    User ID:{userId}
                  </Text>
                  <IconButton
                    ml="2"
                    variant="ghost"
                    colorScheme="gray"
                    icon={<CopyIcon />}
                  />
                </Flex>
                <Text>Hours: {totalSum}</Text>
              </div>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<DragHandleIcon />}
            />
          </Flex>
          <div style={{ textAlign: "left" }}>
            {teamIds.length > 0 ? (
              <div>
                Belongs to teams:{" "}
                {teamIds
                  .map(
                    (teamId) =>
                      teams.find((team) => team.id === teamId)?.teamName
                  )
                  .join(", ")}
              </div>
            ) : (
              " Haven't found matching teams"
            )}
          </div>
        </CardHeader>
        <CardBody>
          <UserGraphic
            setTotalSum={setTotalSum}
            teamIds={teamIds}
            userId={userId}
            teams={teams}
          />
        </CardBody>
      </Card>
    </section>
  );
};

export const userDLoader = async () => {
  const res = await fetch("http://localhost:4000/teams");
  return res.json();
};

export default UserDetails;
