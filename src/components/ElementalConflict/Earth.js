import React from "react"
import {Flex, Image, Text} from "@chakra-ui/react"
import {ReactComponent as EarthImg} from "../../assets/earth.svg"
import {ReactComponent as Earthunderline} from "../../assets/earthline.svg"
import {ReactComponent as EarthDeck} from "../../assets/earthdeck.svg"
import earthdeck from "../../assets/earthdeck.svg"
import earthcharacter from "../../assets/EARTH CHARACTER.png"

const Earth = () => {

  return (
    <Flex className="element-container" flexDir={["column", "column", "column", "row"]} w="100%" mt={4} px={2} >
      <Flex justifyContent="flex-start" alignItems="center" flexDir="column" w={["full", "full", "full", "30%"]} >
        <Flex alignItems="center" mt={[4, 4, 4, 0]} >
          <EarthImg style={{width: "3rem"}} className="img" />
          <Text fontSize="3xl" ml={3} color="white" fontWeight="semibold" >EARTH</Text>
        </Flex>
        <Earthunderline className="underline" style={{width: "15rem"}} />
        <Flex flexDir="column" alignItems="center" mt={2} textAlign="center" >
          <Text className="qoute" color="white" fontStyle="italic"  w={["full", "full", "full", "70%"]} fontSize="lg" >
            "Strong by nature <br/> a tree unwilling to budge <br/> trusts the soil benethe."
          </Text>
          <Text mt={10} className="description" color="white" fontSize="xl"  w={["full", "full", "full", "50%"]} fontWeight={600} > 
            Earth Guardians lead by example! Focusing mostly on tanking damange, They're innately powerful against Venom type Guardians!
          </Text>
        </Flex>
      </Flex>
      <Flex  flexDir={["column", "column", "column", "row"]} w={["full", "full", "full", "70%"]} justifyContent="flex-end" alignItems={["center", "center", "center", "flex-end"]} > 
        <EarthDeck className="deck" />
        <Image className="character" src={earthcharacter} />
        <Image mt={-14} zIndex={22} src={earthdeck} display={["block", "block", "block", "none" ]} />
      </Flex>
    </Flex>
  )
}

export default Earth
