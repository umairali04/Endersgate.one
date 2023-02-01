import React from "react"
import {Flex, Image, Text} from "@chakra-ui/react"
import {ReactComponent as VenomImg} from "../../assets/venom.svg"
import {ReactComponent as Venomunderline} from "../../assets/venomline.svg"
import {ReactComponent as VenomDeck} from "../../assets/venomdeck.svg"
import venomdeck from "../../assets/venomdeck.svg"
import {ReactComponent as VenomCharacter} from "../../assets/venomcharacter.svg"

const Venom = () => {

  return (
    <Flex className="element-container" flexDir={["column", "column", "column", "row"]} w="100%" mt={4} px={2} >
      <Flex justifyContent="flex-start" alignItems="center" flexDir="column" w={["full", "full", "full", "30%"]} >
        <Flex alignItems="center" mt={[4, 4, 4, 0]} >
          <VenomImg style={{width: "3rem"}} className="img" />
          <Text fontSize="3xl" ml={3} color="white" fontWeight="semibold" >VENOM</Text>
        </Flex>
        <Venomunderline className="underline" style={{width: "15rem"}} />
        <Flex flexDir="column" alignItems="center" mt={2} textAlign="center" >
          <Text className="qoute" color="white" fontStyle="italic" w={["full", "full", "full", "70%"]} fontSize="lg" >
            "Breathe slowly <br/> with each wind you lose <br/> bring forth victory."
          </Text>
          <Text className="description" fontWeight={600} mt={10} color="white" fontSize="xl" w={["full", "full", "full", "50%"]}> 
            Venom Guardians are relentless! Focusing mostly on offense, they're innately powerful against Water type Guardians!
          </Text>
        </Flex>
      </Flex>
      <Flex flexDir={["column", "column", "column", "row"]} w={["full", "full", "full", "70%"]} justifyContent="flex-end" alignItems={["center", "center", "center", "flex-end"]} > 
        <VenomDeck className="deck" />
        <VenomCharacter className="character venom" />
        <Image mt={-14} zIndex={22} src={venomdeck} display={["block", "block", "block", "none" ]} />
      </Flex>
    </Flex>
  )
}

export default Venom
