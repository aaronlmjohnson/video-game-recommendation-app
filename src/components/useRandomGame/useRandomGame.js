import { useState } from "react";
import useApiHandler from "../useGameAPI/useApiHandler";

const useRandomGame = ()=>{
    const [game, setGame ] = useState('');
    const NUMBER_OF_GAMES = 815664;
    const {data, refetch } = useApiHandler('');

    const getRandomGame = ()=>{
        const randomId = Math.ceil(Math.random() * NUMBER_OF_GAMES);
        refetch(`https://api.rawg.io/api/games/${randomId}?key=9ff2d4cc97c24f959f6e39996f82a045`);
        setGame(data);
    }

    return {game, getRandomGame}
}

export default useRandomGame;