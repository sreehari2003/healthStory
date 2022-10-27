import React from 'react'
import {Box, Avatar,WrapItem,Stack, AvatarBadge, AvatarGroup, HStack, VStack, Input } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
function SideSection() {
  return (
    
<Box bg='#25D366' w='20%' minH={'100vh'}  p={4} color='white'>
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

    
  )
}

export default SideSection