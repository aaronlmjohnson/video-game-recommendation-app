import { useEffect, useState } from "react";
import useApiHandler from "../useGameAPI/useApiHandler";

const useRandomGame = ()=>{
    const [gameData, setGameData ] = useState({});
    const NUMBER_OF_GAMES = 815664;
    const {data, refetch } = useApiHandler('');

    const getRandomGame = ()=>{
        const randomId = Math.ceil(Math.random() * NUMBER_OF_GAMES);
        refetch(`https://api.rawg.io/api/games/${randomId}?key=9ff2d4cc97c24f959f6e39996f82a045`);
        
        setGameData((prevState)=>{

        })
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

    return {gameData, getRandomGame, gameDataIsEmpty, clearGameData}
}

export default useRandomGame;