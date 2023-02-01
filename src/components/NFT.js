import { Flex, Image , Box, Text, useMediaQuery} from '@chakra-ui/react'
import React from 'react'
import eric from "../assets/eric.svg"
import nftbg from "../assets/Background\ 1\ \(1\).png"
import nftmobbg from "../assets/Background_mobile (1).png"

const NFT = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)")
  return ( 
    <Flex className='nft-mob' bgColor="roadmap" position="relative" width="full" h={["50vh", "100vh", "100vh", "100vh"]} >
        <Image src={eric} position="absolute" zIndex={122} left={["0%", "0%", "5%", "5%"]} top={["20%", "10%", "10%", "5"]} w={["17rem", "20rem", "25rem", "50rem"]} objectFit="cover"  />
        <Image objectFit="cover" w="full" src={isMobile ? nftmobbg : nftbg} clipPath="polygon(0 0, 100% 0, 100% 84%, 50% 100%, 0 82%)" />
        <Flex flexDir="column"  width={["30%", "30%", null, null]} top={"40%"} right={[0,0,3,14]} transform="translate(0, -50%)" position="absolute" >
            <Text mt={10} fontSize={["xl", "xl", "xl","4xl"]} color="white" fontWeight="semibold" textShadow="0px 4px 32px rgba(0, 0, 0, 0.75)" >NON-FUNGIBLE <br/> TOKEN STRAGETY</Text>  
            <Text fontSize={["0.5rem", "xs", "xs", "xl"]} color="white" mt={[3, 3, 8, 8]} textShadow="0px 4px 32px rgba(0, 0, 0, 0.75)" >Let's face it...NFT's are here to stay.</Text>
            <Text fontSize={["0.5rem", "xs", "xs", "xl"]} color="white" mt={[0,0,8,8]} textShadow="0px 4px 32px rgba(0, 0, 0, 0.75)" >Controry to popular belief, they're not all useless.</Text>
            <Text  fontSize={["0.5rem", "xs", "xs", "xl"]} color="white" mt={[3, 3, 8, 8]} textShadow="0px 4px 32px rgba(0, 0, 0, 0.75)">Reshape how we treat in-game content.</Text>
            <Text  fontSize={["0.5rem", "xs", "xs", "xl"]} color="white" textShadow="0px 4px 32px rgba(0, 0, 0, 0.75)">Join us now or later and find out how.</Text>
        </Flex>
        <Text textShadow="0px 0px 30px white" color='#15151F' position="absolute" fontSize={["lg", "xl", "xl", "6xl"]} fontWeight="bold" left="50%" transform="translate(-50%)" bottom={12} >2022 ROADMAP</Text>
    </Flex>
  )
}

export default NFT