import { useEffect, useState } from "react";
import useApiHandler from "../useGameAPI/useApiHandler";

const useGameScreenshots = ()=>{
    const [screenshots, setScreenshots] = useState({});
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
    const {data, error, setError, refetch, loading } = useApiHandler();

    useEffect(()=>{
        console.log(data);
        setScreenshots(data);
    },[]);

    const fetchScreenshots = (id)=>{
        refetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${RAWG_API_KEY}`)
    }

    return {screenshots, fetchScreenshots, screenshotsLoading:loading}
}

export default useGameScreenshots;