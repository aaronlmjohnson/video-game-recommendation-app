import './App.css';
import ModeButtons from './components/ModeButtons/ModeButtons';
import PopularGames from './components/PopularGames/PopularGames';
import PopularGameData from './data.json';
import { useState } from 'react';

function App() {
  const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const [year, setYear] = useState(new Date().getFullYear());

  const updateYear = (value)=>{
    setYear(value);
  }

  const changePopularYearData = ()=>{
    const url = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&dates=${year}-01-01,${year}-12-31&page_size=8`;
    console.log(url);
  }
  return (
    <div id="app-container">
      <h1>Video Game Recommender</h1>
      <ModeButtons />
      <PopularGames 
        data={PopularGameData.results}
        year = {year}
        updateYear = {updateYear}
        changePopularYearData = {changePopularYearData}
      />
    </div>
  );
}

export default App;
