import React from "react"
import {Flex, Image, Text} from "@chakra-ui/react"
import {ReactComponent as FireImg} from "../../assets/fire.svg"
import {ReactComponent as Fireunderline} from "../../assets/fireline.svg"
import {ReactComponent as FireDeck} from "../../assets/firedeck.svg"
import firedeck from "../../assets/firedeck.svg"
import firecharacter from "../../assets/FIRE CHARACTER.png"

const Fire = () => {

  return (
    <Flex className="element-container" flexDir={["column", "column", "column", "row"]} w="100%" mt={4} px={2} >
      <Flex justifyContent="flex-start" alignItems="center" flexDir="column" w={["full", "full", "full", "30%"]} >
        <Flex alignItems="center" mt={0} >
          <FireImg style={{width: "3rem"}} className="img" />
          <Text fontSize="3xl" ml={3} color="white" fontWeight="semibold" >FIRE</Text>
        </Flex>
        <Fireunderline className="underline" style={{width: "15rem"}} />
        <Flex flexDir="column" alignItems="center" mt={2} textAlign="center" >
          <Text className="qoute" color="white" fontStyle="italic"  w={["full", "full", "full", "70%"]} fontSize="lg" >
            "Dances with fire <br/> roaring flames of power <br/> to ashes as they fall."
          </Text>
          <Text fontWeight={600} className="description" mt={10} color="white" fontSize="xl"  w={["full", "full", "full", "50%"]} > 
            Fire guardians are versitle! Some focus on offense while some support. They're Innately powerful against Earth Type Guardians!
          </Text>
        </Flex>
      </Flex>
      <Flex flexDir={["column", "column", "column", "row"]} w={["full", "full", "full", "70%"]} justifyContent="flex-end" alignItems={["center", "center", "center", "flex-end"]} > 
        <FireDeck className="deck" />
        
        <Image className="character" src={firecharacter} />
        <Image mt={-14} zIndex={22} src={firedeck} display={["block", "block", "block", "none" ]} />
      </Flex>
    </Flex>
  )
}

export default Fire
