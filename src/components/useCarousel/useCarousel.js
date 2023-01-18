import { useState } from 'react'

const useCarousel = (carouselArr, styling = {})=>{
    const [carousel, setCarousel] = useState(carouselArr)
    const [activeIndex, setActiveIndex] = 0;

    const rotateForward = ()=> {
        if(activeIndex < carousel.length) setActiveIndex(prevIndex => prevIndex + 1);
        else if(activeIndex >= carousel.length) setActiveIndex(0);
    }
    
    const rotateBack = ()=>{
        if(activeIndex > 0)  setActiveIndex(prevIndex => prevIndex - 1);
        else if(activeIndex <= 0) setActiveIndex(carousel.length - 1);
    }

    return{
        carousel,
        
    }

}

// i want this to contain the carouselArray and have access to the rotate method that I can use on any of the carousels I need to make