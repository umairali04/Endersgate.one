import {  Flex, Image, Input, InputGroup, InputLeftElement, Text, Checkbox, useMediaQuery} from '@chakra-ui/react'
import React, { useState } from 'react'
import {AiOutlineSortAscending, AiOutlineSearch, AiOutlineClose} from "react-icons/ai"
import Select, {components} from "react-select"
import {FiFilter} from "react-icons/fi"
import woodfilter from "../assets/woodfilter.svg"
import silverfilter from "../assets/silverfilter.svg"
import ironfilter from "../assets/ironfilter.svg"
import goldfilter from "../assets/goldfilter.svg"
import selectedoptionarrow from "../assets/selectedoptionarrow.svg"
import legendfilter from "../assets/legendfilter.svg"

const Filters = ({cardType, setCardType, setSearch, sort, setSort, filters, setFilters, filteredCards}) => {

//   const length = Object.entries(cards).map(card => card[1].length).reduce((a, b) => a + b, 0)
  const [open ,setOpen] = useState(false)
  const {Option, SingleValue} = components
  const [isDesktop] = useMediaQuery("(min-width: 1280px)")

  const options = [
    {value: "price-high-low", label: "Price High-Low"},
    {value: "price-low-high", label: "Price Low-High"},
    {value: "gold-high-low", label: "Gold High-Low"},
    {value: "gold-low-high", label: "Gold Low-High"},
    {value: "attack-high-low", label: "Attack High-Low"},
    {value: "health-high-low", label: "Health High-Low"},

  ]

  const CustomOption = props => (
    <Option {...props} >
        {/* <Flex cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border="1px solid gold" borderRadius="none" justifyContent="center" alignItems="center" px={2} h="10" bg="transparent" > */}
            {/* <Text mr={1} color="galleryGold" >Sorting: </Text> */}
            <AiOutlineSortAscending color='#FFDB8A' />
            <Text mr={4} ml={2} color="galleryGold" >{props.data.label}</Text>
            {props.isSelected === true && <Image w="5" h="5" src={selectedoptionarrow} />}
            {/* <RiArrowDownSFill color= "yes" :"#FFDB8A" /> */}
        {/* </Flex> */}
    </Option>
  )

  const customSelectedValue = props => (
      <SingleValue {...props} >
        <Text mr={2} color="galleryGold" >Sort: </Text>  
        <AiOutlineSortAscending color='#FFDB8A' />
        <Text ml={2} color="galleryGold" >{props.data.label}</Text>
      </SingleValue>
  )

  const sortStyle = {
    control: (base) => ({
        ...base,
        border: "1px solid gold",
        width: "15rem",
        height: "2rem",
        background: "transparent",
        borderRadius: "none",
        "&:hover": {
            border: "1px solid gold",
        }
    }),
    dropdownIndicatorContainer: base =>  ({
        ...base,
        display: "none"
    }),
    indicatorsContainer: base => ({
        ...base, 
        display: "none"
    }),
    placeholder: base => ({
        ...base,
        color: "white",
    }),
    option: (base, state) => ({
        ...base,
        background: "transparent",
        width: "15rem",
        display: "flex",
        border:"1px solid gold",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
            background: "#4f3f1e"
        }
    }),
    menu: base => ({
        ...base,
        background: "rgba(0,0,0,0.5)",
        zIndex: 222
    }),
    singleValue: (base, state) => ({
        ...base,
        display: "flex",
        alignItems: "center"
    })
  }

  const handleCardsFilterChange = (type) => {
    if(cardType === type){
      setCardType("all")
    }else{
        setCardType(type)
    }
  }

  const handleAvatarChange = (checked, value) => {
    if(checked){
        setFilters({...filters,  avatar: [...filters.avatar, value]})
    }else{
        let arr = [...filters.avatar]
        const index = arr.findIndex(item => item === value)
        arr.splice(index, 1)
        setFilters({...filters, avatar: arr})
    } 
  }

  const handleRaceChange = (checked, value) => {
    if(checked){
        setFilters({...filters,  cardRace: [...filters.cardRace, value]})
    }else{
        let arr = [...filters.cardRace]
        const index = arr.findIndex(item => item === value)
        arr.splice(index, 1)
        setFilters({...filters, cardRace: arr})
    } 
  }

  const handleRoleChange = (checked, value) => {
    if(checked){
        setFilters({...filters,  cardRole: [...filters.cardRole, value]})
    }else{
        let arr = [...filters.cardRole]
        const index = arr.findIndex(item => item === value)
        arr.splice(index, 1)
        setFilters({...filters, cardRole: arr})
    } 
  }

  const handleElementChange = (checked, value) => {
    if(checked){
        setFilters({...filters,  cardElement: [...filters.cardElement, value]})
    }else{
        let arr = [...filters.cardElement]
        const index = arr.findIndex(item => item === value)
        arr.splice(index, 1)
        setFilters({...filters, cardElement: arr})
    } 
  }

  return (
    <>
    <Flex flexDir={["column", "column", "row", "row"]} px={10} alignItems={["center", "center", "flex-start", "flex-start"]} w="full" justifyContent="space-between" >

        <Select  onChange={e => setSort(e)} value={sort} components={{Option: CustomOption, SingleValue: customSelectedValue}} styles={sortStyle} options={options} />
        {/* <Flex cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border="1px solid gold" borderRadius="none" justifyContent="center" alignItems="center" px={2} h="10" bg="transparent" >
            <Text mr={1} color="galleryGold" >Sorting: </Text>
            <AiOutlineSortAscending color='#FFDB8A' />
            <Text ml={2} color="galleryGold" >Gold Low-High</Text>
            <RiArrowDownSFill color="#FFDB8A" />
        </Flex>         */}
        <Text position={["relative", "relative", "absolute", "absolute"]} left={["0", "0", "50%", "50%"]} transform={["none", "none", "translate(-50%)" , "translate(-50%)"]}  my={[2, 2, 0,2]} color="gray.300">{filteredCards?.length} Results</Text>
        {isDesktop ? (

        <Flex  >
            <Flex onClick={() => handleCardsFilterChange("wood")} flexShrink={0} cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border={`1px solid ${cardType === "wood" ? "white" : "gold"}`}  bg="transparent" rounded="none" w="10" h="10" justifyContent="center" alignItems="center" >
                <Image w="50%" src={woodfilter} />
            </Flex>
            <Flex onClick={() => handleCardsFilterChange("silver")} flexShrink={0} cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border={`1px solid ${cardType === "silver" ? "white" : "gold"}`}  bg="transparent" rounded="none" w="10" h="10" justifyContent="center" alignItems="center" >
                <Image w="50%" src={silverfilter} />
            </Flex>
            <Flex onClick={() => handleCardsFilterChange("iron")} flexShrink={0} cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border={`1px solid ${cardType === "iron" ? "white" : "gold"}`}  bg="transparent" rounded="none" w="10" h="10" justifyContent="center" alignItems="center" >
                <Image w="50%" src={ironfilter} />
            </Flex>
            <Flex onClick={() => handleCardsFilterChange("gold")} flexShrink={0} cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border={`1px solid ${cardType === "gold" ? "white" : "gold"}`}  bg="transparent" rounded="none" w="10" h="10" justifyContent="center" alignItems="center" >
                <Image w="50%" src={goldfilter} />
            </Flex>
            <Flex onClick={() => handleCardsFilterChange("legend")} flexShrink={0} cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border={`1px solid ${cardType === "legend" ? "white" : "gold"}`}  bg="transparent" rounded="none" w="10" h="10" justifyContent="center" alignItems="center" >
                <Image w="50%" src={legendfilter} />
            </Flex>
            <Flex onClick={() => setOpen(true)} flexShrink={0} ml={4} cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border="1px solid gold" borderRadius="none" justifyContent="center" alignItems="center" px={2} h="10" bg="transparent" >
                <FiFilter color='#FFDB8A' />
                <Text ml={2}  color="galleryGold" >Filters</Text>
            </Flex>
            <InputGroup ml={4} flexShrink={0} >
                <InputLeftElement
                children={<AiOutlineSearch color="#FFDB8A" />}
                /> 
                <Input onChange={e => setSearch(e.target.value)} _placeholder={{color: "#FFDB8A"}} color="galleryGold" focusBorderColor='white' rounded="none" borderColor="gold" variant="outline" placeholder="Search" w="36" />            
            </InputGroup> 
        </Flex>
        ) : <MobileCardType setOpen={setOpen} setSearch={setSearch} cardType={cardType} handleCardsFilterChange={handleCardsFilterChange} />}
    </Flex>
  
  
    <Flex
    className="filter-container" 
    position="fixed"
    transition=".5s all ease"
    zIndex={124}
    w="56"
    overflowX="hidden"
    top={20}
    overflowY="scroll"
    left={`${open === true ? "0" : "-100%"}`}
    bg="#080813"
    h="100vh"
    flexDir="column"
    pl={4}
    pt={4}
    pb={20}
    >   
        <Flex flexDir="column" mb={4} >
            <div style={{display:"flex"}}>
            <Text mb={4} color="galleryGold" fontSize="xl" fontWeight="semibold"  >CARD TYPE</Text> <AiOutlineClose style={{marginLeft:"55px",marginTop:"5px",fontSize:"20px"}} cursor="pointer" onClick={() => setOpen(false)} color="#FFDB8A"  /></div>
            <Checkbox fontWeight="semibold" color="galleryGold"  onChange={e => handleAvatarChange(e.target.checked, "avatars")} colorScheme="white"  mb={2}  > 
                AVATARS
            </Checkbox>
            <Checkbox fontWeight="semibold" color="galleryGold" onChange={e => handleAvatarChange(e.target.checked, "guardians")} colorScheme="white"  mb={2}  > 
                GUARDIANS
            </Checkbox>
            <Checkbox fontWeight="semibold" color="galleryGold"  onChange={e => handleAvatarChange(e.target.checked, "reaction cards")} colorScheme="white"  mb={2}  > 
                REACTION CARDS
            </Checkbox>
            <Checkbox fontWeight="semibold" color="galleryGold" onChange={e => handleAvatarChange(e.target.checked, "action cards")} colorScheme="white"  mb={2}  > 
                ACTION CARDS
            </Checkbox>
            <Checkbox fontWeight="semibold" color="galleryGold"  onChange={e => handleAvatarChange(e.target.checked, "ghost cards")} colorScheme="white"  mb={2}  > 
                GHOST CARDS
            </Checkbox>

            {/* <Checkbox isChecked={filters.avatar[0] === "no" ? true : false} onChange={e => handleAvatarChange(e.target.checked, "no")} colorScheme="white" color="galleryGold"  > 
                No
            </Checkbox> */}
        </Flex>
        <Flex flexDir="column" mb={4} >
            <Text mb={4} color="galleryGold" fontSize="xl" fontWeight="semibold"  >GUARDIAN ROLE</Text>
            <Checkbox fontWeight="semibold" onChange={e => handleRoleChange(e.target.checked, "fighter")} colorScheme="white" mb={2} color="galleryGold"  > 
                Fighter
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRoleChange(e.target.checked, "mage")} colorScheme="white" mb={2} color="galleryGold"  > 
                Mage
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRoleChange(e.target.checked, "assassin")} colorScheme="white" mb={2} color="galleryGold"  > 
                Assassin
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRoleChange(e.target.checked, "tank")} colorScheme="white" mb={2} color="galleryGold"  > 
                Tank
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRoleChange(e.target.checked, "support")} colorScheme="white" mb={2} color="galleryGold"  > 
                Support
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRoleChange(e.target.checked, "healer")} colorScheme="white" color="galleryGold"  > 
                Healer
            </Checkbox>
        </Flex>
        <Flex flexDir="column" mb={4} >
            <Text mb={4} color="galleryGold" fontSize="xl" fontWeight="semibold"  >GUARDIAN RACE</Text>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "human")} colorScheme="white" mb={2} color="galleryGold"  > 
                Human
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "dwarf")} colorScheme="white" mb={2} color="galleryGold"  > 
                Dwarf
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "beast")} colorScheme="white" mb={2} color="galleryGold"  > 
                Beast
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "goblin")} mb={2} colorScheme="white" color="galleryGold"  > 
                Goblin
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "ogre")} colorScheme="white" mb={2} color="galleryGold"  > 
                Ogre
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "zombie")} mb={2} colorScheme="white" color="galleryGold"  > 
                Zombie
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "vampire")} colorScheme="white"  mb={2} color="galleryGold"  > 
                Vampire
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "demon")} colorScheme="white" mb={2} color="galleryGold"  > 
                Demon
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "undead")} colorScheme="white" mb={2} color="galleryGold"  > 
                Undead
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "insect")} colorScheme="white" mb={2} color="galleryGold"  > 
                Insect
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "elemental")} colorScheme="white" mb={2} color="galleryGold"  > 
                Elemental
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "golem")} colorScheme="white" mb={2} color="galleryGold"  > 
                Golem
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "cephalo")} colorScheme="white" mb={2} color="galleryGold"  > 
                Cephalo
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "spirit")} colorScheme="white" mb={2} color="galleryGold"  > 
                Spirit
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "monster")} colorScheme="white" mb={2} color="galleryGold"  > 
                Monster
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "ascended")} colorScheme="white" mb={2} color="galleryGold"  > 
                Ascended
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "giant")} colorScheme="white" mb={2} color="galleryGold"  > 
                Giant
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "sentinel")} colorScheme="white"  mb={2} color="galleryGold"  > 
                Sentinel
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleRaceChange(e.target.checked, "shark")} colorScheme="white" color="galleryGold"  > 
                Shark
            </Checkbox>
        </Flex>
        <Flex flexDir="column" mb={4} >
            <Text mb={4} color="galleryGold" fontSize="xl" fontWeight="semibold"  >ELEMENT</Text>
            <Checkbox fontWeight="semibold" onChange={e => handleElementChange(e.target.checked, "void")} colorScheme="white" mb={2} color="galleryGold"  > 
                VOID
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleElementChange(e.target.checked, "mystic")} colorScheme="white" mb={2} color="galleryGold"  > 
               MYSTIC 
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleElementChange(e.target.checked, "earth")} colorScheme="white" mb={2} color="galleryGold"  > 
                EARTH
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleElementChange(e.target.checked, "venom")} colorScheme="white" mb={2} color="galleryGold"  > 
                VENOM
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleElementChange(e.target.checked, "fire")} colorScheme="white" mb={2} color="galleryGold"  > 
                FIRE
            </Checkbox>
            <Checkbox fontWeight="semibold" onChange={e => handleElementChange(e.target.checked, "water")} colorScheme="white" color="galleryGold"  > 
                WATER
            </Checkbox>
        </Flex>
    </Flex>
    </>
  )
}

