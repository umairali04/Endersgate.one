import React from 'react'
import {Flex, Text} from '@chakra-ui/react'

const Heading = () => {
  return (
    <Flex textAlign="center" px={2} borderBottom="2px solid gold" h="56" bg="rgba(0, 0, 0, 0.2)" justifyContent="center" alignItems="center" flexDir="column" w="full" > 
        <Text color="white" fontSize={["3xl", "3xl", "4xl", "5xl" ]}fontWeight="semibold" >CARD GALLERY</Text>
        <Text fontSize={["lg", "lg", "xl", "2xl"]} fontWeight="semibold" color="white" >Explore our collection of 300+ unique hand drawn cards </Text>
    </Flex>
  )
}

export default Heading