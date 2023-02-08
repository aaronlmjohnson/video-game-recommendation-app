import { useEffect, useState } from "react";
import useApiHandler from "../useGameAPI/useApiHandler";
import useGameScreenshots from "./useGameScreenshots";

const useGamePageData = (id)=>{
    const [gameData, setGameData ] = useState({});
    const {screenshots, screenshotsLoading} = useGameScreenshots(id);
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
    const {data, error, setError, refetch, loading } = useApiHandler(`https://api.rawg.io/api/games/${id}?key=${RAWG_API_KEY}`);

    useEffect(()=>{
        //GTAV ID 3498
        setGameData(data);
    },[data, screenshots]);


    return {gameData, screenshots, screenshotsLoading, loading} //gameDataIsEmpty, clearGameData, gameNotFound, loading
}

export default useGamePageData;