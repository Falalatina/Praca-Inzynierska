import "./UserList.css";

import AddUser from "./AddUser";

import { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { removePerson } from "../../features/team/generateSlice";
import { removePersonFromTeam } from "../../features/team/teamSlice";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
} from "@chakra-ui/react";

const RenderPeopleOnList = () => {
  const [toggle, setToggle] = useState(false);
  const { currentWorkers } = useSelector((store) => store.generate);
  const dispatch = useDispatch();
  const { teamId } = useParams();

  const showForm = () => {
    setToggle(!toggle);
    setTimeout(() => {
      window.scroll({
        top: 1900,
        behavior: "smooth",
      });
    }, 0);
  };

  const handleRemove = (teamId, id) => {
    dispatch(removePerson({ id }));
    dispatch(removePersonFromTeam({ teamId, id }));
  };

  return (
    <Card p={10} mt={10} className="x ">
      <div className="people-list-container">
        <CardHeader className="header-secion-list-ppl">
          <Heading size="xs">Name</Heading>
          <Heading size="xs">Preferences</Heading>
          <Heading size="xs">Anti-preferences</Heading>
          <div></div>
        </CardHeader>

        {currentWorkers.map((person) => {
          const { id, name, preferences } = person;

          return (
            <Box key={id}>
              <CardBody className="header-secion-list-ppl">
                <div>{name}</div>

                <div>{`${preferences.yes} `} </div>
                <div>{`${preferences.no}  `}</div>
                <Button
                  size="md"
                  bg="red.300"
                  onClick={() => handleRemove(teamId, id)}
                >
                  Delete
                </Button>
              </CardBody>
              <Divider />
            </Box>
          );
        })}

        <CardFooter className="header-secion-list-ppl">
          <div></div>
          <Button onClick={showForm}>
            {toggle ? "Hide Add User" : "Add User"}
          </Button>
          <div></div>
        </CardFooter>
      </div>
      {toggle ? <AddUser toggle={toggle} /> : <div> </div>}
    </Card>
  );
};

export default memo(RenderPeopleOnList);
