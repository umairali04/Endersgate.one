import React from "react"
import {Flex, Text, Image} from "@chakra-ui/react"
import leftline from "../assets/leftline.svg"
import middleline from "../assets/middleline.svg"
import rightline from "../assets/rightline.svg"
import spike from "../assets/spike.svg"
import examplenews from "../assets/examplenews.svg"
import useLazyBackgroundImage from "../utils/useLazyBackgroundImage"

const FeaturedNews = () => {
  return (
      <Flex pb={6} w="100%" justifyContent="center" alignItems="center" flexDir="column" bg="menu" boxShadow=" 0 0 5px 20px #292832">
        <Text color="white" fontSize={["3xl", "3xl", "5xl", "5xl"]} >FEATURED NEWS</Text>
        <Flex width={["10rem", "10rem", "15rem", "25rem"]} alignItems="center" flexDir="column" >
          <Flex justifyContent="center" >
            <Image loading="lazy" mr={-2} src={leftline} />
            <Image loading="lazy" objectFit="cover" src={middleline} />
            <Image loading="lazy" ml={-2} src={rightline} />
          </Flex>
          <Image loading="lazy" mt={-1} w="3rem" src={spike} />
        </Flex>
        {/* <Box position="relative">
          <Flex flexDir="column" justifyContent="center" alignItems="center" >
            <Flex width={["15rem", "15rem", "25rem", "25rem"]} >
                <Image mr={-1} src={leftline} />
                <Image src={middleline} />
                <Image ml={-1} src={rightline} />
            </Flex>
            <Image src={spike} width="3rem" />
          </Flex>
        </Box> */}
        <Flex mt={5} >
            <Card mr={10} display={["none", "none", "none", "block"]} />
            <Card image={examplenews} />
            <Card ml={10} display={["none", "none", "none", "block"]}/>
        </Flex>
        <Text color="gray.300" fontWeight="semibold" fontSize="xl" >VIEW ALL</Text>
      </Flex>
  )
}

export default FeaturedNews

const Card = ({image, ...rest}) => {
  const loaded = useLazyBackgroundImage(image)
  return (
    <Flex {...rest} borderBottom="10px solid rgba(50,50,50,255)" width="15rem" bgSize="cover" h="10rem" bgImage={image  ? `url(${loaded || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEhUSDxIWFRUVFRUVFRUVFRcVFhUXFRUWFhcVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKCwUFDgUFGisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAlEAEBAQEAAQIGAgMAAAAAAAAAARECEiFBMVFhkbHwcYGhwfH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APrCsqCriNQDFkGpASRqRZFkBJys5akWQGfFfFvDAZ8V8WsXAZ8TxaxcBjxXxaxcBjxPFrDAY8TxbwwHPxPFuwwHPxTxdLEsBz8UvLpiWA5WJY6YzYDniY6WM0GMRqpQRCmgCGgsXFkakQZ5jciyNzkGZGpG5GpyDMiyNyNSA541I1IsgMyLjWLgMSLjWLgMYRswGcMaAYq40AziWNgMQxrDAYxMdKmAxjOOuJgONiY7YzgONjNjvYxYDhiWO15ZsBxsYduoxYDCNoDpI3zynMdeYCTlvmLI1gJI3IsiyAki4pAMMUACKCYKlAUARRICgAGIoGIqUAUBksUgJiWNIDFiY2mA5Xlix3sY6gOFjFjvY52A42M116jHqD0c8unMTmOkgLIsiyLAJFFBFAAIAAAAAAAAAAAAAAAAAAAJVATEaQGbGbHSpYDlY59R2sY6gOHUc7y79RzsB6eY3InLUBeYooCRQAAEqgAACRQASKAAAlUAAASKACKAAAlUAAAQUBixix0rNgOPUc7HbpzoO8bjny6QGoJCwFAABJAUAASKACWAoAAhICgACKACWAoAAJICgACKACWAM1pmg59OVdenG/z+AeiNxy5rcoNqzGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAErNarHVBjpzrfTnaDpzW44yukoOsWMStQGiJFBRNAMUAAASRUigJigAiwExQABAJFABMUAEigmKACFTQAtZtArn0trn1QTqudXqsWg3zXTmuErcoO/PTcrhK3KDrK1rnKsoNqzqguqmgKIoJFSLoAQAAAgEApAAAABAWmogKJqaC2palrNoLazalrFoL1XPql6YtA6rGlrOgsrUrnKvNB2lbnTha1KDtxb759Pf/Lcv3cZW50DrrUrlOmp0DpKuucq6DerrnOlgLzuesnv6T4fhrWOb9M+P/WtBoZ00F/K1NNBU/Yazb7Z+wF43PWTffPh98arNPIF01NNBdv8AZazpoLrN/r6f6NTQJbnrm/z6ffC1i3PZNBq1m9M3pm9A1emL0lrNoFrF3PTFtZtBNv7UpQBQA5vzblAFlalAGp01OgBqdHPXzAGvJdADm33a0ANXQA00ANSX5gC6mqAzLfc0ANTyAE8mb0AJemPL5gCXpm0AZ35paAM6gAIAP//Z"})` : "linear-gradient(#0000 0%, white)"} />
  )
}
