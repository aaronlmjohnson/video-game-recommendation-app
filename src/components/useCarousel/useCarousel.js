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

    const shiftLeft = ()=>{
        setIndex((prevIndex)=>mod(prevIndex - 1, games.length));
    }

    const shiftRight = ()=>{
        setIndex((prevIndex)=>mod(prevIndex + 1, games.length));
    }

    const mod = (value, n)=> ((value % n) + n) % n
    
    return{
        setGames, subset, shiftLeft, shiftRight
    }

}

export default useCarousel;
