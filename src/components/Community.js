import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import communityImg from "../assets/community.svg"
import {FaDiscord} from "react-icons/fa"
import useLazyBackgroundImage from '../utils/useLazyBackgroundImage'

const Community = () => {
  const [isAtLeast1024px] = useMediaQuery("(min-width: 1024px)")
  const loaded = useLazyBackgroundImage(communityImg)

  return (
    <Flex flexDir="column" alignItems="center" textAlign="center" py={[5,5,20,20]} justifyContent="center" bgImage={`url(${loaded || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEhUSDxIWFRUVFRUVFRUVFRcVFhUXFRUWFhcVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKCwUFDgUFGisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAlEAEBAQEAAQIGAgMAAAAAAAAAARECEiFBMVFhkbHwcYGhwfH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APrCsqCriNQDFkGpASRqRZFkBJys5akWQGfFfFvDAZ8V8WsXAZ8TxaxcBjxXxaxcBjxPFrDAY8TxbwwHPxPFuwwHPxTxdLEsBz8UvLpiWA5WJY6YzYDniY6WM0GMRqpQRCmgCGgsXFkakQZ5jciyNzkGZGpG5GpyDMiyNyNSA541I1IsgMyLjWLgMSLjWLgMYRswGcMaAYq40AziWNgMQxrDAYxMdKmAxjOOuJgONiY7YzgONjNjvYxYDhiWO15ZsBxsYduoxYDCNoDpI3zynMdeYCTlvmLI1gJI3IsiyAki4pAMMUACKCYKlAUARRICgAGIoGIqUAUBksUgJiWNIDFiY2mA5Xlix3sY6gOFjFjvY52A42M116jHqD0c8unMTmOkgLIsiyLAJFFBFAAIAAAAAAAAAAAAAAAAAAAJVATEaQGbGbHSpYDlY59R2sY6gOHUc7y79RzsB6eY3InLUBeYooCRQAAEqgAACRQASKAAAlUAAASKACKAAAlUAAAQUBixix0rNgOPUc7HbpzoO8bjny6QGoJCwFAABJAUAASKACWAoAAhICgACKACWAoAAJICgACKACWAM1pmg59OVdenG/z+AeiNxy5rcoNqzGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAErNarHVBjpzrfTnaDpzW44yukoOsWMStQGiJFBRNAMUAAASRUigJigAiwExQABAJFABMUAEigmKACFTQAtZtArn0trn1QTqudXqsWg3zXTmuErcoO/PTcrhK3KDrK1rnKsoNqzqguqmgKIoJFSLoAQAAAgEApAAAABAWmogKJqaC2palrNoLazalrFoL1XPql6YtA6rGlrOgsrUrnKvNB2lbnTha1KDtxb759Pf/Lcv3cZW50DrrUrlOmp0DpKuucq6DerrnOlgLzuesnv6T4fhrWOb9M+P/WtBoZ00F/K1NNBU/Yazb7Z+wF43PWTffPh98arNPIF01NNBdv8AZazpoLrN/r6f6NTQJbnrm/z6ffC1i3PZNBq1m9M3pm9A1emL0lrNoFrF3PTFtZtBNv7UpQBQA5vzblAFlalAGp01OgBqdHPXzAGvJdADm33a0ANXQA00ANSX5gC6mqAzLfc0ANTyAE8mb0AJemPL5gCXpm0AZ35paAM6gAIAP//Z"})`} w="full" h={["20vh", "20vh", "80vh", "80vh"]} bgPosition="center" bgSize="cover" >
        <Text textShadow={["-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", "5px 5px 27px rgba(0, 0, 0, 0.6)", "5px 5px 27px rgba(0, 0, 0, 0.6)"]} 
         fontSize={["lg", "lg", "3xl", "5xl"]} color="white" fontWeight="semibold">JOIN THE COMMUNITY!</Text>
        <Text  display={["none", "none", "block", "block"]} textShadow="5px 5px 27px rgba(0, 0, 0, 0.6)" fontSize={["lg", "lg", "3xl", "5xl"]} color="white" fontWeight="semibold">DISCORD</Text>
        <Flex transition="all .3s ease" _hover={{
          transform: "scale(0.8)",
          boxShadow: "0px 0px 10px black"
        }} bg="black" h={['10', "10", "10", "20"]} w={['10', "10", "10", "20"]} justifyContent="center" alignItems="center" borderRadius="50%" >
          <a href='https://discord.com/invite/endersgate' target="_blank" rel="noreferrer" >
            <FaDiscord color="white" fontSize={isAtLeast1024px ? "3rem" : "1.2rem"} />
          </a>
        </Flex>
        <Text display={["block", "block", "none", "none"]} textShadow={["-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", "5px 5px 27px rgba(0, 0, 0, 0.6)", "5px 5px 27px rgba(0, 0, 0, 0.6)"]}  fontSize={["lg", "lg", "5xl", "5xl"]} color="white" fontWeight="semibold">CLICK HERE</Text>
    </Flex>
  )
}

export default Community