export default Filters

const MobileCardType = ({handleCardsFilterChange, cardType, setOpen, setSearch}) => {
    return (
        <Flex flexDir="column" >
            <Flex w="full" justifyContent="center" mb={2} >
                <Flex onClick={() => handleCardsFilterChange("wood")} flexShrink={0} cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border={`1px solid ${cardType === "wood" ? "white" : "gold"}`}  bg="transparent" rounded="none" w="10" h="10" justifyContent="center" alignItems="center" >
                    <Image w="50%" src={woodfilter} />
                </Flex>
                <Flex onClick={() => handleCardsFilterChange("silver")} flexShrink={0} cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border={`1px solid ${cardType === "silver" ? "white" : "gold"}`}  bg="transparent" rounded="none" w="10" h="10" justifyContent="center" alignItems="center" >
                    <Image w="50%" src={silverfilter} />
                </Flex>
                <Flex onClick={() => handleCardsFilterChange("iron")} flexShrink={0} cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border={`1px solid ${cardType === "iron" ? "white" : "gold"}`}  bg="transparent" rounded="none" w="10" h="10" justifyContent="center" alignItems="center" >
                    <Image w="50%" src={ironfilter} />
                </Flex>
                <Flex onClick={() => handleCardsFilterChange("gold")} flexShrink={0} cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border={`1px solid ${cardType === "gold" ? "white" : "gold"}`}  bg="transparent" rounded="none" w="10" h="10" justifyContent="center" alignItems="center" >
                    <Image w="50%" src={goldfilter} />
                </Flex>
                <Flex onClick={() => handleCardsFilterChange("legend")} flexShrink={0} cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border={`1px solid ${cardType === "legend" ? "white" : "gold"}`}  bg="transparent" rounded="none" w="10" h="10" justifyContent="center" alignItems="center" >
                    <Image w="50%" src={legendfilter} />
                </Flex>
            </Flex>
            <Flex>
                <Flex onClick={() => setOpen(true)} flexShrink={0} ml={4} cursor="pointer" _hover={{border: "1px solid white"}} transition=".5s all ease" border="1px solid gold" borderRadius="none" justifyContent="center" alignItems="center" px={2} h="10" bg="transparent" >
                    <FiFilter color='#FFDB8A' />
                    <Text ml={2}  color="galleryGold" >Filters</Text>
                </Flex>
                <InputGroup ml={4} flexShrink={0} >
                    <InputLeftElement
                    children={<AiOutlineSearch color="#FFDB8A" />}
                    /> 
                    <Input onChange={e => setSearch(e.target.value)} _placeholder={{color: "#FFDB8A"}} color="galleryGold" focusBorderColor='white' rounded="none" borderColor="gold" variant="outline" placeholder="Search" w="36" />            
                </InputGroup> 
            </Flex>
        </Flex> 
    )
}