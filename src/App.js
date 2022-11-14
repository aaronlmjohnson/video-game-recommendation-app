import './App.css';
import ModeButtons from './components/ModeButtons/ModeButtons';
import PopularGames from './components/PopularGames/PopularGames';
import { useEffect, useState } from 'react';
import useApiHandler from './components/useGameAPI/useApiHandler';
import useRandomGame from './components/useRandomGame/useRandomGame';
import GamePage from './components/GamePage/GamePage';
import GameRecommendationForm from './components/GameRecommendationForm/GameRecommendationForm';
import platforms from './platforms.json';
import genres from './genres.json';
import developers from './developers.json';
import useRecommendedGames from './components/useRecommendedGames/useRecommendedGames';
import RecommendedGames from './components/RecommendedGames/RecommendedGames';

function App() {
  const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const [formData, setFormData] = useState({platforms, genres, developers}); 
  const GAMES_URL = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`;
  const [year, setYear] = useState(new Date().getFullYear());
  const { data, refetch} = useApiHandler(`${GAMES_URL}&dates=2022-01-01,2022-12-31&page_size=16`);
  const {recommendedGames, fetchRecommendedGames} = useRecommendedGames();
  const [popularGameData, setPopularGameData] = useState({});
  const {gameData, getRandomGame, gameDataIsEmpty, clearGameData, gameNotFound, loading} = useRandomGame();
  const [renderGameForm, setRenderGameForm] = useState(false);
  

  useEffect(()=>{
    setPopularGameData(data);
    setRenderGameForm(false);
  }, [data]); 

  const updateYear = (value)=>{
    setYear(value);
  }

  const changePopularYearData = ()=>{
    const endpoint = `&dates=${year}-01-01,${year}-12-31&page_size=16`;
    const url = `${GAMES_URL}${endpoint}`;
    refetch(url);
  }

  const handleSubmit = (e, queryData)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    fetchRecommendedGames(formData);
  }

  return (
    <div id="app-container">
      <h1>Video Game Recommender</h1>

      <ModeButtons 
        getRandomGame={getRandomGame}
        setRenderGameForm={setRenderGameForm}
      />
      <GamePage 
        data={gameData} 
        loading={loading}
        clearGameData={clearGameData} 
        gameDataIsEmpty = {gameDataIsEmpty}
        gameNotFound ={gameNotFound}
      />

      <PopularGames 
        data={popularGameData.results}
        year = {year}
        updateYear = {updateYear}
        changePopularYearData = {changePopularYearData}
      /> 
 
      {renderGameForm && <GameRecommendationForm 
          data={formData}
          handleSubmit={handleSubmit}
          setRenderGameForm={setRenderGameForm}
      />}

      {recommendedGames.length > 0 ? <RecommendedGames data={recommendedGames} /> : <></> }     
      
    </div>
  );
}

export default App;
