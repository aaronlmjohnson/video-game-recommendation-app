import { useEffect, useState } from 'react'

const useCarousel = ()=>{

    const [games, setGames] = useState(null);
    const [index, setIndex] = useState(0);
    const [subset, setSubset] = useState([]);

    const SUBSET_SIZE = 5;

    useEffect(()=>{
        if(games) generateSubset();
    }, [games]);

    const generateSubset = ()=>{
        const arr = [];
        for(let i = index; i < 5; i++)
            arr.push(games[(mod(i-2, games.length))]);  
        setSubset(arr);
    }

    const mod = (value, n)=> ((value % n) + n) % n
    
    return{
        generateSubset, setGames, subset
    }

}

export default useCarousel;

// i want this to contain the carouselArray and have access to the rotate method that I can use on any of the carousels I need to make