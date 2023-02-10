import { useEffect, useState } from "react";
import useApiHandler from "../useGameAPI/useApiHandler";

const useRandomGame = ()=>{
    const [gameData, setGameData ] = useState({});
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;

    
    const {data, error, setError, refetch, loading } = useApiHandler('');

    const getRandomGame = ()=>{
        setError(false);
        let randomId = Math.ceil(Math.random() * NUMBER_OF_GAMES);  
        //refetch(`https://api.rawg.io/api/games/${randomId}?key=${RAWG_API_KEY}`);
        refetch(`https://api.rawg.io/api/games/${"grand-theft-auto-v"}?key=${RAWG_API_KEY}`);
        setGameData(data);
    }

    useEffect(()=>{
        if(Object.keys(data).length > 0) setGameData(data);
    },[data]);

    const gameDataIsEmpty = ()=>{
        return Object.keys(gameData).length < 1;
    }

    const clearGameData = ()=>{
        setGameData({});
    }

    const gameNotFound = ()=> error;


    return {gameData, getRandomGame, gameDataIsEmpty, clearGameData, gameNotFound, loading}
}

export default useRandomGame;