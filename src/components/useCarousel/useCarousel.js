import { useEffect, useState } from 'react'

const useCarousel = ()=>{

    const [games, setGames] = useState(null);
    const [index, setIndex] = useState(0);
    const [subset, setSubset] = useState([]);
    const [direction, setDirection] = useState('');

    const SUBSET_SIZE = 5;

    useEffect(()=>{
        if(games) generateSubset(index);
    }, [games, index]);

    const generateSubset = (currentIndex)=>{
        const arr = [];
        for(let i = currentIndex; i < currentIndex+5; i++){
            arr.push(games[(mod(i-2, games.length))]);
        }   
        setSubset(arr);
    }

    const shiftRight = ()=>{
        setDirection('right');
        setIndex((prevIndex)=>mod(prevIndex - 1, games.length));
    }

    const shiftLeft = ()=>{
        setDirection('left');
        setIndex((prevIndex)=>mod(prevIndex + 1, games.length));
    }

    const positionNames = (index) => {
        const names = ["left-edge", "left-next", "active", "right-next", "right-edge"];
        return names[index];
    }

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
        shiftLeft, 
        shiftRight,
        positionNames,
        animationNames
    }

}

export default useCarousel;
