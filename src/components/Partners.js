import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import partnersbg from "../assets/partnersbg.svg"
import harmony from '../assets/harmony.svg'

const Partners = () => {
  return (
    <Flex bgColor="#171722" my={-4} borderY="10px solid #171722" boxShadow="0 10px 15px 20px #171722" flexDir="column" bgSize="cover" justifyContent="center" alignItems='center' bgImage={`url(${partnersbg})`} w="full" py={10} >
        <Text fontSize={["3xl", "3xl", "5xl", "5xl"]} color="white" >OUR PARTNERS</Text>
        <Image width="10rem" mt={2} src={harmony} />
    </Flex> 
  )
}

export default Partners