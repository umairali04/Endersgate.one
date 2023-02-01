import React from 'react'
import NftMainBanner from '../components/NftShop/NftMainBanner'
import Comic from '../components/NftShop/Comic'
import NftFooter from '../components/NftShop/NftFooter'
import ComicButtons from '../components/NftShop/ComicSliders/ComicButtons'
import { Flex } from '@chakra-ui/react'

function NFTShop() {
  return (
    <Flex transition=".5s all ease" zIndex={124} overflowX="hidden" top={20} overflowY="scroll" bg="#000000" h="100vh" flexDir="column" className="body-bg-color nft-main-container">
      <NftMainBanner />
      <ComicButtons />
      <Comic />
      <NftFooter />
    </Flex>

  )
}

export default NFTShop;