import './App.css';
import ModeButtons from './components/ModeButtons/ModeButtons';
import PopularGames from './components/PopularGames/PopularGames';
import PopularGameData from './data.json';
import { useState } from 'react';

function App() {
  const [year, setYear] = useState(new Date().getFullYear());

  const updateYear = (value)=>{
    setYear(value);
  }
  return (
    <div id="app-container">
      <h1>Video Game Recommender</h1>
      <ModeButtons />
      <PopularGames 
        data={PopularGameData.results}
        year = {year}
        updateYear = {updateYear}
      />
    </div>
  );
}

export default App;
