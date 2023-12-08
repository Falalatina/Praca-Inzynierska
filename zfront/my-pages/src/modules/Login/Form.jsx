import {
  Card,
  CardBody,
  Heading,
  CardHeader,
  Icon,
  FormLabel,
  Input,
  FormControl,
  Button,
  Box,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import React from "react";

const Form = () => {
  return (
    <Card alignItems="center" mt={150}>
      <Icon as={LockIcon} boxSize={10} mt={5} color="purple.800" />
      <CardHeader>
        <Heading size="md" color="teal">
          Login now
        </Heading>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormLabel>Username*</FormLabel>
          <Input type="text" placeholder="Enter your username" />
          <FormLabel mt={2}>Password*</FormLabel>
          <Input type="text" placeholder="Enter your password" />
          <Button colorScheme="teal" size="lg" mt={5} width="100%">
            LOGIN
          </Button>
        </FormControl>
        <Box as="button" mt={2}>
          Don't have an account?
        </Box>
      </CardBody>
    </Card>
  );
};

export default Form;
