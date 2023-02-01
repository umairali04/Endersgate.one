import { Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import goldfilter from "../assets/goldfilter.svg"
import temperory from "../assets/temperory.svg"
  import Tilt from "react-parallax-tilt"
import {useNavigate} from 'react-router-dom'
const Card = ({image, description, cardType, name, rarity, card}) => {


  const navigate=useNavigate()

  const display = (description, image, cardType, name, rarity, card) => {  

    navigate("/gallery/detailpage",{
     state:{
       desc:description,
       imge:image,
       ctype:cardType,
       name,
       rarity,
       card
     }
    })
  }


  return (
    <Tooltip w="56" bg="gray.800" border={`1px solid ${cardType === "wood" ? "#9f8a7e" : cardType === "gold" ? "gold" : cardType === "iron" ? "#b9c6c7" : cardType === "legend" ? "#8cffaf" : cardType === "silver" ? "#b9c6c7" : "white"}`} openDelay={500} placement="top" label={(
      <Flex  alignItems="center" >
        <Text>{description}</Text>
      </Flex>
    )} >
        <Flex onClick={() => display(description,image, cardType, name, rarity, card)} className='card' flexDir="column" justifyContent="center" alignItems="center" >
          <Tilt>
          {/* <figure  className={card?.isRandomShaped === true ? "card-fog" : 'card-fig'} > */}
            <Image src={image} loading="lazy" objectFit="contain" />
          </Tilt>
          {/* </figure> */}
          
          <Box className="card-bottom" w="full" h="2px"/>
          <Box boxShadow="0px 15px 30px 5px white" w="50%" />
          {/* <Box w="full" h="10" transform="matrix(1, 0, 0, -1, 0, 0)" bgGradient="radial(50% 82.77% at 50% 100%, rgba(255, 255, 255, .3) 0%, rgba(77, 60, 123, 0) 100%), radial-gradient(49.53% 81.16% at 49.53% 101.34%, rgb(12, 6, 30) 0%, rgb(12, 6, 30) 34.45%, rgba(12, 6, 30, 0) 100%)" /> */}
          <Flex mt={1}  alignItems="center" >
              <Image w="4" h="4" src={temperory} />
              <Text ml={2} color="white" >1.72</Text>
          </Flex>
          <Flex w="full" alignItems="center" justifyContent="center"  >
              <Image w="5" h="5"  src={goldfilter} />
              <Text mx={1} color="gray.300">0</Text>
              <Text color="gray.500">owned</Text>
          </Flex>
        </Flex>
    </Tooltip>
  )
}

export default Card