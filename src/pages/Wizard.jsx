import React from "react";
import { Box, Center, FormControl, FormHelperText, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Navbar } from "../Layout/components";
import { Doctor } from "../components/modal";

const Wizard = () => {
  const methods = useForm();
  return (
    <Box p="40px" minH="100vh" >
      <Navbar />
      <Box mt="40px" maxW="900px" >
        <Heading size="md" fontWeight="500">
          Doctors info
        </Heading>
        <Center  flexDir="column">
        <FormControl mt="20px">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl mt="20px">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl mt="20px">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl mt="20px">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        </Center>
      </Box>
      <Doctor />
    </Box>
  );
};

export default Wizard;
