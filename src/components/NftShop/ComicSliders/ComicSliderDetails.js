import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import comicDetails from '../../../assets/comics.json'
import { Flex, Image, Button, Text, Input, useMediaQuery} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai"
import { MdRestore } from "react-icons/md"
import { HiOutlineDeviceMobile, HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi"
import { BsGrid1X2Fill, BsXDiamond } from "react-icons/bs"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
// import ArrowRight from '../../../assets/main-slider-arrow1.png'
import ArrowRight from '../../../assets/right-arrow-main-slider.png'

import ArrowLeft from '../../../assets/left-arrow-main-slider.png'
import CrossIcon from '../../../assets/Cross-icon.png'

function ComicSliderDetails() {
  const [scale, setScale] = useState(1);
  const [offsetY, setOffsetY] = useState(0);
  const imageRef = useRef(null);
  const [zoomButtons, setZoomButtons] = useState(true)



    const { comicName } = useParams();
    const navigate = useNavigate();
    const [ currentSlide, setCurrentSlide ] = useState(1);
    const [ moveToSlide, setMoveToSlide ] = useState()
    const [searchIndexSlide, setSearchIndexSlide] = useState('');
    const [slider, setSlider] = useState('');


    const [pannelViewIsActive, setPannelViewIsActive] = useState(true);
    const [browseViewIsActive, setBrowseViewIsActive] = useState(false);
    const [guidedViewIsActive, setGuidedViewIsActive] = useState(false);

    // const [isGuidedViewEnabled, setIsGuidedViewEnabled] = useState(false);
    const [pageOrPannal, setPageOrPannal] = useState('Page');
    const [isShown, setIsShown] = useState(false);

    const handleClickShowBrowseSlide = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
      setBrowseViewIsActive(current => !current);
    };

    const currentComic = comicDetails.find(comic => {
        return comic.name === comicName;
    });

    const comicImage = currentComic.pages.find(comic => {
        return comic.id === 1;
    })

    const [sliderImage, setSliderImage] = useState(comicImage.pages_pannels.filter(page => page.isPannal === false));

    const zoomImagecondition = comicImage.pages_pannels.filter(page => page.isPannal === false);


    const imageArrayLength = sliderImage.length;

    const PreviousBtn = (props) => {
        const { className, onClick, currentSlide } = props;
        return (
          <>
            {currentSlide !== 0 && (
              <div className={className} onClick={onClick}>
                <Image src={ArrowLeft} boxSize='50px'/>
                {/* <AiOutlineClose style={{ color: 'blue', fontSize: '30px' }} /> */}
              </div>
            )}
          </>
        );
      };
      const NextBtn = (props) => {
        const { className, onClick, slideCount, currentSlide } = props;
        return (
          <>
            {currentSlide !== slideCount - 1 && (
              <div className={className} onClick={onClick}>
                <Image src={ArrowRight} boxSize='50px' />

                {/* <ArrowForwardIos style={{ color: 'blue', fontSize: '30px' }} /> */}
              </div>
            )}
          </>
        );
      };

    const settings = {
        infinite: false,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
	      fadeSpeed: 2000,
        // arrows:false,
        responsive: [
            {
                breakpoint: 425,
                settings: {
                  arrows: false,
                }
            }
      
      ],
        afterChange: function(index) {
            setCurrentSlide(index + 1);  
        },
        beforeChange: (current, next) => setMoveToSlide({ index: next })
      };

// Browse slider settings
// const BrowsePreviousBtn = (props) => {
//   const { onClick, currentSlide } = props;
//   return (
//     <>
//       {currentSlide !== 0 && (
//         <div className={'browse-slider-arrows-main-prev'} onClick={onClick}>
//           <div className={'browse-slider-prev-arrow'}>
//           <HiArrowSmLeft cursor={'pointer'} style={{ color: 'blue', fontSize: '30px' }} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// const BrowseNextBtn = (props) => {
//   const {onClick, slideCount, currentSlide } = props;
//   return (
//     <>
//       {currentSlide !== imageArrayLength - 1 && (
//         <div className={'browse-slider-arrows-main'} onClick={onClick}>
//           <div className={'browse-slider-next-arrow'}>
//           <HiArrowSmRight cursor={'pointer'} style={{ color: 'blue', marginRight: '50px', fontSize: '30px' }} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
const [isAtLeast1024px] = useMediaQuery("(min-width: 500px)")

var browseSlider = {
  infinite: false,
  arrows:false,
  // prevArrow: <BrowsePreviousBtn />,
  // nextArrow: <BrowseNextBtn />,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
};

const browseSlidermobile = {
  infinite: false,
  arrows:false,

  // prevArrow: <BrowsePreviousBtn />,
  // nextArrow: <BrowseNextBtn />,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
}

      const handleChange = event => {
        setSearchIndexSlide(event.target.value-1);
      };

      const handleChangeGuidedView = event => {
        setSliderImage(comicImage.pages_pannels.filter(pannal => pannal.isPannal === true));
        setPannelViewIsActive(false);
        setPageOrPannal('Pannal')
        setGuidedViewIsActive(current => !current);
        setZoomButtons(false)
      };

      const handleChangePageView = event => {
        {setSliderImage(comicImage.pages_pannels.filter(pannal => pannal.isPannal === false))};

        setGuidedViewIsActive(false);
        setPannelViewIsActive(current => !current);
        setPageOrPannal('Page')
        setZoomButtons(true)
        
      };

      const handleClick = () => {
        if(searchIndexSlide > imageArrayLength) {
            return false;
        }else{
            slider.slickGoTo(searchIndexSlide);
        } 
      };

      useEffect(() => {
        console.log('this');
      }, [sliderImage], [3000]);

      const browseSliderOnClickHandler = (index) => {
        slider.slickGoTo(index);
      }

      var elem = document.documentElement;
      function openFullscreen() {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      }

  const handleZoomIn = () => {
    // if(sliderImage = zoomImagecondition ){
      // if(sliderImage(comicImage.pages_pannels.filter(pannal => pannal.isPannal === false))){
      if (scale < 2) {
        setScale(scale + 0.1);
      }
    
    // }else {
    //   return setScale(1);
    // }
    
  };

  const handleZoomOut = () => {
    // if(sliderImage(comicImage.pages_pannels.filter(pannal => pannal.isPannal === false))){
      if (scale > 0.5) {
        setScale(scale - 0.1);
      }
    
    // else {
    //   return setScale(1);
    // } 
  };

  const handleReset = () => {
    setScale(1);
    // setPosition({ x: 0, y: 0 });
  };
  const handleMouseDown = (event) => {
    const startY = event.clientY;
    const onMouseMove = (event) => {
      const deltaY = event.clientY - startY;
      setOffsetY(offsetY + deltaY);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", onMouseMove);
    });
  };
  
  return (

    
    
    <div style={{backgroundColor: '#000000', position: 'relative' }}>
        <div className='full-page-slider main-container-md'>
        {/* <Button w='1089px' h='53px' opacity={0} zIndex={10} mt='20px' onClick={() => { navigate('/nftshop') }}  position= 'absolute' z-index='10' ></Button> */}
            <div className='cross-main'>
            <Flex fontSize='5xl' justifyContent={'end'} zIndex='10'>
                <Button onClick={() => { navigate('/nftshop') }} opacity={0} position= 'absolute' className='close-button-0' zIndex='10' w='500px' mt='20px'></Button>
              <Button className='close-button' fontSize='5xl' bgColor={"transparent"} color={ "white"} mt='20px'  position= 'absolute' zIndex='11' mr={10} ><Image src={CrossIcon} color='yellow' onClick={() => { navigate('/nftshop') }} className='cross-logo'  position= 'absolute'  /></Button>
            </Flex>
            </div>
            {/* Main Comic slider */}
            <Slider ref={sliderRef => (setSlider(sliderRef))} {...settings} className='main-comic-slider' >

                {sliderImage.map((item, index) => (
                  // <div>
                    <Flex key={Math.random().toString()} mr='0.2rem' justifyContent={'center'}>
                        <div  className='main-div-slider'>
                        <Image onMouseDown={handleMouseDown} ref={imageRef}  style={{ transform: `scale(${scale}) translateY(${offsetY}px)`, cursor: 'grab' }} id="pic" zIndex='100' src={item.url} h={["auto", "auto", "97.7vh", "97.7vh"]} alt="comic" className='ful-page-slider-images' width={'auto'} max-height='100vh' max-width={'100vw'}  ml={'0.2rem'} pr={'0.3rem'} mt={["0", "0", "2", "2"]}></Image>
                              {/* <Image id="pic" zIndex='100' src={item.url} h={["auto", "auto", "97.7vh", "97.7vh"]} alt="comic" className='ful-page-slider-images' width={'auto'} max-height='100vh' max-width={'100vw'}  ml={'0.2rem'} pr={'0.3rem'} mt={["0", "0", "2", "2"]}></Image> */}
                         </div>
                    </Flex>
                    // </div>
                    // style={{ transform: `scale(${zoom})` }}
                    // transform={zoom}
                ))}
            </Slider>

            

                {/* THIS IS SLIDER NAVIGATION BAR */}
                <Flex className={'slider-navigation main-container-md'} zIndex='100' flexDir={'column'} mt={'-7px'} padding={5} justifyContent={'center'} z-index='1' position={'absolute'} bottom='0' width={'100%'} bgColor='#3c3c3c' >
                  {/* 👇️ show elements on click */}
                  {/*This is browse slider */}
                  {isAtLeast1024px ? 
  <>
  {isShown && (
                      <Slider {...browseSlider} className='browse-slider-bottom'>

                        {sliderImage.map((item, index) => (
                          <Flex key={Math.random().toString()}>
                            <div className='browse-slider-main-div'>
                              <Image src={item.url} onClick={()=> browseSliderOnClickHandler(index)} pl='5px' pr='5px' h={'auto'} w={'auto'} max-height='100vh' max-width={'100vw'} opacity={1} cursor={'pointer'} ></Image>
                              </div>
                          </Flex>
                        ))}
                      </Slider>  
                  )}
  </>
  : 
  <>
  {isShown && (
                      <Slider {...browseSlidermobile} className='browse-slider-bottom'>

                        {sliderImage.map((item, index) => (
                          <Flex key={Math.random().toString()}>
                            <div className='browse-slider-main-div'>
                              
                              <Image src={item.url} onClick={()=> browseSliderOnClickHandler(index)} pl='5px' pr='5px' h={'auto'} w={'auto'} max-height='100vh' max-width={'100vw'} opacity={1} cursor={'pointer'} ></Image>
                              </div>
                          </Flex>
                        ))}
                      </Slider>  
                  )}
  </>
  }
                    
                    
                    
                    <Flex flexDir={'row'} justifyContent='space-between' alignItems='center' w='100%'>
                        <Flex justifyContent={["flex-start", "flex-start", "flex-end", "flex-end"]} w={['30%', '30%', '51.75%', '52.75%']}>
                            <Text color={'white'} className='opacity' fontSize={['sm', 'sm', 'md', 'lg']}> {pageOrPannal} {currentSlide} of {imageArrayLength}</Text>
                        </Flex>

                        <Flex justifyContent='end' w={['55%', '55%', '47%', '47%']} alignItems={'center'}>
                            <Text color={'white'} fontSize={['sm', 'sm', 'md', 'lg']}  mr={5}>Jump To</Text>
                            <Input onChange={handleChange} type='number' min="1" max='25' mr={5} w={['30%', '30%', '20%', '20%']} color='white'></Input>
                            <Button onClick={handleClick}>GO</Button>
                        </Flex>

                    </Flex>
                    <Input onChange={e => slider.slickGoTo(e.target.value)} value={currentSlide}  type="range" min={0} max={imageArrayLength} className='slider-progress' /> 

                      <Flex flexDir={'row'} justifyContent='space-between' alignItems='center' w='100%'>

                        <Flex align={'center'} justifyContent={["flex-start", "flex-start", "flex-end", "flex-end"]} w={['50%', '50%', '60.75%', '62%']}>
                          <Button onClick={handleChangePageView} className={pannelViewIsActive ? 'button-active' : 'navigation-bottom-button'} ml={1} bgColor={"transparent"} title="Page view" ><HiOutlineDeviceMobile size={'22px'} color='white'/></Button>
                          <Button onClick={handleClickShowBrowseSlide} className={browseViewIsActive ? 'button-active' : 'navigation-bottom-button'} ml={1} bgColor={"transparent"} title="Browse pages"><BsXDiamond size={'22px'} color='white'/></Button>                         
                          <Button onClick={handleChangeGuidedView} className={guidedViewIsActive ? 'button-active' : 'navigation-bottom-button'} ml={1} bgColor={"transparent"} title="Guided view" ><BsGrid1X2Fill size={'22px'} color='white' /></Button>
                          {/* <Button onClick={handleZoomIn}>Zoom In</Button> */}
        {/* <Button onClick={handleZoomOut}>Zoom Out</Button> */}
        {zoomButtons === true ? (
        <Flex gap={2}>
        <AiOutlineZoomIn onClick={handleZoomIn} title='zoom-in' color='white' size={'22px'} cursor='pointer' />
        <AiOutlineZoomOut onClick={handleZoomOut} title='zoom-out' color='white' size={'22px'} cursor='pointer'/>
        <MdRestore onClick={handleReset} title='reset-zoom' color='white' size={'22px'} cursor='pointer'/>
        </Flex>
      ) : (
        <Flex gap={2}>
        <AiOutlineZoomIn  title='zoom-in' color='white' size={'22px'} cursor='not-allowed' />
        <AiOutlineZoomOut  title='zoom-out' color='white' size={'22px'} cursor='not-allowed'/>
        <MdRestore title='reset-zoom' color='white' size={'22px'} cursor='not-allowed'/>
        </Flex>
      )}
        
                        </Flex>
                        
                        <Flex justifyContent='end' w={['55%', '55%', '47%', '47%']} alignItems={'center'}>
                          <Button onClick={() => openFullscreen()} z-index='1'>Open Fullscreen</Button>
                        </Flex>
                        
                        
                        
                      </Flex>
                        

      
                </Flex>
                
        </div>

        
        
      </div>

  )
}

export default ComicSliderDetails
