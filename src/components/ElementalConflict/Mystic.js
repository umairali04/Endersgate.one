import React from "react"
import {Flex, Image, Text} from "@chakra-ui/react"
import {ReactComponent as MysticImg} from "../../assets/mystic.svg"
import {ReactComponent as Mysticunderline} from "../../assets/mysticline.svg"
import {ReactComponent as MysticDeck} from "../../assets/mysticdeck.svg"
import mysticdeck from "../../assets/mysticdeck.svg"
import {ReactComponent as MysticCharacter} from "../../assets/mysticcharacter.svg"

const Mystic = () => {

  return (
    <Flex className="element-container" flexDir={["column", "column", "column", "row"]} w="100%" mt={4} px={2} >
      <Flex justifyContent="flex-start" alignItems="center" flexDir="column" w={["full", "full", "full", "30%"]} >
        <Flex alignItems="center" mt={[4, 4, 4, 0]} >
          {/* <Image src={mystic} w="3rem" /> */}
          <MysticImg style={{width: "3rem"}} className="img" />
          <Text fontSize="3xl" ml={3} color="white" fontWeight="semibold" >MYSTIC</Text>
        </Flex>
        <Mysticunderline className="underline" style={{width: "15rem"}} />
        {/* <Image mt={4} src={mysticunderline} w="15rem" /> */}
        <Flex flexDir="column" alignItems="center" mt={2} textAlign="center" >
          <Text className="qoute" color="white" fontStyle="italic"  w={["full", "full", "full", "70%"]} fontSize="lg" >
            "Light reveals <br/> an unknown path lies ahead <br/> bring discovery."
          </Text>
          <Text className="description" fontWeight={600} mt={10} color="white" fontSize="xl"  w={["full", "full", "full", "50%"]} > 
            Mystic Guardians forge their own path! Focusing mostly on support they’re innately powerful against Void type Gaurdians!
          </Text>
        </Flex>
      </Flex>
      <Flex flexDir={["column", "column", "column", "row"]} w={["full", "full", "full", "70%"]} justifyContent="flex-end" alignItems={["center", "center", "center", "flex-end"]} > 
        {/* <Image marginRight={[0,0,0,-32]} display={["none", "none", "none", "block"]} zIndex={1} src={mysticdeck} /> */}
        <MysticDeck className="deck" />
        <MysticCharacter className="character mystic" />
        {/* <mysticDeck style={{display: isAtleast1280px ? "block": "block"}} /> */}
        {/* <Image mt={[2, 2, 2,0]} width={["50%", "50%", "50%", "full"]} zIndex={2} src={mysticcharacter} /> */}
        <Image mt={-14} zIndex={22} src={mysticdeck} display={["block", "block", "block", "none" ]} />
      </Flex>
    </Flex>
  )
}

export default Mystic
