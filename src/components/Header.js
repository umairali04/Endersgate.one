import {
    Box, Button, Drawer,
    DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, Flex, Image, Text, useDisclosure, useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import { AiFillYoutube, AiOutlineMenu, AiOutlineReddit, AiOutlineTwitter } from "react-icons/ai"
import { FaDiscord, FaFacebook, FaTelegramPlane } from "react-icons/fa"
import { MdOutlineLanguage } from "react-icons/md"
import { SiGitbook } from "react-icons/si"
import { TiSocialInstagram } from "react-icons/ti"
import "../App.css"
import headgames from "../assets/5headgames.svg"
import logo from "../assets/logo.svg"
import { useLocation } from 'react-router-dom'


const colors = {
    primary: "#D2A2FF",
    secondary: "rgba(50,50,50,255)",

}

const Header = () => {
  const [isAtLeast1024px] = useMediaQuery("(min-width: 1024px)")

  const location = useLocation()

  const {pathname} = useLocation();
  const withouSidebarRoutes = ["/comic", "/fullPageGallery"];
  if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;

  return (
    <Flex className={location.pathname.includes("/nftshop") ? "main-container-md header-bg-color scroll-bar-nft body" : "navbar-original"}>
    <Flex opacity={0.9} borderBottom="2px solid #5A5A5A" bgColor={'grey.800'} className={location.pathname.includes("/nftshop") ? "nav-bg main-container-md" : "navbar-original"} transition="all .5s ease" w="100vw" h="20" py={4} position="fixed" zIndex={123}  bg="gray.800" justifyContent="space-between" alignItems="center" px={[3, 3, 10, 10]}>
        {/* // <Flex overflowX="hidden" w="100vw" h="28" py={4} position="fixed" zIndex={220} opacity={.9} bg="gray.800" justifyContent="space-between" alignItems="center" px={[3, 3, 10, 10]}> */}
        {isAtLeast1024px ? <> 
        <Flex w="25%">
            <AiOutlineReddit className='icon' style={{marginRight: "1rem"}} size="1.5rem" color={colors.primary} />
            <AiOutlineTwitter className='icon' style={{marginRight: "1rem"}} size="1.5rem" color={colors.primary} />
            <FaDiscord className='icon' style={{marginRight: "1rem"}} size="1.5rem" color={colors.primary} />
            <FaFacebook className='icon' style={{marginRight: "1rem"}} size="1.3rem" color={colors.primary} />
            <AiFillYoutube className='icon' style={{marginRight: "1rem"}} size="1.5rem" color={colors.primary} />
            <FaTelegramPlane className='icon' style={{marginRight: "1rem"}} size="1.5rem" color={colors.primary} />
            <SiGitbook className='icon' style={{marginRight: "1rem"}} size="1.5rem" color={colors.primary} />
            <TiSocialInstagram className='icon' style={{marginRight: "1rem"}} size="1.5rem" color={colors.primary} />
        </Flex>
        <Flex w="50%" alignItems="center" flexDir="column" >
            <a href="/">
                <Image loading="lazy" transition="all .5s ease" width="56" src={logo} />
            </a>
            {/* <Link to="/" >
                <Image width="96" src={logo} />
            </Link> */}
            <Flex>
                <a href='#' display="flex" className="text" color={colors.primary} >Shop
                    <Box/>
                </a>
                <a href='#' display="flex" className="text" color={colors.primary} >Packs
                    <Box/>
                </a>
                <a href='#' display="flex" className="text" color={colors.primary} >Inventory
                    <Box/>
                </a>
                <a href='/gallery' display="flex" className={location.pathname.includes("/news") ? "text active" : "text"} color={colors.primary} >Gallery
                    <Box/>
                </a>
                <a href='/news' display="flex" className={location.pathname.includes("/news") ? "text active" : "text"} color={colors.primary} >News
                    <Box/>
                </a>
                <a href='#' display="flex" className="text" color={colors.primary} >Audit
                    <Box/>
                </a>
                <a href='/nftshop' display="flex" className={location.pathname.includes("/nftshop") ? "text active nav-bg" : "text"} color={colors.primary} >NFT-Shop
                    <Box/>
                </a>
            </Flex>
        </Flex>
        <Flex w="25%" justifyContent="flex-end">
            <Button h='8' fontSize="xl" w="32" p={0} borderRadius="2rem" _hover={{bgGradient: "linear(to-r, #280765, #56146d)", boxShadow: "none"}} bgGradient="linear(to-r, #4f0eca , rgba(178,61,227,255) )" color="white" boxShadow="0px 0px 15px 2px rgba(197, 102, 255, 0.45)" >
                PLAY NOW!
            </Button>
        </Flex>
        </> : <MobileHeader/>}
    </Flex>
    </Flex>
  )
}

export default Header


const MobileHeader = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Flex w="100%" alignItems="center" justifyContent="space-between" >
            {/* <Image loading='lazy' w="20%" src={headgames} /> */}
            <a href="/" style={{marginLeft: "1rem"}} >
                <Image loading="lazy" w="50%" src={logo} />
            </a>
            <MdOutlineLanguage color="white" fontSize="1.5rem" />
            <Flex onClick={onOpen} ml={2} bgColor={colors.secondary} w="10" h="10" justifyContent="center" alignItems="center" >
                <AiOutlineMenu fontSize="1.5rem" color="white" />
            </Flex>
              <Drawer
              isOpen={isOpen}
              size="full"
              p={3}
              placement='right'
              onClose={onClose}
              >
                <DrawerContent py={4} bg="menu" >
                  <DrawerCloseButton mt={4} bg="secondary" color="white" size="lg" />
                  <DrawerHeader>
                      <Image w="10rem" src={logo} />
                  </DrawerHeader>
                  <DrawerBody>
                    <Flex flexDir="column" alignItems="flex-start" mt={10} px={2} >
                        <a style={{fontSize: "1.5rem",  marginBottom: "2rem", fontWeight: "bold"}} href='#' display="flex" className="text" color={colors.primary} >Shop
                            <Box/>
                        </a>
                        <a style={{fontSize: "1.5rem",  marginBottom: "2rem", fontWeight: "bold"}} href='#' display="flex" className="text" color={colors.primary} >Packs
                            <Box/>
                        </a>
                        <a style={{fontSize: "1.5rem",  marginBottom: "2rem", fontWeight: "bold"}} href='#' display="flex" className="text" color={colors.primary} >Inventory
                            <Box/>
                        </a>
                        <a style={{fontSize: "1.5rem",  marginBottom: "2rem", fontWeight: "bold"}} href='/gallery' display="flex" className="text" color={colors.primary} >Gallery
                            <Box/>
                        </a>
                        <a style={{fontSize: "1.5rem",  marginBottom: "2rem", fontWeight: "bold"}} href='#' display="flex" className="text" color={colors.primary} >News
                        </a>
                        <a style={{fontSize: "1.5rem",  marginBottom: "2rem", fontWeight: "bold"}} href='#' display="flex" className="text" color={colors.primary} >Audit
                            <Box/>
                        </a>
                        <a style={{fontSize: "1.5rem",  marginBottom: "2rem", fontWeight: "bold"}} href='#' display="flex" className="text" color={colors.primary} >NFT-Shop
                            <Box/>
                        </a>
                   </Flex>
                   <Text textAlign="center" color="white" fontSize="2xl" mt={32} >PLAY NOW ON PC</Text>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>

        </Flex>
    )
}
