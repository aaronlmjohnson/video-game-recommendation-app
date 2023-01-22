import { useEffect, useState } from 'react'

const useCarousel = ()=>{

    const [games, setGames] = useState(null);
    const [index, setIndex] = useState(0);
    const [subset, setSubset] = useState([]);

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
        setIndex((prevIndex)=>mod(prevIndex - 1, games.length));
    }

    const shiftLeft = ()=>{
        setIndex((prevIndex)=>mod(prevIndex + 1, games.length));
    }

    const positionNames = (index) => {
        const names = ["left-edge", "left-next", "active", "right-next", "right-edge"];
        return names[index];
    }

    const mod = (value, n)=> ((value % n) + n) % n
    
    return{
        setGames, 
        subset, 
        shiftLeft, 
        shiftRight,
        positionNames
    }

}

export default useCarousel;
