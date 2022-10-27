import React from "react";
import {
  Box,
  Avatar,
  WrapItem,
  Stack,
  Alert,
  Input,
  Flex,
  Button,
  Heading
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Card from "./Card";

function SideSection() {
  return (
    <flex>
      <WrapItem>
        <Box
          flex={1}
          bg="#075E54"
          w="20%"
          height={"100vh"}
          p={4}
          color="white"
          overflowY="scroll"
          sx={{
            "::-webkit-scrollbar": {
              width: "10px",
              bg: "grey",
            },
            "::-webkit-scrollbar-thumb": {
              bg: "#354f52",
            },
          }}
        >
          <Heading pt={3} pb={3} >Health Story</Heading>
          <Input placeholder="Basic usage" color="white" />

          <Box w="100%">
            <Card
              name="dan abramove"
              image="https://bit.ly/dan-abramov"
              id="10010304040"
            />
            <Card
              name="dan abramove"
              image="https://bit.ly/dan-abramov"
              id="10010304040"
            />
            <Card
              name="dan abramove"
              image="https://bit.ly/dan-abramov"
              id="10010304040"
            />
            <Card
              name="dan abramove"
              image="https://bit.ly/dan-abramov"
              id="10010304040"
            />
            <Card
              name="dan abramove"
              image="https://bit.ly/dan-abramov"
              id="10010304040"
            />
            <Card
              name="dan abramove"
              image="https://bit.ly/dan-abramov"
              id="10010304040"
            />
            <Card
              name="dan abramove"
              image="https://bit.ly/dan-abramov"
              id="10010304040"
            />
            <Card
              name="dan abramove"
              image="https://bit.ly/dan-abramov"
              id="10010304040"
            />
            <Card
              name="dan abramove"
              image="https://bit.ly/dan-abramov"
              id="10010304040"
            />
          </Box>
        </Box>

        <Box bg="#B2BEB5" w="80%" minH={"100vh"} color="white">
          <Flex bg="#e5e5e5" w="100%" height="70px" p={2} alignItems="center">
            <Avatar
              name="dan abramov"
              borderRadius="full"
              src={"https://bit.ly/dan-abramov"}
              mr="20px"
            />
            <Text fontSize="lg" pt="1" color="black">
              Dan abramov
            </Text>
          </Flex>
          <Stack width="full" p="3" pt="3" minH="550px">
            <Alert borderRadius="md" status="success" variant="solid">
              Record here . message!
            </Alert>

            <Alert borderRadius="md" status="success" variant="solid">
              Record here . message!
            </Alert>

            <Alert borderRadius="md" status="success" variant="solid">
              Record here . message!
            </Alert>
          </Stack>
          <Flex>
            <Input
              placeholder="Enter prescription"
              color="black"
              h="96px"
              bg="white"
              borderRadius="none"
              overflowY="scroll"
            />
            <Button   borderRadius="none" h="96px" bg="#415a77" _hover={{color: "white"}}> Add</Button>
          </Flex>
        </Box>
      </WrapItem>
    </flex>
  );
}

export default SideSection;
