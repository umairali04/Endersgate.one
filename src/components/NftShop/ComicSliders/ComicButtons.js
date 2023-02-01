import React from "react"
import {Flex, Text, Button} from "@chakra-ui/react"
import RecentlyAddedComic from "./RecentlyAddedComic"
import ComicSeriesBgColor from "../../../assets/ComicSeriesBgColor.png"

const ComicButtons = () => {
  const [element, setElement] = React.useState("recentlyAddedComic")

  const map = {
    recentlyAddedComic: <RecentlyAddedComic />,
  }

  const renderElements = (value) => {
    return map[value]
  }

  return (
    <Flex flexDir="column" bgImage={ComicSeriesBgColor} justifyContent="center" alignItems="center" >
        <Flex zIndex={122} gap='1rem'>
         
        <Button _hover={{}}  rounded="none" bgColor={"#3a3636"} color={ "white"} h={["1.5rem", "1.5rem", "2.5rem", "2.5rem"]} w={["6rem", "13rem", "18rem", "20rem,"]}  disabled >
            <Text className="text-shadow-comic-button-nft-pack" fontSize={["xs", "md", "md", "2xl"]}>NFT PACK</Text>
        </Button>
        <Button _hover={{}} className="text-shadow-comic-button-avatar-cards" rounded="none"  bgColor={"#3a3636"} color={ "white"} h={["1.5rem", "1.5rem", "2.5rem", "2.5rem"]} w={["6rem", "13rem", "18rem", "20rem,"]} fontSize={["xs", "md", "md", "2xl"]} disabled>
            AVATAR CARDS
        </Button>
        <Button _hover={{}} className="text-shadow-comic-button-eg-comics" rounded="none"  bgColor={"#3a3636"} color={ "white"} h={["1.5rem", "1.5rem", "2.5rem", "2.5rem"]} w={["6rem", "13rem", "18rem", "20rem,"]} fontSize={["xs", "md", "md", "2xl"]} onClick={() => setElement("recentlyAddedComic")}>
            EG COMICS
        </Button>
         
        </Flex>
        {renderElements(element)}
    </Flex>
  )
}


export default ComicButtons;