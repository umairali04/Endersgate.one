import { Flex } from '@chakra-ui/react'
import React from 'react'
import tempnewsbg from "../../assets/tempnewsbg.svg"

const Card = () => {
  return (
    <Flex bgImage={`url(${tempnewsbg})`} h="72" bgSize="cover" bgRepeat="no-repeat" >

    </Flex>
  )
}

export default Card