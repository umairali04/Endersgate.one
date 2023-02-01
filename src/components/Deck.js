import { Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
import deckbg from "../assets/deckbg.svg"
import deck from "../assets/deck.svg"
import useLazyBackgroundImage from "../utils/useLazyBackgroundImage"

const Deck = () => {
  const loaded = useLazyBackgroundImage(deckbg)
  return (
    <Flex w="full" overflowY="hidden" alignItems="center" flexDir={["column", "column", "row", "row"]} justifyContent={["center", "center", "flex-end", "flex-end"]} position="relative" bgImage={`url(${loaded || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEhUSDxIWFRUVFRUVFRUVFRcVFhUXFRUWFhcVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKCwUFDgUFGisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAlEAEBAQEAAQIGAgMAAAAAAAAAARECEiFBMVFhkbHwcYGhwfH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APrCsqCriNQDFkGpASRqRZFkBJys5akWQGfFfFvDAZ8V8WsXAZ8TxaxcBjxXxaxcBjxPFrDAY8TxbwwHPxPFuwwHPxTxdLEsBz8UvLpiWA5WJY6YzYDniY6WM0GMRqpQRCmgCGgsXFkakQZ5jciyNzkGZGpG5GpyDMiyNyNSA541I1IsgMyLjWLgMSLjWLgMYRswGcMaAYq40AziWNgMQxrDAYxMdKmAxjOOuJgONiY7YzgONjNjvYxYDhiWO15ZsBxsYduoxYDCNoDpI3zynMdeYCTlvmLI1gJI3IsiyAki4pAMMUACKCYKlAUARRICgAGIoGIqUAUBksUgJiWNIDFiY2mA5Xlix3sY6gOFjFjvY52A42M116jHqD0c8unMTmOkgLIsiyLAJFFBFAAIAAAAAAAAAAAAAAAAAAAJVATEaQGbGbHSpYDlY59R2sY6gOHUc7y79RzsB6eY3InLUBeYooCRQAAEqgAACRQASKAAAlUAAASKACKAAAlUAAAQUBixix0rNgOPUc7HbpzoO8bjny6QGoJCwFAABJAUAASKACWAoAAhICgACKACWAoAAJICgACKACWAM1pmg59OVdenG/z+AeiNxy5rcoNqzGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAErNarHVBjpzrfTnaDpzW44yukoOsWMStQGiJFBRNAMUAAASRUigJigAiwExQABAJFABMUAEigmKACFTQAtZtArn0trn1QTqudXqsWg3zXTmuErcoO/PTcrhK3KDrK1rnKsoNqzqguqmgKIoJFSLoAQAAAgEApAAAABAWmogKJqaC2palrNoLazalrFoL1XPql6YtA6rGlrOgsrUrnKvNB2lbnTha1KDtxb759Pf/Lcv3cZW50DrrUrlOmp0DpKuucq6DerrnOlgLzuesnv6T4fhrWOb9M+P/WtBoZ00F/K1NNBU/Yazb7Z+wF43PWTffPh98arNPIF01NNBdv8AZazpoLrN/r6f6NTQJbnrm/z6ffC1i3PZNBq1m9M3pm9A1emL0lrNoFrF3PTFtZtBNv7UpQBQA5vzblAFlalAGp01OgBqdHPXzAGvJdADm33a0ANXQA00ANSX5gC6mqAzLfc0ANTyAE8mb0AJemPL5gCXpm0AZ35paAM6gAIAP//Z"})`} > 
        <Flex py={[10, 10, 10, 0]} left={[0,0,20,20]} top={[0,0,"50%","50%"]} textAlign={["center", "center", "start", "start"]}  w={["80%", "full", "30%", "30%"]} transform={["none", "none", "translate(0, -50%)", "translate(0, -50%)"]} position={["static", "static", "absolute", "absolute"]} flexDir='column' justifyContent="center"  >
            <Text color="white" fontSize={["2xl", "2xl", "2xl", "5xl"]} fontWeight="semibold" >COLLECT & BUILD UNIQUE DECKS</Text>
            <Text color="white" mt={4} fontSize={["md", "md", "md", "xl"]} >Grow your NFT collection with over 300 unique hand drawn original cards.</Text>
            <Text color="white" mt={[0,0,10,10]} fontSize={["md", "md", "md", "xl"]} >Experience NFT pack openings, marketplace listings, and dynamic play to earn mechanics.</Text>
        </Flex>
        <Image mt={[20,20,0,0]} position={["relative", "relative", "static", "static"]} left="-60%" transform={["translate(30%, 0) scale(1.5)", "translate(40%, 0) ", "translate(0,0)", "translate(0,0)"]} w="100%" display="block" src={deck}  alt="deck" />
    </Flex>
  )
}

export default Deck