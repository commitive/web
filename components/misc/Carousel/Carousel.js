import React from 'react';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import Image from 'next/image';
import { Divider } from 'semantic-ui-react';
import ButtonsCarousel from './ButtonsCarousel/';

const Carousel = ({ imgOne, imgTwo, imgThree }) => {

  return (
    <CarouselProvider
        naturalSlideHeight={1}
        naturalSlideWidth={1}
        totalSlides={3}
    >
        <Slider>
            <Slide tag='a' index={0}>
                {imgOne ? 
                ( <Image src={imgOne} />)
                :
                (null)
                }
            </Slide>
            <Slide tag='b' index={1}>
                {imgTwo ? 
                    (<Image src={imgTwo} />)
                :
                    (null)
                }   
            </Slide>
            <Slide tag='c' index={2}> 
                {imgThree ? 
                    ( <Image src={imgThree} />)
                :
                    (null)
                }
            </Slide>
        </Slider>
        <Divider />
        <ButtonsCarousel slides={3} />
    </CarouselProvider>
  )
}

export default Carousel;