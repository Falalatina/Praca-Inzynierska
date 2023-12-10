import { Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { autoSchedule } from "../../features/team/generateSlice";

const Generate = () => {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(autoSchedule())}>Generate</Button>;
};

export default Generate;
