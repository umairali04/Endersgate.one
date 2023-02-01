import { Flex, Text, Image, Box} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import headgames from "../assets/5headgames.svg"
import cards from "../assets/cards.svg"
import cardsmob from "../assets/cardsmob.svg"

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <Flex boxShadow=" 0 10px 25px 20px #171722" flexDir="column" pt={10} justifyContent="center" alignItems="center" w="full" bg="footer" >
        <Image mt={6} width="10rem" src={headgames} />
        <Flex mt={10} flexDir={["column", "column", "row", "row"]} alignItems="center" >
            <Text cursor="pointer" fontSize="2xl" color="gray.300" fontWeight="semibold"  >JOB APPLICATIONS</Text>
            <Box display={["none", "none", "block", "block"]} width="3px" h="2rem" mx={6} bg="gray.300" />
            <Text cursor="pointer" fontSize="2xl" color="gray.300" fontWeight="semibold"  >ABOUT</Text>
            <Box display={["none", "none", "block", "block"]} width="3px" h="2rem" mx={6} bg="gray.300" />
            <Text cursor="pointer" fontSize="2xl" fontWeight="semibold"  color="gray.300" >CONTACT US</Text>
            <Box display={["none", "none", "block", "block"]} width="3px" h="2rem"  mx={6} bg="gray.300" />
            <Text cursor="pointer" fontWeight="semibold"  fontSize="2xl" color="gray.300" >WHITEPAPER</Text>
        </Flex>
        <Text fontSize={["lg", "lg", "2xl", "2xl"]} mt={10} fontWeight="semibold"  color="gray.300" >QUALITY BLOCKCHAIN GAMES FOR ALL</Text>
        <Text fontSize={["lg", "lg", "2xl", "2xl"]} color="gray.300" fontWeight="semibold" >5headgames.com</Text>

        <Flex mt={10} alignItems="center" >
            <AiOutlineCopyrightCircle color="gray" />
            <Text fontSize={["sm", "sm", "xl", "xl"]} fontWeight="semibold" color="gray" > {year} 5HEADGAMES, INC. ALL RIGHTS RESERVED</Text>
        </Flex>
        <Text textAlign="center" fontSize={["sm", "sm", "xl", "xl"]} fontWeight="semibold" color="gray" >All <span style={{color: "lightgray", cursor: "pointer"}}>trademarks </span>referenced herein are the properties of their respective owners.</Text>
        <Image display={["none", "none", "block", "block"]} width="75%" mt={10} src={cards} />
        <Image mt={10} w="full" display={["block", "block", "none", "none"]} src={cardsmob} />
    </Flex>
  )
}

export default Footer