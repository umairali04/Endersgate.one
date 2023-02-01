import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Tilt from "react-parallax-tilt"
import gallerybg from "../assets/gallerybg.svg"
import cards from "../assets/cards.json"
import {MdOutlineLoop} from "react-icons/md"
import arrowleftdetailspage from "../assets/arrowleftdetailspage.svg"
import iron from "../assets/STATIC BACK FRONT.png"
import gold from "../assets/Epic - Gold.png"
import legendary from "../assets/Legendary - Adamant.png"
import wood from "../assets/Common - Wood.png"
import silver from "../assets/Rare - Silver.png"
import stone from "../assets/Uncommon - Stone.png"
import action from "../assets/ACTION REACTION CARD BACK.png"
import avatar from "../assets/Dragon back.png"
//detail page

const Details = () => {
    const [allCards, setAllCards] = useState([])
    const [synergiesCards, setSynergiesCards] = useState([])
    const [role, setRole] = useState("")
    const [cardType, setCardType] = useState("")
    const [isCardFlipped, setisCardFlipped] = useState(false)
    const [flippedCard, setFlippedCard] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const SYNERGIES = location.state.card?.synergies

    const classes = ["Fighter", "Mage", "Assassin", "Tank", "Support", "Healer"]


    const findCardType = () => {
        Object.entries(cards).map(([key,value]) => value.map(card => card?.name === location.state.name && setCardType(key) ))
    }

    const handleSetRole = () => {
        classes.map((item, i) => {
            if(location.state.card.description?.includes(item)){
                setRole(classes[i])
            }
        })
    }

    const handleSetAllCards = () => {
        let allCards_ = []
        Object.entries(cards).map(([key, value]) => value.map(card => allCards_.push(card)))
        setAllCards(allCards_)
    }

    const findSynergies = () => {
        let arr = []
        SYNERGIES?.map(syn => {
          arr.push(allCards.find(c => c?.name === syn))
        })
        setSynergiesCards(arr)
    }

    const changeIsCardFlipped = () => {
        setisCardFlipped(!isCardFlipped)
    }

    const handleFlippedCard = () => {
        if(cardType === "iron"){
            setFlippedCard(iron)
        }
        if(cardType === "gold"){
            setFlippedCard(gold)
        }
        if(cardType === "legendary"){
            setFlippedCard(legendary)
        }
        if(cardType === "stone"){
            setFlippedCard(stone)
        }
        if(cardType === "wood"){
            setFlippedCard(wood)
        }
        if(cardType === "silver"){
            setFlippedCard(silver)
        }
        if(cardType === "action"){
            setFlippedCard(action)
        }
        
        if(cardType === "reaction"){
            setFlippedCard(action)
        }
        
        if(cardType === "avatar"){
            setFlippedCard(avatar)
        }
    }

    useEffect(() => {
        handleSetAllCards()
    }, [])

    useEffect(() => {
        findSynergies()
    }, [SYNERGIES, allCards])

    useEffect(() => {
        handleSetRole()
    }, [])

    useEffect(() => {
        findCardType()
    }, [])

    useEffect(() => {
        if(isCardFlipped === true){
            handleFlippedCard()
        }
    }, [isCardFlipped])

    // const arr = ["Elf", "Beast"]

    // const text = "[Beast | Support] Passive: +10 HP to all Ally Guardians. Activate: Execute 1 Enemy champ under 10% health."

    // const currentClass = arr.map((t,i) => {
    //     if(text.includes(t)){
    //         return i
    //     }
    // })

    // console.log(currentClass)

    return (
        
                <Flex flexDir="column" bgSize="cover" bgRepeat="no-repeat" bgImage={`url(${gallerybg})`} className='main-container' >
                    <Flex borderBottom="2px solid #c08c34" bg="rgba(0,0,0, .5)" mt='79px' h="10vh" w="100vw" alignItems="center" color='white'>
                        <Button borderRadius="none" onClick={() => { navigate("/gallery") }} marginLeft={[4,4,4,10]} colorScheme='grey.700' border="1px solid gold" >
                            <Image w="4" src={arrowleftdetailspage}  style={{marginRight: ".5rem"}} />   
                            <Text color="galleryGold" >BACK</Text>
                        </Button>
                        <Text fontSize={["xl", "2xl", "3xl", "3xl"]} color="grey.500" mx={5} >{location.state.name?.toUpperCase()}</Text>
                        <Text fontSize="24px" color={
                            cardType === "gold" ? "gold" : cardType === "iron" ? "#CFE0EE" : cardType === "wood" ? "#C88943" : cardType === "stone" ? "#BDB8AD" : cardType === "legendary" ? "#86DE5E" : "#c08c34"
                             } mx={1} >{cardType?.toUpperCase()}</Text>
                    </Flex>
                    <Box color="white"  >
                        <Flex flexDir={["column", "column", "column", "row"]} minH="80vh" w="100vw" justifyContent="center" alignItems="center" >
                            <Box m="35px 50px 0px 70px">

                                <Tilt>

                                {/* <figure className={location.state.card?.isRandomShaped === true ? "card-fig-random" : "card-fig"} > */}

                                    <Image css={{
                                        width: "270px",
                                        // boxShadow: "0px 37px 36px -38px white", 
                                        marginBottom: "0px"
                                    }} src={isCardFlipped === false ? location.state.imge : flippedCard} alt="" />
                                    <Box className='card-bottom' style={{ height: "3px" }}></Box>
                                
                                {/* </figure> */}
                                </Tilt>
                                <Text fontSize="12px" color="galleryGold" opacity={0.7} textAlign="center" marginTop="10px" >Art by: X Artist (link)</Text>
                                <Text onClick={changeIsCardFlipped} cursor="pointer" textAlign="center" color="galleryGold" display="flex" alignItems="center"  justifyContent="center" marginTop={2}>Flip the card  <MdOutlineLoop style={{marginLeft: ".5rem"}} />  </Text>
                               <Flex>
                               {/* <GiCycle /> */}
                               </Flex>
                            
                            </Box>
                            <Flex flexDir="column" w={["90%", "90%", "90%", "40%"]} mt="35px" >

                                <Flex border="1px solid #c08c34" bg="rgba(255,255,255,0.1)"  px={4} w="full" py={2} >
                                    <Text>
                                        Name:  
                                    </Text>
                                    <Text ml={4}>
                                        {location.state.name} 
                                    </Text>
                                </Flex>
                                <Flex border="1px solid #c08c34" px={4} w="full" py={2} >
                                    <Text>
                                        Rarity:  
                                    </Text>
                                    <Text ml={4}>
                                        {location.state.card?.properties?.rarity ? location.state.card?.properties?.rarity?.value : "N/A"} 
                                    </Text>
                                </Flex>
                                <Flex border="1px solid #c08c34" bg="rgba(255,255,255,0.1)"  px={4} w="full" py={2} >
                                    <Text>
                                        Element:  
                                    </Text>
                                    <Text ml={4}>
                                        {location.state.card?.properties?.element?.value} 
                                    </Text>
                                </Flex>
                                <Flex border="1px solid #c08c34" px={4} w="full" py={2} >
                                    <Flex w="50%" borderRight="1px solid #c08c34" >
                                        <Text>
                                            Pack:  
                                        </Text>
                                        <Text ml={4}>
                                            Gen 0 
                                        </Text>
                                    </Flex>
                                    <Flex w="50%" pl={4} >
                                        <Text>
                                         Class:  
                                        </Text>
                                        <Text ml={4}>
                                            {role}
                                        </Text>
                                    </Flex>
                                </Flex>
                                <Flex border="1px solid #c08c34" bg="rgba(255,255,255,0.1)"  px={4} w="full" py={2} >
                                    <Text>
                                        Race:  
                                    </Text>
                                    <Text ml={4}>
                                        {location.state.card?.properties?.race?.value} 
                                    </Text>
                                </Flex>
                                <Flex flexDir={["column", "column", "row", "row"]} justifyContent="space-between" border="1px solid #c08c34" px={4} w="full" py={2} >
                                    <Flex >
                                        <Text color="red" >
                                            Attack(ATK):   
                                        </Text>
                                        <Text ml={4}>
                                            {location.state.card?.properties?.attack ? location.state.card?.properties?.attack?.value : "N/A"}
                                        </Text>
                                    </Flex>
                                    <Flex  pl={[0,0,4,4]} >
                                        <Text color="green" >
                                          Health (hp)
                                        </Text>
                                        <Text ml={4}>
                                            {location.state.card?.properties?.hp ? location.state.card?.properties?.hp?.value : "N/A"}
                                        </Text>
                                    </Flex>
                                    <Flex  pl={[0,0,4,4]} >
                                        <Text color="yellow" >
                                         Gold Cost:  
                                        </Text>
                                        <Text ml={4}>
                                            {location?.state?.card?.properties?.gold ? location?.state?.card?.properties?.gold?.value : "N/A"}
                                        </Text>
                                    </Flex>
                                </Flex>
                                {/* <TableContainer className='css-5605sr' mt="5%"> */}
                                    {/* <Table className='css-5605sr' size="sm" variant='simple'>
                                        <Tbody >
                                            <Tr border="solid #c08c34enrod" h="45px">
                                                <Td >Name :</Td>
                                                <Td>{location.state.name}</Td>
                                            </Tr>
                                            <Tr border="solid #c08c34enrod" h="45px">
                                                <Td>Rarity :</Td>
                                                <Td>{location.state.card?.properties?.rarity?.value !== undefined ? location?.state?.card?.properties?.rarity?.value : "N/A"}</Td>
                                            </Tr>
                                            <Tr border="solid orange" h="45px">
                                                <Td>Element :</Td>
                                                <Td>{location.state?.card?.properties?.element?.value}</Td>
                                            </Tr>
                                            <Tr border="solid orange" h="45px" w="100%">
                                                <Td border="1px solid orange" >Pack : Gen 0 </Td>
                                                <Td textAlign="start">Class:</Td>
                                            </Tr>
                                            <Tr border="solid orange" h="45px">
                                                <Td>Race :</Td>
                                            </Tr>
                                            <Tr border="solid orange" h="45px">
                                                <Td color="red" >Attack(ATK):</Td>
                                                <Td color="green"  >Health(hp):</Td>
                                                <Td color="yellow">#c08c34 Cost:</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table> */}
                                {/* </TableContainer> */}
                                <Flex w="100%" justifyContent="center" mt="15px">
                                    <Stack background="rgba(255,255,255,0.1)" px={2} py={2} w="85%" border="1px solid #c08c34">
                                        <Text textAlign="center" >Card Description</Text>
                                        <Text color="sm" >{location.state.card?.description}</Text>
                                    </Stack>
                                </Flex>
                            </Flex>
                            <Box
                                border="1px solid #c08c34"
                                background="rgba(255,255,255,0.1)"
                                h="26rem"
                                w={["90%", "90%", "90%", "25%"]}
                                m={["2rem 0 2rem 0","2rem 0 2rem 0","2rem 0 2rem 0","35px 70px 0px 50px"]}>
                                <Flex m="30px" alignItems="center" justifyContent="center" >
                                    <Text>
                                        KNOWN SYNERGIES:
                                    </Text>
                                </Flex>
                                {synergiesCards?.length === 2 ? (
                                    <Flex w="full" justifyContent="center" >
                                        {synergiesCards?.map(item => (
                                            // <Box onClick={() => navigate("/gallery/detailpage", {state: {
                                            //     desc: item?.description,
                                            //     imge: item?.properties?.image?.value,
                                            //     ctype: cardType,
                                            //     name: item?.name,
                                            //     rarity: item?.properties?.rarity?.value,
                                            //     card: item 
                                            // }})} _hover={{
                                            //     background: `linear-gradient(0deg, rgba(255, 165, 0, 0.3), rgba(255, 165, 0, 0.3)), url(${item?.properties?.image?.value}) `,
                                            //     backgroundSize: "contain",
                                            //     bgRepeat: "no-repeat",
                                            //     bgPos: "center"
                                            // }} w="140px" h="220px" mx={2} bgImage={`url(${item?.properties?.image?.value})`} bgPos="center" bgSize="contain" bgRepeat="no-repeat" />
                                            <Image cursor="pointer" onClick={() => navigate("/gallery/detailpage", {state: {
                                                desc: item?.description,
                                                imge: item?.properties?.image?.value,
                                                ctype: cardType,
                                                name: item?.name,
                                                rarity: item?.properties?.rarity?.value,
                                                card: item 
                                            }})} objectFit="contain" _hover={{
                                                filter: "sepia(100%) brightness(111%) hue-rotate(12deg) saturate(1000%) invert(20%)"
                                            }} w="140px" h="180px" mx={2} src={item?.properties?.image?.value} />
                                        ))}
                                    </Flex>   
                                ) : synergiesCards?.length === 1 ? (
                                    <Flex w="full" justifyContent="center" >
                                        <Image onClick={() => navigate("/gallery/detailpage", {state: {
                                                desc: synergiesCards[0]?.description,
                                                imge: synergiesCards[0]?.properties?.image?.value,
                                                ctype: cardType,
                                                name: synergiesCards[0]?.name,
                                                rarity: synergiesCards[0]?.properties?.rarity?.value,
                                                card: synergiesCards[0] 
                                            }})} cursor="pointer" _hover={{  
                                            filter: "sepia(100%) brightness(111%) hue-rotate(12deg) saturate(1000%) invert(20%)"
                                            // filter: "invert(3%) opacity(100%) sepia(94%) saturate(571%) hue-rotate(2deg) brightness(100%) contrast(100%)"
                                        }} objectFit="contain" w="140px" h="180px" src={synergiesCards[0]?.properties?.image?.value}  />
                                        {/* <Box _hover={{
                                            background: `linear-gradient(0deg, rgba(255, 165, 0, 0.3), rgba(255, 165, 0, 0.3)), url(${synergiesCards[0]?.properties?.image?.value}) `,
                                            backgroundSize: "contain",
                                            bgRepeat: "no-repeat",
                                            bgPos: "center"
                                        }} w="50%" h="50%" mx={2} bgImage={`url(${synergiesCards[0]?.properties?.image?.value})`} bgPos="center" bgSize="contain" bgRepeat="no-repeat" /> */}
                                    </Flex>
                                ) : synergiesCards?.length === 3 ? (
                                    <>
                                    <Flex pos="relative" w="full" justifyContent="center" >
                                        <Image onClick={() => navigate("/gallery/detailpage", {state: {
                                                desc: synergiesCards[0]?.description,
                                                imge: synergiesCards[0]?.properties?.image?.value,
                                                ctype: cardType,
                                                name: synergiesCards[0]?.name,
                                                rarity: synergiesCards[0]?.properties?.rarity?.value,
                                                card: synergiesCards[0] 
                                            }})} cursor="pointer" _hover={{  
                                            filter: "sepia(100%) brightness(111%) hue-rotate(12deg) saturate(1000%) invert(20%)"
                                            // filter: "invert(3%) opacity(100%) sepia(94%) saturate(571%) hue-rotate(2deg) brightness(100%) contrast(100%)"
                                        }} objectFit="contain" w="140px" h="180px" src={synergiesCards[0]?.properties?.image?.value}  />
                                        <Image onClick={() => navigate("/gallery/detailpage", {state: {
                                                desc: synergiesCards[1]?.description,
                                                imge: synergiesCards[1]?.properties?.image?.value,
                                                ctype: cardType,
                                                name: synergiesCards[1]?.name,
                                                rarity: synergiesCards[1]?.properties?.rarity?.value,
                                                card: synergiesCards[1] 
                                            }})} cursor="pointer" _hover={{  
                                            filter: "sepia(100%) brightness(111%) hue-rotate(12deg) saturate(1000%) invert(20%)"
                                            // filter: "invert(3%) opacity(100%) sepia(94%) saturate(571%) hue-rotate(2deg) brightness(100%) contrast(100%)"
                                        }} objectFit="contain" w="140px" h="180px" src={synergiesCards[1]?.properties?.image?.value}  />
                                        <Box pos="absolute" left="50%" transform="translateX(-50%)" bottom="-25px">
                                        <Image onClick={() => navigate("/gallery/detailpage", {state: {
                                                desc: synergiesCards[2]?.description,
                                                imge: synergiesCards[2]?.properties?.image?.value,
                                                ctype: cardType,
                                                name: synergiesCards[2]?.name,
                                                rarity: synergiesCards[2]?.properties?.rarity?.value,
                                                card: synergiesCards[2] 
                                            }})} cursor="pointer" _hover={{  
                                            filter: "sepia(100%) brightness(111%) hue-rotate(12deg) saturate(1000%) invert(20%)"
                                            // filter: "invert(3%) opacity(100%) sepia(94%) saturate(571%) hue-rotate(2deg) brightness(100%) contrast(100%)"
                                        }} objectFit="contain" w="140px" h="180px" src={synergiesCards[2]?.properties?.image?.value}  />
                                        </Box>
                                    {/* <Box _hover={{
                                                background: `linear-gradient(0deg, rgba(255, 165, 0, 0.3), rgba(255, 165, 0, 0.3)), url(${synergiesCards[0]?.properties?.image?.value}) `,
                                                backgroundSize: "contain",
                                                bgRepeat: "no-repeat",
                                                bgPos: "center"
                                            }} w="140px" h="220px" mx={2} bgImage={`url(${synergiesCards[0]?.properties?.image?.value})`} bgPos="center" bgSize="contain" bgRepeat="no-repeat" /> */}
                                    {/* <Box _hover={{
                                                background: `linear-gradient(0deg, rgba(255, 165, 0, 0.3), rgba(255, 165, 0, 0.3)), url(${synergiesCards[1]?.properties?.image?.value}) `,
                                                backgroundSize: "contain",
                                                bgRepeat: "no-repeat",
                                                bgPos: "center"
                                            }} w="140px" h="220px" mx={2} bgImage={`url(${synergiesCards[1]?.properties?.image?.value})`} bgPos="center" bgSize="contain" bgRepeat="no-repeat" /> */}
                                    {/* <Box pos="absolute" left="50%" transform="translateX(-50%)" bottom="-25px">
                                    <Box _hover={{
                                                background: `linear-gradient(0deg, rgba(255, 165, 0, 0.3), rgba(255, 165, 0, 0.3)), url(${synergiesCards[2]?.properties?.image?.value}) `,
                                                backgroundSize: "contain",
                                                bgRepeat: "no-repeat",
                                                bgPos: "center"
                                            }} w="140px" h="220px" mx={2} bgImage={`url(${synergiesCards[2]?.properties?.image?.value})`} bgPos="center" bgSize="contain" bgRepeat="no-repeat" />
                                    </Box> */}
                                </Flex>
                                    </>
                                ) : (
                                    <>
                                    <Flex w="full" justifyContent="center" pos="relative" >
                                        <Text>N/A</Text>
                                    </Flex>
                                    </>
                                )}   
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
    )
}
export default Details

