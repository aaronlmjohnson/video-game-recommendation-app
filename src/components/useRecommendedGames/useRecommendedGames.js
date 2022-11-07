import { useEffect, useState } from "react";
import useApiHandler from "../useGameAPI/useApiHandler";

const useRecommendedGames =  ()=>{
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;

    const {data, refetch} = useApiHandler(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}`);

    useEffect(()=>{


    }, [])

    return data;
}

export default useRecommendedGames;