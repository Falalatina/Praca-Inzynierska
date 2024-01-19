import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  ScaleFade,
  FormControl,
  FormLabel,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import { addUserToTeam } from "../../features/team/teamSlice";

const AddUser = ({ toggle }) => {
  const { workers } = useSelector((store) => store.generate);

  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();
  const { teamId } = useParams();
  const toast = useToast();

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUserToTeam({ teamId, userId }));
    toast({
      title: "User added to the team",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    toggle(false);
  };

  return (
    <ScaleFade initialScale={0.9} in={toggle}>
      <FormControl>
        <FormLabel>Select User</FormLabel>
        <Select onChange={handleChange} placeholder="Select user">
          {workers.map((user) => {
            const { name, id } = user;
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </Select>
        <Button onClick={handleSubmit} mt={10}>
          Confirm
        </Button>
      </FormControl>
    </ScaleFade>
  );
};

export default AddUser;