// const MobileDetails = () => {
//     const navigate = useNavigate()
//     const location = useLocation()
//     return (
//         <>
//             <Flex mt='79px' h={16} w="100vw" alignItems="center" background=" var(--chakra-colors-gray-700)" color='white'>
//                 <Button onClick={() => { navigate("/gallery") }} color="#c08c34enrod" marginLeft={5} colorScheme='grey.700' border="1px solid #c08c34" >
//                     <BiLeftArrow />   Back
//                 </Button>
//                 <Text fontSize="18px" color="grey.500" mx={5} >BATTLE MALLARD</Text>
//                 <Text fontSize="17px" color="#c08c34" mx={1} >#c08c34</Text>
//             </Flex>
//             <Box color="white" bg="#181829" >
//                 <Flex justifyContent="center">
//                     <Box marginTop="30px">
//                         <Tilt>
//                             <Image css={{
//                                 width: "200px",
//                                 boxShadow: "0px 37px 36px -38px white", marginBottom: "0px"
//                             }} src={location.state.imge} alt="" />
//                             <Box className='card-bottom' style={{ height: "3px", width: "100%" }}></Box>
//                         </Tilt>
//                         <Text fontSize="12px" color="yellow" textAlign="center" marginTop="14px" >Flip the card</Text>
//                         <Text textAlign="center" color="yellow" marginTop="10px">Flip the card</Text>
//                     </Box>
//                 </Flex>
//                 <Flex alignItems="center" justifyContent="center" flexDir="column" mt="60px" >
//                     <TableContainer className='css-5605sr' mt="5%" w="100%" p="5%">
//                         <Table className='css-5605sr' size="sm" variant='simple'>
//                             <`Tbody>
//                                 <Tr border="solid #c08c34" h="45px">
//                                     <Td>Name :</Td>
//                                 </Tr>
//                                 <Tr border="solid #c08c34" h="45px">
//                                     <Td>Rarity :</Td>
//                                 </Tr>
//                                 <Tr border="solid orange" h="45px">
//                                     <Td>Element :</Td>
//                                 </Tr>
//                                 <Tr border="solid orange" h="45px" w="100%">
//                                     <Td border="1px solid orange" >Pack:Gen 0 </Td>
//                                     <Td textAlign="start">Class:</Td>
//                                 </Tr>
//                                 <Tr border="solid orange" h="45px">
//                                     <Td>Race :</Td>
//                                 </Tr>
//                                 <Tr border="solid orange" h="45px">
//                                     <Td color="red" >Attack(ATK):</Td>
//                                     <Td color="green"  >Health(hp):</Td>
//                                     <Td color="yellow">#c08c34 Cost:</Td>
//                                 </Tr>
//                             </Tbody>
//                         </Table>
//                     </TableContainer>
//                     <Flex w="100%" justifyContent="center" mt="10px">
//                         <Stack background="rgba(255,255,255,0.1)" w="75%" border="solid #c08c34enrod">
//                             <Text textAlign="center" h="75px" p="8px">Card Description:</Text>
//                         </Stack>
//                     </Flex>
//                 </Flex>
//                 <Flex justifyContent="center">
//                     <Box
//                         border="solid #c08c34enrod"
//                         background="#2D3748"
//                         m="60px 0px ">
//                         <Flex m="30px" alignItems="center" justifyContent="center" >
//                             <Text>
//                                 KNOWN SYNERGIES:
//                             </Text>
//                         </Flex>
//                         <Flex pos="relative" >
//                             <Image _hover={{
//                                 WebkitFilter: " grayscale(100%)",
//                                 filter: "sepia()"
//                             }} w="140px" h="180px" m="10px" src={location.state.imge} alt="" />
//                             <Image
//                                 _hover={{
//                                     WebkitFilter: " grayscale(100%)",
//                                     filter: "sepia()"

//                                 }} w="140px" h="180px" m="10px" src={location.state.imge} alt="" />
//                             <Box pos="absolute" left="25%" right="25%" bottom="-25px">
//                                 <Image
//                                     _hover={{
//                                         WebkitFilter: " grayscale(100%)",
//                                         filter: "sepia()"

//                                     }} w="140px" h="180px" src={location.state.imge} alt="" />
//                                 <Text pos='absolute' fontSize="6rem" left="65%" top="45%" opacity="0.7"> +</Text>
//                                 <Text pos='absolute' fontSize="3rem" left="95%" top="82%" opacity="0.7"> 2</Text>
//                             </Box>
//                         </Flex>
//                         <Flex marginTop="22%" alignItems="center" justifyContent="center" >
//                             <Text>
//                                 VIEW ALL 
//                             </Text>
//                             {/* {AiOutlineArrowRight} */}

//                         </Flex>
//                     </Box>
//                 </Flex>
//             </Box>
//         </>
//     )
// }