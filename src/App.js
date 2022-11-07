import './App.css';
import ModeButtons from './components/ModeButtons/ModeButtons';
import PopularGames from './components/PopularGames/PopularGames';
import { useEffect, useState } from 'react';
import useApiHandler from './components/useGameAPI/useApiHandler';
import useRandomGame from './components/useRandomGame/useRandomGame';
import GamePage from './components/GamePage/GamePage';
import { clear } from '@testing-library/user-event/dist/clear';
import GameRecommendationForm from './components/GameRecommendationForm/GameRecommendationForm';
import platforms from './platforms.json';
import genres from './genres.json';
import developers from './developers.json';
import useRecommendationData from './components/useRecommendationData/useRecommendationData';
//example for form query
//https://api.rawg.io/api/games?key=9ff2d4cc97c24f959f6e39996f82a045&platforms=4&genres=59&dates=2000-01-01,2009-12-31&metacritic=70,100&developers=16257
function App() {
  const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  //const { formData } = {//useRecommendationData(); 
  const [formData, setFormData] = useState({platforms, genres, developers}); // for testing purposes only
  const [gameQuery, setGameQuery] = useState(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}`);

  // const GAMES_URL = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`;
  // const [year, setYear] = useState(new Date().getFullYear());
  // const { data, refetch} = useApiHandler(`${GAMES_URL}&dates=2022-01-01,2022-12-31&page_size=16`);
  // const [popularGameData, setPopularGameData] = useState({});
  // const {gameData, getRandomGame, gameDataIsEmpty, clearGameData} = useRandomGame();

  // useEffect(()=>{
  //   setPopularGameData(data);
  // }, [data]);

  // const updateYear = (value)=>{
  //   setYear(value);
  // }

  // const changePopularYearData = ()=>{
  //   const endpoint = `&dates=${year}-01-01,${year}-12-31&page_size=16`;
  //   const url = `${GAMES_URL}${endpoint}`;
  //   refetch(url);
  // }

  const handleSubmit = (e, queryData)=>{
    e.preventDefault();
    //https://api.rawg.io/api/games?key=9ff2d4cc97c24f959f6e39996f82a045&platforms=4&genres=4&dates=2000-01-01,2009-12-31&metacritic=70,100&developers=405
    const formData = new FormData(e.target);

    const parsedData = inputParser(formData);//seperate platforms genres and developers into their own object from rating and dates
    const url = `https://api.rawg.io/api/games?key=9ff2d4cc97c24f959f6e39996f82a045&${getEndPoints(parsedData)}`;
    
    console.log(url);
  }
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

  return (
      <div>
         <GameRecommendationForm 
          data={formData}
          handleSubmit={handleSubmit}
        />
      </div>
    // <div id="app-container">
    //   <h1>Video Game Recommender</h1>
    //   <ModeButtons 
    //     game={gameData}
    //     getRandomGame={getRandomGame}
    //   />
    //   {!gameDataIsEmpty() && <GamePage data={gameData} clearGameData={clearGameData} />}

      

    //   <PopularGames 
    //     data={popularGameData.results}
    //     year = {year}
    //     updateYear = {updateYear}
    //     changePopularYearData = {changePopularYearData}
    //   />      
      
    // </div>
  );
}

export default App;
