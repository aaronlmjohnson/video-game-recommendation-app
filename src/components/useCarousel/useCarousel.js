import { useEffect, useState } from 'react'

const useCarousel = ()=>{

    const [games, setGames] = useState({});
    const [index, setIndex] = useState(0);
    const [subset, setSubset] = useState([]);
    const [direction, setDirection] = useState('');

    const SUBSET_SIZE = 5;

    // useEffect(()=>{
    //     if(games) setSubset(games);
    // }, [games]);

    const generateSubset = (currentIndex)=>{
        //This is not necessary. We want to get all 16 games 
        const arr = [];
        for(let i = currentIndex; i < currentIndex+5; i++){
            arr.push((mod(i-2, games.length)));
        } 
        setSubset(arr);
    }

    const shiftRight = ()=>{
        setDirection('right');
        setIndex((prevIndex)=>mod(prevIndex - 1, games.length));
        generateSubset(index);

    }

    const shiftLeft = ()=>{
        setDirection('left');
        setIndex((prevIndex)=>mod(prevIndex + 1, games.length));
        generateSubset(index);
    }

    const positionNames = (index) => {
        //if i is in subset so i = 12 subset [12, 13, 14, 15, 0] then do subset.indexOf(i); in position names
        const names = ["left-edge", "left-next", "active", "right-next", "right-edge"];
        return names[index] || "inactive";
    }

    const gamesExist = Object.keys(games).length > 0;


    const animationNames = (i)=>{
    
        let animations = direction === "left" ? 
        [
            "left-next-to-edge",
            "active-to-left-next",
            "right-next-to-active",
            "right-edge-to-next",
            "fade-in-right-edge"
        ] : direction === "right" ? [
            "fade-in-left-edge",
            "left-edge-to-next",
            "left-next-to-active",
            "active-to-right-next",
            "right-next-to-edge"
        ] : [];
        
        return animations[i];
    }

    const mod = (value, n)=> ((value % n) + n) % n
    
    return{
        setGames, 
        subset,
        games, 
        shiftLeft, 
        shiftRight,
        positionNames,
        animationNames,
        gamesExist
    }

}

export default useCarousel;
