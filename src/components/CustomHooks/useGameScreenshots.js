import { useEffect, useState } from "react";
import useApiHandler from "../useGameAPI/useApiHandler";

const useGameScreenshots = (id)=>{
    const [screenshots, setScreenshots] = useState({});
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
    const {data, error, setError, refetch, loading } = useApiHandler(`https://api.rawg.io/api/games/${id}/screenshots?key=${RAWG_API_KEY}`);

    useEffect(()=>{
        setScreenshots(data);
    },[]);


    return {screenshots, screenshotsLoading:loading}
}

export default useGameScreenshots;