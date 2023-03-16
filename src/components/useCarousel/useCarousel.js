import { useEffect, useState } from 'react'

const useCarousel = ()=>{

    const [games, setGames] = useState({});
    //get rid of subset not needed most likely use a 
    // leftIndex = mod(index - 2, games.length)
    // rightIndex = mod(index + 2, games.length)
    const [index, setIndex] = useState(0);
    // const [subset, setSubset] = useState([0, 1, 2, 3, 4]);
    const [direction, setDirection] = useState('');

    const SUBSET_SIZE = 5;

    // useEffect(()=>{
    //     if(games) setSubset(games);
    // }, [games]);

    // const generateSubset = (currentIndex)=>{
    //     //This is not necessary. We want to get all 16 games 
    //     const arr = [];
    //     for(let i = currentIndex; i < currentIndex+5; i++){
    //         arr.push((mod(i-2, games.length)));
    //     } 
    //     console.log(arr);
    //     setSubset(arr);
    // }

    const shiftRight = ()=>{
        setDirection('right');
        setIndex((prevIndex)=>mod(prevIndex - 1, games.length));
        // generateSubset(index);
        // console.log(index);

    }

    const shiftLeft = ()=>{
        setDirection('left');
        setIndex((prevIndex)=>mod(prevIndex + 1, games.length));
        // generateSubset(index);
        // console.log(index);

    }
    
    const onDisplay = (i) => {
        if(mod(i, games.length) === mod(index - 2, games.length)) 
            return `left-edge`;
        if(mod(i, games.length) === mod(index - 1, games.length)) 
            return `left-next`;
        if(i === index) 
            return `active`;
        if(mod(i, games.length) === mod(index + 1, games.length)) 
            return `right-next`;
        if(mod(i, games.length) === mod(index + 2, games.length)) 
            return `right-edge`;
        return 'inactive'; 
    }

    const gamesExist = Object.keys(games).length > 0;


    const animationNames = (i)=>{
        if(mod(i, games.length) === mod(index - 2, games.length)) 
            return `${direction === "left" ? "left-next-to-edge" : "fade-in-left-edge"}`;
        if(mod(i, games.length) === mod(index - 1, games.length)) 
            return `${direction === "left" ? "active-to-left-next" : "left-edge-to-next"}`;
        if(i === index) 
            return `${direction === "left" ? "right-next-to-active" : "left-next-to-active"}`;
        if(mod(i, games.length) === mod(index + 1, games.length)) 
            return `${direction === "left" ? "right-edge-to-next" : "active-to-right-next"}`;
        if(mod(i, games.length) === mod(index + 2, games.length)) 
            return `${direction === "left" ? "fade-in-right-edge" : "right-next-to-edge"}`;
        return '';
        // could make it work like onDisplay does4
        // let animations = direction === "left" ? 
        // [
        //     "left-next-to-edge",
        //     "active-to-left-next",
        //     "right-next-to-active",
        //     "right-edge-to-next",
        //     "fade-in-right-edge"
        // ] : direction === "right" ? [
        //     "fade-in-left-edge",
        //     "left-edge-to-next",
        //     "left-next-to-active",
        //     "active-to-right-next",
        //     "right-next-to-edge"
        // ] : [];

        // return animations[i] || '';
    }

    const mod = (value, n)=> ((value % n) + n) % n
    
    return{
        setGames, 
        games,
        onDisplay, 
        shiftLeft, 
        shiftRight,
        animationNames,
        gamesExist
    }

}

export default useCarousel;
