import React from 'react'
import { Box , Center,Text,Square, Flex, Spacer , WrapItem , Button , Image  } from '@chakra-ui/react'

function Landing() {
  return (
    <div>
    
   <Flex color='black'>
      <Box flex='1' minH={'100vh'} bg='#cfeeea'>
         <Text pt={'180px'} pl={'100px'} pr={'160px'} fontSize='4xl' >All doctors treat, but a good doctor lets nature heal.</Text>
        
         <WrapItem pl={'100px'} pt={'50px'}>
         <Box >
            <Text fontWeight={'bold'} fontSize={'2xl'}>For Doctors</Text>
            <Button colorScheme='teal'>Click Here</Button>
            </Box>
         <Box ml={10}>
            <Text fontWeight={'bold'} fontSize={'2xl'} >For Patients</Text>
            <Button  colorScheme='teal'>Click Here</Button>

            </Box>
         </WrapItem>

      </Box>
      <Box flex='1' bg='#cfeeea' pt={8}>
       
        <Image src='https://img.freepik.com/free-vector/health-professional-team_52683-36023.jpg?w=2000' alt='Dan Abramov' />
     </Box>
</Flex>


    </div>
  )
}

export default Landing