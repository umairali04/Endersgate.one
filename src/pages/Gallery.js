import { Flex, Grid, GridItem, useDisclosure} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import gallerybg from "../assets/gallerybg.svg"
import cards from "../assets/cards.json"
import fade from "../assets/fade.svg"
import Heading from '../components/Heading'
import Filters from '../components/Filters'
import Card from '../components/Card'
// import '../scrollbar.scss';
// import '../scss/scrollbar.scss';

const Gallery = () => {
  const [cardType, setCardType] = React.useState("all")
  const [sort, setSort] = React.useState({value: "price-high-low", label: "Price High-Low"})
  const [filters, setFilters] = React.useState({avatar: [], cardRole: [], cardRace: [], cardElement: []})
  const [search, setSearch] = React.useState("")
  const [filteredCards, setFilteredCards] = React.useState([])
  const {onOpen} = useDisclosure()


  let allFils = []
  Object.entries(filters).map(([key, value]) => value.map(item => allFils.push(item)))

  const handleSort = (a,b) => {
    if(sort.value === "price-low-high"){
      return a.properties?.id?.value - b.properties?.id?.value
    }else if(sort.value === "price-high-low"){
      return b.properties?.id?.value - a.properties?.id?.value
    }else if(sort.value === "gold-low-high"){
      return a.properties?.gold?.value - b.properties?.gold?.value
    }else if(sort.value === "gold-high-low"){
      return b.properties?.gold?.value - a.properties?.gold?.value
    }else if(sort.value === "attack-high-low"){
      return b.properties?.attack?.value - a.properties?.attack?.value
    }else if(sort.value === "health-high-low"){
      return b.properties?.hp?.value - a.properties?.hp?.value
    }
  }

  const setAllCards = () => {
    let allCards = []
    Object.entries(cards).map(([key, value]) => value.map(card => allCards.push(card)))
    
    setFilteredCards(allCards.filter(card => card?.name !== "Shinobi Guardian"))
  }

  const filterCards = () => {
    let allCards = []
    let filCards = []
    Object.entries(cards).map(([key, value]) => value.map(card => allCards.push(card)))
    const element = filters.cardElement?.map(item => item?.toLowerCase())
    const race = filters?.cardRace?.map(item => item?.toLowerCase())
    const role = filters?.cardRole?.map(item => item?.toLowerCase())
    const cardTypeFilter = filters?.avatar?.map(item => item?.toLowerCase())
    if(cardType === "all"){
      if(filters.cardElement.length > 0){
        const elementCards = allCards.filter(card => element?.includes(card?.properties?.element?.value?.toLowerCase()))   
        filCards.push(elementCards) 
      }
      if(filters.cardRace.length > 0){
        const raceCards = allCards.filter(card => race?.includes(card?.properties?.race?.value?.toLowerCase()))
        filCards.push(raceCards)
      }
      if(filters.cardRole.length > 0){
        const roleCards = allCards.filter(card => role?.includes(card?.properties?.role?.value?.toLowerCase()))
        filCards.push(roleCards)
      }
      if(filters.avatar.length > 0){
        if(cardTypeFilter?.includes("avatars")){
          filCards.push(cards.avatar)
        }
        if(cardTypeFilter?.includes("guardians")){
          const guardianCards = allCards.filter(card => card?.properties?.isGuardian?.value === true)
          filCards.push(guardianCards)
        }
        if(cardTypeFilter?.includes("reaction cards")){
          filCards.push(cards.reaction)
        }
        if(cardTypeFilter?.includes("action cards")){
          filCards?.push(cards.action)
        }
        if(cardTypeFilter?.includes("ghost cards")){
          const ghostCards = allCards.filter(card => card?.name === "Shinobi Guardian")
          filCards.push(ghostCards)
        }
      }
    }
    if(cardType === "wood"){
      if(filters.cardElement.length > 0){
        const elementCards = cards.wood.filter(card => element?.includes(card?.properties?.element?.value?.toLowerCase()))   
        filCards.push(elementCards) 
      }
      if(filters.cardRace.length > 0){
        const raceCards = cards.wood.filter(card => race?.includes(card?.properties?.race?.value?.toLowerCase()))
        filCards.push(raceCards)
      }
      if(filters.cardRole.length > 0){
        const roleCards = cards.wood.filter(card => role?.includes(card?.properties?.role?.value?.toLowerCase()))
        filCards.push(roleCards)
      }
      if(filters.avatar.length > 0){
        if(cardTypeFilter?.includes("avatars")){
          filCards.push(cards.avatar)
        }
        if(cardTypeFilter?.includes("guardians")){
          const guardianCards = cards.wood.filter(card => card?.properties?.isGuardian?.value === true)
          filCards.push(guardianCards)
        }
        if(cardTypeFilter?.includes("reaction cards")){
          filCards.push(cards.reaction)
        }
        if(cardTypeFilter?.includes("action cards")){
          filCards?.push(cards.action)
        }
        if(cardTypeFilter?.includes("ghost cards")){
          const ghostCards = allCards.filter(card => card?.name === "Shinobi Guardian")
          filCards.push(ghostCards)
        }
      }
    }
    if(cardType === "silver"){
      if(filters.cardElement.length > 0){
        const elementCards = cards.stone.filter(card => element?.includes(card?.properties?.element?.value?.toLowerCase()))   
        filCards.push(elementCards) 
      }
      if(filters.cardRace.length > 0){
        const raceCards = cards.stone.filter(card => race?.includes(card?.properties?.race?.value?.toLowerCase()))
        filCards.push(raceCards)
      }
      if(filters.cardRole.length > 0){
        const roleCards = cards.stone.filter(card => role?.includes(card?.properties?.role?.value?.toLowerCase()))
        filCards.push(roleCards)
      }
      if(filters.avatar.length > 0){
        if(cardTypeFilter?.includes("avatars")){
          filCards.push(cards.avatar)
        }
        if(cardTypeFilter?.includes("guardians")){
          const guardianCards = cards.stone.filter(card => card?.properties?.isGuardian?.value === true)
          filCards.push(guardianCards)
        }
        if(cardTypeFilter?.includes("reaction cards")){
          filCards.push(cards.reaction)
        }
        if(cardTypeFilter?.includes("action cards")){
          filCards?.push(cards.action)
        }
        if(cardTypeFilter?.includes("ghost cards")){
          const ghostCards = allCards.filter(card => card?.name === "Shinobi Guardian")
          filCards.push(ghostCards)
        }
      }
    }
    if(cardType === "gold"){
      if(filters.cardElement.length > 0){
        const elementCards = cards.gold.filter(card => element?.includes(card?.properties?.element?.value?.toLowerCase()))   
        filCards.push(elementCards) 
      }
      if(filters.cardRace.length > 0){
        const raceCards = cards.gold.filter(card => race?.includes(card?.properties?.race?.value?.toLowerCase()))
        filCards.push(raceCards)
      }
      if(filters.cardRole.length > 0){
        const roleCards = cards.gold.filter(card => role?.includes(card?.properties?.role?.value?.toLowerCase()))
        filCards.push(roleCards)
      }
      if(filters.avatar.length > 0){
        if(cardTypeFilter?.includes("avatars")){
          filCards.push(cards.avatar)
        }
        if(cardTypeFilter?.includes("guardians")){
          const guardianCards = cards.gold.filter(card => card?.properties?.isGuardian?.value === true)
          filCards.push(guardianCards)
        }
        if(cardTypeFilter?.includes("reaction cards")){
          filCards.push(cards.reaction)
        }
        if(cardTypeFilter?.includes("action cards")){
          filCards?.push(cards.action)
        }
        if(cardTypeFilter?.includes("ghost cards")){
          const ghostCards = allCards.filter(card => card?.name === "Shinobi Guardian")
          filCards.push(ghostCards)
        }
      }
    }
    if(cardType === "legend"){
      if(filters.cardElement.length > 0){
        const elementCards = cards.legendary.filter(card => element?.includes(card?.properties?.element?.value?.toLowerCase()))   
        filCards.push(elementCards) 
      }
      if(filters.cardRace.length > 0){
        const raceCards = cards.legendary.filter(card => race?.includes(card?.properties?.race?.value?.toLowerCase()))
        filCards.push(raceCards)
      }
      if(filters.cardRole.length > 0){
        const roleCards = cards.legendary.filter(card => role?.includes(card?.properties?.role?.value?.toLowerCase()))
        filCards.push(roleCards)
      }
      if(filters.avatar.length > 0){
        if(cardTypeFilter?.includes("avatars")){
          filCards.push(cards.avatar)
        }
        if(cardTypeFilter?.includes("guardians")){
          const guardianCards = cards.legendary.filter(card => card?.properties?.isGuardian?.value === true)
          filCards.push(guardianCards)
        }
        if(cardTypeFilter?.includes("reaction cards")){
          filCards.push(cards.reaction)
        }
        if(cardTypeFilter?.includes("action cards")){
          filCards?.push(cards.action)
        }
        if(cardTypeFilter?.includes("ghost cards")){
          const ghostCards = allCards.filter(card => card?.name === "Shinobi Guardian")
          filCards.push(ghostCards)
        }
      }
    }
    setFilteredCards(filCards.flat())
  }

  const handleCardTypeChange = () => {
    if(cardType === "all"){
      setAllCards()
    }else if(cardType === "wood"){
      allFils?.length > 0 ? filterCards() : setFilteredCards(cards.wood)
    }else if(cardType === "silver"){
      allFils?.length > 0 ? filterCards() : setFilteredCards(cards.stone)
    }else if(cardType === "iron"){
      allFils?.length > 0 ? filterCards() : setFilteredCards(cards.iron)
    }else if(cardType === "gold"){
      allFils?.length > 0 ? filterCards() : setFilteredCards(cards.gold)
    }else if(cardType === "legend"){
      allFils?.length > 0 ? filterCards() : setFilteredCards(cards.legendary)
    }
  }

  useEffect(() => {
    filterCards()
    if(allFils.length === 0 && cardType === "all"){
      setAllCards()
    }else if(allFils.length === 0 && cardType === "wood"){
      setFilteredCards(cards.wood)
    }
    else if(allFils.length === 0 && cardType === "silver"){
      setFilteredCards(cards.stone)
    }
    else if(allFils.length === 0 && cardType === "iron"){
      setFilteredCards(cards.iron)
    }
    else if(allFils.length === 0 && cardType === "gold"){
      setFilteredCards(cards.gold)
    }
    else if(allFils.length === 0 && cardType === "legend"){
      setFilteredCards(cards.legendary)
    }
  }, [filters])

  useEffect(() => {
    setAllCards()
  }, [])

  useEffect(() => {
    handleCardTypeChange()
  }, [cardType])

  return (
    <>

    <Flex  flexDir="column" py={28} bgImage={`url(${gallerybg})`} minH="100vh" w="100vw" className='main-container'>
        <Heading/>
        <Flex alignItems="flex-start" zIndex={22} w="full" h="36" bgImage={`url(${fade})`} > 
            <Filters filteredCards={filteredCards} filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} onOpen={onOpen} setSearch={setSearch} cardType={cardType} setCardType={setCardType} />        
        </Flex>
        <Grid w="full" overflowX="hidden" mt={[12, 12, 0,0]} px={10} gap="10" templateColumns={["repeat(3, 1fr)", "repeat(3,1fr)", "repeat(4,1fr)", "repeat(7,1fr)"]} >
        {/* {cardType === "gold" && cards.gold.sort(handleSort).filter(card => {
          if(search === ""){
            return card
          }else if(card.name.toLowerCase().includes(search.toLowerCase())){
            return card
          }
        }).map(card => (
            <GridItem w="100%" >
                <Card cardType={cardType} description={card.description} image={card.properties.image.value} />
            </GridItem>
        ))}
        {cardType === "wood" && cards.wood.sort(handleSort).filter(card => {
          if(search === ""){
            return card
          }else if(card.name.toLowerCase().includes(search.toLowerCase())){
            return card
          }
        }).map(card => (
            <GridItem w="100%" >
                <Card cardType={cardType} description={card.description} image={card.properties.image.value} />
            </GridItem>
        ))} */}
        {/* {cardType === "iron" && cards.iron.sort(handleSort).filter(card => {
          if(search === ""){
            return card
          }else if(card.name.toLowerCase().includes(search.toLowerCase())){
            return card
          }
        }).map(card => (
            <GridItem w="100%" >
                <Card cardType={cardType} description={card.description} image={card.properties.image.value} />
            </GridItem>
        ))}
        {cardType === "legend" && cards.legendary.sort(handleSort).filter(card => {
          if(search === ""){
            return card
          }else if(card.name.toLowerCase().includes(search.toLowerCase())){
            return card
          }
        }).map(card => (
            <GridItem w="100%" >
                <Card cardType={cardType} description={card.description} image={card.properties.image.value} />
            </GridItem>
        ))}
        {cardType === "silver" && cards.stone.sort(handleSort).filter(card => {
          if(search === ""){
            return card
          }else if(card.name.toLowerCase().includes(search.toLowerCase())){
            return card
          }
        }).map(card => (
            <GridItem w="100%" >
                <Card cardType={cardType} description={card.description} image={card.properties.image.value} />
            </GridItem>
        ))} */}
        
        {filteredCards.sort(handleSort).filter(card => {
          if(search === ""){
            return card
          }else if(card.name.toLowerCase().includes(search.toLowerCase())){
            return card
          }
        }).map(card => (
          <GridItem w="100%" >
              <Card card={card} rarity={card?.properties?.rarity?.value} name={card?.name} cardType={cardType} description={card?.description} image={card?.properties?.image?.value} />
          </GridItem>
        ))}
        </Grid>
    </Flex>
    </>
  )
}

export default Gallery
