import React from 'react'
import {Box, Avatar,WrapItem,Stack, AvatarBadge, AvatarGroup, HStack, VStack,Alert , Input, Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
function SideSection() {
  return (
    
    <flex>
          <WrapItem >
<Box flex={1}  bg='#075E54' w='20%' minH={'100vh'}  p={4} color='white'>
<Input placeholder='Basic usage' color='white' ></Input> 

<Box bg='#FF8C00' w='100%' mt={3} p={4} color='white' borderRadius='md'>
<WrapItem>
    <Avatar name='Dan Abrahmov' borderRadius='full' src='https://bit.ly/dan-abramov' />
    <Stack pl={3} >
    <Text fontSize='md' >Full Name </Text>
    <Text fontSize='sm'>Patient ID</Text>
    </Stack>
  </WrapItem>
</Box>
</Box>


<Box  bg='#B2BEB5' w='80%' minH={'100vh'}   color='white'>
<Box bg='black' w='100%' height='50px' p={2}>
<Text fontSize='sm' pt='1'>Your Medical History</Text>

</Box>
<Stack width={'95%'} pl='3' pt='3' spacing={3}>
<Alert borderRadius='md'  status='success' variant='solid'>
    Record here . message!
  </Alert>

  <Alert borderRadius='md' status='success' variant='solid'>
  Record here . message!
  </Alert>

  <Alert borderRadius='md' status='success' variant='solid'>
  Record here . message!
  </Alert>
  </Stack>
</Box>

</WrapItem>
    </flex>

  )
}

export default SideSection