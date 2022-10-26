import './App.css';
import ModeButtons from './components/ModeButtons/ModeButtons';
import PopularGames from './components/PopularGames/PopularGames';
import { useEffect, useState } from 'react';
import useApiHandler from './components/useGameAPI/useApiHandler';

function App() {
  const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const GAMES_URL = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`;
  const [year, setYear] = useState(new Date().getFullYear());
  const { data, refetch} = useApiHandler(`${GAMES_URL}&dates=2022-01-01,2022-12-31&page_size=16`);
  const [popularGameData, setPopularGameData] = useState({});

  useEffect(()=>{
    setPopularGameData(data);
  }, [data]);

  const updateYear = (value)=>{
    setYear(value);
  }

  const changePopularYearData = ()=>{
    const endpoint = `&dates=${year}-01-01,${year}-12-31&page_size=16`;
    const url = `${GAMES_URL}${endpoint}`;
    refetch(url);
  }

  return (
    <div id="app-container">
      <h1>Video Game Recommender</h1>
      <ModeButtons />
      <PopularGames 
        data={popularGameData.results}
        year = {year}
        updateYear = {updateYear}
        changePopularYearData = {changePopularYearData}
      />
    </div>
  );
}

export default App;
