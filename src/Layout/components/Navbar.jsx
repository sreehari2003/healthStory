import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useEffect,useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useDocProtected from "../../hooks/useDocProtected";

export const Navbar = () => {
  const { signOut,  isAUthActive }= useAuth();

  return (
    <Flex bg=" transparent" pl="5" py="3" justifyContent="space-between">
      <Heading fontSize="40px" >Hstory </Heading>
     { isAUthActive && <Button mr="20px" onClick={signOut}>Logout</Button>}
    </Flex>
  );
};
