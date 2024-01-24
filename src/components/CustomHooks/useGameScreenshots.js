// import { useEffect, useState } from "react";
// import useApiHandler from "../useGameAPI/useApiHandler";

// const useGameScreenshots = ()=>{
//     const [screenshots, setScreenshots] = useState({});
//     const [mainScreenshot, setMainScreenshot] = useState({});
//     const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
//     const {data, error, setError, refetch, loading } = useApiHandler();
//     const dataExists = Object.keys(data).length > 0;
//     useEffect(()=>{
//         setScreenshots(data);
//         if(dataExists) setMainScreenshot(data.results[0]);
        
            
//     },[data]);

//     const fetchScreenshots = (id)=>{
//         refetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${RAWG_API_KEY}`);
//     }

//     return {screenshots, mainScreenshot, setMainScreenshot, fetchScreenshots, screenshotsLoading:loading, screenshotsExists:dataExists}
// }

// export default useGameScreenshots;