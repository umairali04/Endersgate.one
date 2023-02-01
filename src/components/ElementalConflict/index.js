import React from "react"
import {Flex, Text, Button} from "@chakra-ui/react"
import Water from "./Water"
import Fire from "./Fire"
import Earth from "./Earth"
import Venom from "./Venom"
import Mystic from "./Mystic"
import Void from "./Void"

const ElementalConflict = () => {
  const [element, setElement] = React.useState("water")

  const map = {
    water: <Water/>,
    fire: <Fire/>,
    earth: <Earth/>,
    venom: <Venom/>,
    mystic: <Mystic/>,
    void: <Void/>
  }

  const renderElements = (value) => {
    return map[value]
  }

  return (
    <Flex pt={10} bg="elemental" flexDir="column" justifyContent="center" alignItems="center" >
        <Text color="white" fontSize={["3xl", "3xl" ,"5xl", "5xl"]} >ELEMENTAL CONFLICT</Text>
        <Text color="white" fontSize={["md", "md", "xl", "xl"]} fontWeight="semibold" >BUILD DECKS TO YOUR PLAYSTYLE</Text>
        <Flex zIndex={122} mt={4}>
          {/* <ButtonComp 
          boxShadow={[element === "water" && "0px 0px 2px 1px rgba(147, 219, 255, 1)", element === "water" && "0px 0px 2px 1px rgba(147, 219, 255, 1)", element === "water" && "0px 0px 10px 2px rgba(147, 219, 255, 1)", element === "water" && "0px 0px 10px 2px rgba(147, 219, 255, 1)"]}  onClick={() => setElement("water")} bgColor={element === "water" ? "water" : "transparent"} color={element === "water" ? "black" : "white"} text="WATER" border={element !== "water" && "1px solid white"} /> */}
          <ButtonComp 
          boxShadow={[element === "fire" && "0px 0px 2px 1px rgba(255, 187, 136, 1)", element === "fire" && "0px 0px 2px 1px rgba(255, 187, 136, 1)", element === "fire" && "0px 0px 10px 2px rgba(255, 187, 136, 1)", element === "fire" && "0px 0px 10px 2px rgba(255, 187, 136, 1)"]}   onClick={() => setElement("fire")} bgColor={element === "fire" ? "fire" : "transparent"} color={element === "fire" ? "black" : "white"} text="FIRE" border={element !== "fire" && "1px solid white"} />
          <ButtonComp 
          boxShadow={[element === "earth" && "0px 0px 2px 1px rgba(159, 138, 126, 1)", element === "earth" && "0px 0px 2px 1px rgba(159, 138, 126, 1)", element === "earth" && "0px 0px 10px 2px rgba(159, 138, 126, 1)", element === "earth" && "0px 0px 10px 2px rgba(159, 138, 126, 1)"]}
          onClick={() => setElement("earth")} bgColor={element === "earth" ? "earth" : "transparent"} color={element === "earth" ? "black" : "white"} text="EARTH" border={element !== "earth" && "1px solid white"} />
          <ButtonComp 
          boxShadow={[element === "venom" && "0px 0px 2px 1px rgba(140, 255, 175, 1)", element === "venom" && "0px 0px 2px 1px rgba(140, 255, 175, 1)", element === "venom" && "0px 0px 10px 2px rgba(140, 255, 175, 1)", element === "venom" && "0px 0px 10px 2px rgba(140, 255, 175, 1)"]}
          onClick={() => setElement("venom")} bgColor={element === "venom" ? "venom" : "transparent"} color={element === "venom" ? "black" : "white"} text="VENOM" border={element !== "venom" && "1px solid white"} />
          <ButtonComp 
          boxShadow={[element === "mystic" && "0px 0px 2px 1px rgba(185, 198, 199, 1)", element === "mystic" && "0px 0px 2px 1px rgba(185, 198, 199, 1)", element === "mystic" && "0px 0px 10px 2px rgba(185, 198, 199, 1)", element === "mystic" && "0px 0px 10px 2px rgba(185, 198, 199, 1)"]}
          onClick={() => setElement("mystic")} bgColor={element === "mystic" ? "mystic" : "transparent"} color={element === "mystic" ? "black" : "white"} text="MYSTIC" border={element !== "mystic" && "1px solid white"} />
          <ButtonComp 
          boxShadow={[element === "void" && "0px 0px 2px 1px rgba(200, 124, 252, 1)", element === "void" && "0px 0px 2px 1px rgba(200, 124, 252, 1)", element === "void" && "0px 0px 10px 2px rgba(200, 124, 252, 1)", element === "void" && "0px 0px 10px 2px rgba(200, 124, 252, 1)"]}
          onClick={() => setElement("void")} bgColor={element === "void" ? "void" : "transparent"} color={element === "void" ? "black" : "white"} text="VOID" border={element !== "void" && "1px solid white"} />
        </Flex>
        {renderElements(element)}
        {/* <Water/> */}
    </Flex>
  )
}


export default ElementalConflict

const ButtonComp = ({bgColor, color, text, ...rest}) => {
  return (
    <Button {...rest} rounded="none" h={["1.5rem", "1.5rem", "2.5rem", "2.5rem"]} w={["3.3rem", "5rem", "7rem", "7re,"]} px={[0,0,0,0]} bgColor={bgColor} fontWeight="bold" _hover={{backgroundColor: bgColor}} _focus={{backgroundColor: bgColor}} color={color} fontSize={["xs", "xs", "2xl", "2xl"]} >{text}</Button>
  )
}
