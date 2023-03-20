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

    const animationsLeft = [
        "left-next-to-edge",
        "active-to-left-next",
        "right-next-to-active",
        "right-edge-to-next",
        "fade-in-right-edge"
    ]

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
        //this commented out code has an infinite loop because im incrementing start. itll never reach end condition. 
        // let start = -1 * Math.floor(SUBSET_SIZE / 2);
        // //loop through this start at  -Subset_size / 2 floored increment to -Subset_size / 2 floored + subset_size
        // for(start; start < start + SUBSET_SIZE; start++){
        //     console.log(start);
        //     if(mod(i, games.length) === mod(index - start, games.length)) 
        //         return `${direction === "left" ? animationsLeft[start] : "fade-in-left-edge"}`;
        //     else
        //         return '';
        // }
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
