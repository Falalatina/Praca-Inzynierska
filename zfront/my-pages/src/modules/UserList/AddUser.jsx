import React from "react";

import { useSelector } from "react-redux";

import {
  ScaleFade,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Input,
} from "@chakra-ui/react";

const AddUser = ({ toggle }) => {
  const { workers } = useSelector((store) => store.generate);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
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
      </FormControl>
    </ScaleFade>
  );
};

export default AddUser;
