import React from "react"
import {Flex, Image, Text} from "@chakra-ui/react"
import {ReactComponent as VoidImg} from "../../assets/void.svg"
import {ReactComponent as Voidunderline} from "../../assets/voidline.svg"
import {ReactComponent as VoidDeck} from "../../assets/voiddeck.svg"
import voiddeck from "../../assets/voiddeck.svg"
import {ReactComponent as VoidCharacter} from "../../assets/voidcharacter.svg"

const Void = () => {

  return (
    <Flex className="element-container" flexDir={["column", "column", "column", "row"]} w="100%" mt={4} px={2} >
      <Flex justifyContent="flex-start" alignItems="center" flexDir="column" w={["full", "full", "full", "30%"]} >
        <Flex alignItems="center" mt={[4, 4, 4, 0]} >
          <VoidImg style={{width: "3rem"}} className="img" />
          <Text fontSize="3xl" ml={3} color="white" fontWeight="semibold" >VOID</Text>
        </Flex>
        <Voidunderline className="underline" style={{width: "15rem"}} />
        <Flex flexDir="column" alignItems="center" mt={2} textAlign="center" >
          <Text className="qoute" color="white" fontStyle="italic" w={["full", "full", "full", "70%"]} fontSize="lg" >
            “Destruction is sport <br/> pawns to the board they shall be <br/> ignorance is bliss.”
          </Text>
          <Text className="description" fontWeight={600} mt={10} color="white" fontSize="xl" w={["full", "full", "full", "50%"]} > 
          Void Guardians command respect! Focusing mostly on offense, they’re innately powerful against Mystic type Gaurdians!
          </Text>
        </Flex>
      </Flex>
      <Flex flexDir={["column", "column", "column", "row"]} w={["full", "full", "full", "70%"]} justifyContent="flex-end" alignItems={["center", "center", "center", "flex-end"]} > 
        <VoidDeck className="deck" />
        <VoidCharacter className="character void" />
        <Image mt={-14} zIndex={22} src={voiddeck} display={["block", "block", "block", "none" ]} />
      </Flex>
    </Flex>
  )
}

export default Void
