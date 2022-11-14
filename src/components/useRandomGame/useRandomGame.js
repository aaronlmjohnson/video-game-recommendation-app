import { useEffect, useState } from "react";
import useApiHandler from "../useGameAPI/useApiHandler";

const useRandomGame = ()=>{
    const [gameData, setGameData ] = useState({});
    const NUMBER_OF_GAMES = 815664;
    const {data, error, setError, refetch, loading } = useApiHandler('');

    const getRandomGame = ()=>{
        setError(false);
        let randomId = Math.ceil(Math.random() * NUMBER_OF_GAMES);  
        refetch(`https://api.rawg.io/api/games/${randomId}?key=9ff2d4cc97c24f959f6e39996f82a045`);
        setGameData(data);
    }

    useEffect(()=>{
        getRandomGame();
    },[]);

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