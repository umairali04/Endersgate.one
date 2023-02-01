import React from 'react'
import { Flex, Text, Button } from '@chakra-ui/react'
import bannerImg from "../../assets/Banner1.jpg"
import useLazyBackgroundImage from '../../utils/useLazyBackgroundImage'

function NftMainBanner() {
    const loaded = useLazyBackgroundImage(bannerImg)
  return (
   
       <Flex  borderBottom="2px solid #5A5A5A" className='content-background main-container-md' flexDir="column" w='100%' textAlign="center" py={[5,5,10,10]} h={["9.5rem"]} justifyContent="center" mt='80px' bgImage={`url(${loaded || "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEhUSDxIWFRUVFRUVFRUVFRcVFhUXFRUWFhcVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKCwUFDgUFGisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAlEAEBAQEAAQIGAgMAAAAAAAAAARECEiFBMVFhkbHwcYGhwfH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APrCsqCriNQDFkGpASRqRZFkBJys5akWQGfFfFvDAZ8V8WsXAZ8TxaxcBjxXxaxcBjxPFrDAY8TxbwwHPxPFuwwHPxTxdLEsBz8UvLpiWA5WJY6YzYDniY6WM0GMRqpQRCmgCGgsXFkakQZ5jciyNzkGZGpG5GpyDMiyNyNSA541I1IsgMyLjWLgMSLjWLgMYRswGcMaAYq40AziWNgMQxrDAYxMdKmAxjOOuJgONiY7YzgONjNjvYxYDhiWO15ZsBxsYduoxYDCNoDpI3zynMdeYCTlvmLI1gJI3IsiyAki4pAMMUACKCYKlAUARRICgAGIoGIqUAUBksUgJiWNIDFiY2mA5Xlix3sY6gOFjFjvY52A42M116jHqD0c8unMTmOkgLIsiyLAJFFBFAAIAAAAAAAAAAAAAAAAAAAJVATEaQGbGbHSpYDlY59R2sY6gOHUc7y79RzsB6eY3InLUBeYooCRQAAEqgAACRQASKAAAlUAAASKACKAAAlUAAAQUBixix0rNgOPUc7HbpzoO8bjny6QGoJCwFAABJAUAASKACWAoAAhICgACKACWAoAAJICgACKACWAM1pmg59OVdenG/z+AeiNxy5rcoNqzGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAErNarHVBjpzrfTnaDpzW44yukoOsWMStQGiJFBRNAMUAAASRUigJigAiwExQABAJFABMUAEigmKACFTQAtZtArn0trn1QTqudXqsWg3zXTmuErcoO/PTcrhK3KDrK1rnKsoNqzqguqmgKIoJFSLoAQAAAgEApAAAABAWmogKJqaC2palrNoLazalrFoL1XPql6YtA6rGlrOgsrUrnKvNB2lbnTha1KDtxb759Pf/Lcv3cZW50DrrUrlOmp0DpKuucq6DerrnOlgLzuesnv6T4fhrWOb9M+P/WtBoZ00F/K1NNBU/Yazb7Z+wF43PWTffPh98arNPIF01NNBdv8AZazpoLrN/r6f6NTQJbnrm/z6ffC1i3PZNBq1m9M3pm9A1emL0lrNoFrF3PTFtZtBNv7UpQBQA5vzblAFlalAGp01OgBqdHPXzAGvJdADm33a0ANXQA00ANSX5gC6mqAzLfc0ANTyAE8mb0AJemPL5gCXpm0AZ35paAM6gAIAP//Z"})`} bgPosition='center' bgSize="cover" >
          <Flex justifyContent={'center'}>
          <Text mt='50px'
            fontSize={['30px','50px','65px',"65px"]} ml={3} color="#FFFFFF" fontWeight="800" className='text-shadow' top='-8097px'>NFT SHOP
          </Text>
          </Flex> 

          <Flex  justifyContent='end' pr={[ '0px','5px', '20px', '45px']} mt={['22px','7px','2px',"2px"]} position={'relative'} bottom={['1','2','4',"5"]} >
            <Button _hover='none'  color='white' bgColor='transparent' fontSize='14px' borderRadius='0rem' fontWeight='600'>
                <Text fontSize={[ "xs", "sm", "md"]} bgColor='black' mt='auto' pt='6px' pb='6px' pl='18px' pr='18px'>HARMONY ONE BRIDGE &gt;</Text>                
            </Button>
          </Flex>

      </Flex>
    
  )
}

export default NftMainBanner
