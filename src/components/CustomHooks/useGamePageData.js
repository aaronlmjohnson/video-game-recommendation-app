import { useEffect, useState } from "react";
import useApiHandler from "../useGameAPI/useApiHandler";
import useGameScreenshots from "./useGameScreenshots";

const useGamePageData = (id)=>{
    const [data, setData ] = useState({});
    const {screenshots, fetchScreenshots, mainScreenshot, setMainScreenshot, screenshotsExist} = useGameScreenshots();
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
    const gameApi = useApiHandler();
    //`https://api.rawg.io/api/games/${id}?key=${RAWG_API_KEY}`
    const NUMBER_OF_GAMES = 50000; //limiting to 10000 since there are a lot of unfinished or project games in the higher id numbers
    useEffect(()=>{
        //GTAV ID 3498
        
        setData(gameApi.data);
        //`https://api.rawg.io/api/games/${id}/screenshots?key=${RAWG_API_KEY}`
    },[gameApi.data, screenshots]);


    const clear = ()=>{
        setData({});
    }

    const fetchRandom = ()=>{
        let randomId = Math.ceil(Math.random() * NUMBER_OF_GAMES);
        console.log("random error:" + gameApi.error);
        fetchGame(randomId);
        //game not found: 14250
        //17203 and 49410 42463 cause the Screenshot carousel error. When I put console.log in ScreenshotCarousel somehow it fixes the issue?
    }

    const fetchGame = (id)=>{
        if(gameApi.error) gameApi.setError(false);
        gameApi.refetch(`https://api.rawg.io/api/games/${id}?key=${RAWG_API_KEY}`);
        fetchScreenshots(id); 
    }

    const exists = !gameApi.error;

    const dataExists = Object.keys(data).length > 0;

    return {
        data,
        loading: gameApi.loading && !dataExists,
        clear, 
        exists,
        dataExists,
        fetchRandom,
        fetchGame,
        screenshots,
        mainScreenshot, 
        setMainScreenshot,
        screenshotsExist
    } 
}

export default useGamePageData;