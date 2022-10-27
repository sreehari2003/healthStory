import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'

export const Doctor = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        useEffect(()=>{
          onOpen();
        },[])
        return (
          <>      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Welcome Doctor</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                 <Box as="p">
                    before we create your dashboard we need to verify that you are a doctor who can practice legally.please fill all the required information
                     to contnue using our app.
                 </Box>
                </ModalBody>
      
                <ModalFooter>
                  <Button  bg="#264653" onClick={onClose} color="white" _hover={{color:"black",bg:"grey"}}>Continue</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
}
