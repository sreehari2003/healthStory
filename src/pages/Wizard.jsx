import React from "react";

import { Box, Center, FormControl, FormHelperText, FormLabel, Heading, Input, Button, Alert, Text, FormErrorMessage } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Navbar } from "../Layout/components";
import { Doctor } from "../components/modal";

const Wizard = () => {


  const { register, handleSubmit, watch, formState: { errors }, formState } = useForm();
  const onSubmit = (data) => {

    console.log(data);

  }
  console.log(errors)
  return (
    <Box p="30px" minH="100vh" >

      <Navbar />


      <Box mt="40px" bg={'#f8f9fa'} width='35%' borderRadius={'lg'} height='500px' ml='30%'>
        <Center >
          <Heading size="md" borderRadius={'md'} fontWeight="700" width='500px' height='50px' pt={8} >
            <Center>
              <Text fontSize='2xl'>DOCTORS INFORMATION</Text>

            </Center>
          </Heading>
        </Center>
        <Center flexDir="column" pt={5}>

          <Box width='80%' >
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl mt="20px" isInvalid={errors.location}>
                <FormLabel>Location</FormLabel>
                <Input type="text" {...register("location", { required: true })} />

                {errors.location && (

                  <FormErrorMessage>Location is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl mt="20px" isInvalid={errors.mobnum}>
                <FormLabel>Phone Number</FormLabel>
                <Input type="text" {...register("mobnum", { required: true, pattern: /^[0-9+-]+$/, minLength: 6, maxLength: 12 })} />
                {errors.mobnum && (

                  <FormErrorMessage>Mobile Number is Invalid.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl mt="20px" isInvalid={errors.qualification}>
                <FormLabel>Education Qualification</FormLabel>
                <Input type="text" {...register("qualification", { required: true })} />
                {errors.qualification && (

                  <FormErrorMessage>Qualification is required.</FormErrorMessage>
                )}
              </FormControl>
              {/* <FormControl mt="20px">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl> */}
              <Center>
                <Button colorScheme='linkedin' type="submit" w="full" mt="10px">Submit</Button>
              </Center>
            </form>


          </Box>
        </Center>
      </Box>
      <Doctor />
    </Box>
  );
};

export default Wizard;
