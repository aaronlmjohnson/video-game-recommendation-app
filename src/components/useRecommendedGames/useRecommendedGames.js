import { useEffect, useState } from "react";
import useApiHandler from "../useGameAPI/useApiHandler";

const useRecommendedGames =  ()=>{
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;

    const {data, refetch, loading} = useApiHandler({});
    const [recommendedGames, setRecommendedGames] = useState([]);

    useEffect(()=>{
      if(Object.keys(data).length > 0) setRecommendedGames(data.results);
    }, [data])

    const getEndPoints = (parsedData)=>{
        let endpointStr = "";
    
        for(const key in parsedData){
          if(parsedData[key].length < 1) continue;
    
          endpointStr += key+"=";
    
          if(key === "metacritic")
            endpointStr += parsedData[key];
          else{
            for(let i = 0; i < parsedData[key].length; i++)
                endpointStr +=`${parsedData[key][i]}${i === (parsedData[key].length-1) ? '' : ','}`;
            
            endpointStr += '&';
          }
        }
        return endpointStr;
      }
      const inputParser = (formData)=>{
        const formObj = {platforms:[], genres:[], developers:[], dates:[]};
        for (const [key, value] of formData) {
          if(isPlatDevOrGenre(key))
            formObj[getKeyName(key)].push(getKeyId(key));
          if((key === "start-date" || key === "end-date")){
            if(!value) continue;
            formObj.dates.push(value);
          } else
            formObj[key] = value;
        }
        return formObj;
      }
    
      const isPlatDevOrGenre = (str)=>{
        return /^(platforms|developers|genres)$/.test(getKeyName(str));
      }
      
      const getKeyName = (str)=> str.slice(0, str.indexOf("-"));
      
      const getKeyId = (str)=> str.slice(str.indexOf('-')+1);

      const fetchRecommendedGames = (formData)=>{
        const parsedData = inputParser(formData);
        const url = `https://api.rawg.io/api/games?key=9ff2d4cc97c24f959f6e39996f82a045&${getEndPoints(parsedData)}`;
        refetch(url);
        setRecommendedGames(data.results);
      }

      const recommendedGamesLoading = ()=> loading;

    return {recommendedGames, fetchRecommendedGames, recommendedGamesLoading};
}

export default useRecommendedGames;