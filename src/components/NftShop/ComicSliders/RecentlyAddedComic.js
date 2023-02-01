import React from "react";
import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecentlyAddedCards from "../../../assets/RecentlyAddedCards.png";
import ComicSeriesSlider from "./ComicSeriesSlider";

function RecentlyAddedComic() {

    const settings = {
      
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    
                }
            }
      ]
      
    };

    const [isAtLeast1078px] = useMediaQuery("(min-width: 840px)")
    return (
      <div className="sliders-container">
        {isAtLeast1078px ? <>

        <Flex mt={20} mb={20} justifyContent={'center'} >
          <Text fontSize={['30px','50px','65px',"4xl"]} ml={3} color="#FFFFFF" fontWeight="500">RECENTLY ADDED</Text>
        </Flex>
        <Slider {...settings}>
                   
            <Flex className="">
              <Flex className="box-shadow">
                <Image className='images-width shade-on-hover' fontWeight="500" ml={2} mt={2} mr={2} src={RecentlyAddedCards}></Image>  
              </Flex>
              <Text className='endersgate-issues-text' color="#FFFFFF">ISSUE #1</Text>
            </Flex>
            <Flex>
              <Image className='images-width' fontWeight="500" ml={2} mt={2} mr={2} src={RecentlyAddedCards}></Image>
              <Text className='endersgate-issues-text' color="#FFFFFF">ISSUE #2</Text>
            </Flex>
            <Flex >
              <Image className='images-width' fontWeight="500" ml={2} mt={2} mr={2} src={RecentlyAddedCards}></Image>
              <Text className='endersgate-issues-text' color="#FFFFFF">ISSUE #3</Text>
            </Flex>
            <Flex >
              <Image className='images-width' fontWeight="500" ml={2} mt={2} mr={2} src={RecentlyAddedCards}></Image>
              <Text className='endersgate-issues-text' color="#FFFFFF">ISSUE #4</Text>
            </Flex>
            <Flex >
              <Image className='images-width' fontWeight="500" ml={2} mt={2} mr={2} src={RecentlyAddedCards}></Image>
              <Text className='endersgate-issues-text' color="#FFFFFF">ISSUE #5</Text>
            </Flex>
            <Flex >
              <Image className='images-width' fontWeight="500" ml={2} mt={2} mr={2} src={RecentlyAddedCards}></Image>
              <Text className='endersgate-issues-text' color="#FFFFFF">ISSUE #6</Text>
            </Flex>
            <Flex >
              <Image className='images-width' fontWeight="500" ml={2} mt={2} mr={2} src={RecentlyAddedCards}></Image>
              <Text className='endersgate-issues-text' color="#FFFFFF">ISSUE #7</Text>
            </Flex>
            <Flex >
              <Image className='images-width' fontWeight="500" ml={2} mt={2} mr={2} src={RecentlyAddedCards}></Image>
              <Text className='endersgate-issues-text' color="#FFFFFF">ISSUE #8</Text>
            </Flex>
            
        </Slider>

        <ComicSeriesSlider />

        
        </> : <MobileView/>}
      </div>
    );
  }
export default RecentlyAddedComic;



function MobileView() {

  const settings = {
    
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
          breakpoint: 450,
          settings: {
              slidesToShow: 1,
          }
      }

]
  };

  return (
    <div className="">

      <Flex mt={10} mb={10} justifyContent={'center'} >
        <Text fontSize={['lg','xl','3xl',"4xl"]} ml={3} color="#FFFFFF" fontWeight="500" className="recently-heading">RECENTLY ADDED</Text>
      </Flex>
      <div className="added-comic-slider">
      <Slider {...settings}>
                 
          <Flex flexDir={'column'}>
            <Image className='recently-slider-image' src={RecentlyAddedCards} ml={2} mt={2} mr={2}></Image>
            <Text className="endersgate-issues-text" color="#FFFFFF">ENDERS GATE: ISSUE #1</Text>
              
          </Flex>
          <Flex>
            <Image className='recently-slider-image' src={RecentlyAddedCards} ml={2} mt={2} mr={2}></Image>
            <Text className="endersgate-issues-text" color="#FFFFFF">ENDERS GATE: ISSUE #2</Text>
          </Flex>
          <Flex >
            <Image className='recently-slider-image' src={RecentlyAddedCards} ml={2} mt={2} mr={2}></Image>
            <Text className="endersgate-issues-text" color="#FFFFFF">ENDERS GATE: ISSUE #3</Text>
          </Flex>
          <Flex >
            <Image className='recently-slider-image' src={RecentlyAddedCards} ml={2} mt={2} mr={2}></Image>
            <Text className="endersgate-issues-text" color="#FFFFFF">ENDERS GATE: ISSUE #4</Text>
          </Flex>
          <Flex >
            <Image className='recently-slider-image' src={RecentlyAddedCards} ml={2} mt={2} mr={2}></Image>
            <Text className="endersgate-issues-text" color="#FFFFFF">ENDERS GATE: ISSUE #5</Text>
          </Flex>
          <Flex >
            <Image className='recently-slider-image' src={RecentlyAddedCards} ml={2} mt={2} mr={2}></Image>
            <Text className="endersgate-issues-text" color="#FFFFFF">ENDERS GATE: ISSUE #6</Text>
          </Flex>
          <Flex >
            <Image className='recently-slider-image' src={RecentlyAddedCards} ml={2} mt={2} mr={2}></Image>
            <Text className="endersgate-issues-text" color="#FFFFFF">ENDERS GATE: ISSUE #7</Text>
          </Flex>
          <Flex >
            <Image className='recently-slider-image' src={RecentlyAddedCards} ml={2} mt={2} mr={2}></Image>
            <Text className="endersgate-issues-text" color="#FFFFFF">ENDERS GATE: ISSUE #8</Text>
          </Flex>
          
      </Slider>
      </div>
      <ComicSeriesSlider />
    </div>
  );
}