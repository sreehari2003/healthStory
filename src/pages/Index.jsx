import React,{useEffect} from "react";
import {
  Box,
  Center,
  Text,
  Flex,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Navbar } from "../Layout/components";
import { useAuth } from "../hooks/useAuth";
import { useNavigate} from "react-router-dom"

function Landing() {
  const { signAsDoc ,pat,  isAUthActive} = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
     if(isAUthActive){
      navigate("/dashboard");
     }
  },[isAUthActive])
  return (
    <>
      <Box bg="#cfeeea">
        <Navbar />
        <Flex color="black" flexDir={{ sm: "column", lg: "row" }} minH="100vh">
          <Center flexDir="column" w="100%" p="10">
            <Box w="500px">
              <Heading fontSize="3xl" textAlign="center">
                All doctors treat, but a good doctor lets nature heal.
              </Heading>
            </Box>
            <Flex mt="40px">
              <Box mr="40px">
                <Text fontSize="xl">For Doctors</Text>
                <Button colorScheme="teal" mt="10px" onClick={signAsDoc}>
                  Click Here
                </Button>
              </Box>
              <Box>
                <Text fontSize="xl">For Patients</Text>
                <Button colorScheme="teal" mt="10px" onClick={pat}>
                  Click Here
                </Button>
              </Box>
            </Flex>
          </Center>
          <Center>
            <Image
              src="https://img.freepik.com/free-vector/health-professional-team_52683-36023.jpg?w=2000"
              alt="Dan Abramov"
            />
          </Center>
        </Flex>
      </Box>
    </>
  );
}

export default Landing;
