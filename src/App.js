import './App.css';
import ModeButtons from './components/ModeButtons/ModeButtons';
import PopularGames from './components/PopularGames/PopularGames';
import { useEffect, useState } from 'react';
import useApiHandler from './components/useGameAPI/useApiHandler';
import useRandomGame from './components/useRandomGame/useRandomGame';
import GamePage from './components/GamePage/GamePage';
import { clear } from '@testing-library/user-event/dist/clear';
import GameRecommendationForm from './components/GameRecommendationForm/GameRecommendationForm';
import Platforms from './platforms.json';
import Genres from './genres.json';
import Developers from './developers.json';
import useRecommendationData from './components/useRecommendationData/useRecommendationData';
//example for form query
//https://api.rawg.io/api/games?key=9ff2d4cc97c24f959f6e39996f82a045&platforms=4&genres=59&dates=2000-01-01,2009-12-31&metacritic=70,100&developers=16257
function App() {
  const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const { formData } = useRecommendationData(); 
  console.log(formData);
  // console.log(formData)
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

  return (
      <div>
        <GameRecommendationForm 
          platforms={Platforms}
          genres={Genres}
          developers={Developers}
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
