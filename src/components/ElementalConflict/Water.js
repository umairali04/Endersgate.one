import React from "react"
import waterdeck from "../../assets/waterdeck.svg"
import {Flex, Image, Text} from "@chakra-ui/react"
import {ReactComponent as WaterImg} from "../../assets/water.svg"
import {ReactComponent as Waterunderline} from "../../assets/waterunderline.svg"
import {ReactComponent as WaterDeck} from "../../assets/waterdeck.svg"
import WaterCharacter from "../../assets/WATER CHARACTER.png"

const Water = () => {

  return (
    <Flex className="element-container" flexDir={["column", "column", "column", "row"]} w="100%" mt={4} px={2} >
      <Flex justifyContent="flex-start" alignItems="center" flexDir="column" w={["full", "full", "full", "30%"]} >
        <Flex alignItems="center" mt={0} >
          <WaterImg style={{width: "3rem"}} className="img" />
          <Text fontSize="3xl" ml={3} color="white" fontWeight="semibold" >WATER</Text>
        </Flex>
        <Waterunderline className="underline" style={{width: "15rem"}} />
        <Flex flexDir="column" alignItems="center" mt={2} textAlign="center" >
          <Text className="qoute" color="white" fontStyle="italic" w={["full", "full","70%", "70%"]} fontSize="lg" >
            "An open sea <br/> as waves break over the shore <br/> their grasp wash away."
          </Text>
          <Text className="description" mt={10} color="white" fontSize="xl"  w={["full", "full","70%", "50%"]}  fontWeight={600} > 
            Water type guardians have a focus on self defense and are innately powerful against water type Guardians!
          </Text>
        </Flex>
      </Flex>
      <Flex flexDir={["column", "column", "column", "row"]} w={["full", "full", "full", "70%"]} justifyContent="flex-end" alignItems={["center", "center", "center", "flex-end"]} > 
        <WaterDeck className="deck" />
        <Image className="character" zIndex={2} src={WaterCharacter} />
        <Image loading="lazy" zIndex={22} mt={-14} src={waterdeck} display={["block", "block", "block", "none" ]} />
      </Flex>
    </Flex>
  )
}

export default Water
