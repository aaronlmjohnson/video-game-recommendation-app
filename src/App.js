import './App.css';
import PopularGamesSection from './components/PopularGamesSection/PopularGamesSection';
import Navbar from './components/Navbar/Navbar';
import GameDetail from './components/GamePage/GameDetail';
import { createContext, useEffect, useState } from 'react';
// import useGamePageData from './components/CustomHooks/useGamePageData';
// import GameRecommendationForm from './components/GameRecommendationForm/GameRecommendationForm';
// import platforms from './platforms.json';
// import genres from './genres.json';
// import developers from './developers.json';
// import useRecommendedGames from './components/useRecommendedGames/useRecommendedGames';
// import RecommendedGames from './components/RecommendedGames/RecommendedGames';
// import FindAGame from './components/FindAGame/FindAGame';
import useApiHandler from './components/useGameAPI/useApiHandler';
import BentoContainer from './components/BentoContainer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
export const YearContext = createContext();

function App () {

  const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const GAMES_URL = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`;

  const CURRENT_YEAR = new Date().getFullYear();
  const FIRST_YEAR = 1972;
  const [year, setYear] = useState(CURRENT_YEAR); 
  // const [renderGameForm, setRenderGameForm] = useState(false);


  const [gamePageOpen, setGamePageOpen] = useState(false);
  const [game, setGame] = useState(null);

  const {data:frontPageData, loading:frontPageLoading, refetch} = useApiHandler(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&dates=${year}-01-01,${year}-12-31&page_size=9`)
  // const [formData, setFormData] = useState({platforms, genres, developers}); 
  // const {recommendedGames, fetchRecommendedGames, recommendedGamesLoading} = useRecommendedGames();

  const handleSubmit = (e, queryData)=>{
    e.preventDefault();
    
    const formData = new FormData(e.target);
    // fetchRecommendedGames(formData);
  }

  const nameAndImageData = (data)=>{
    return data?.results.reduce((accum, game)=> {
      accum.push({src: game.background_image, name: game.name, id: game.id});
      return accum;
    }, [])
  }
  
  return (
    <YearContext.Provider value={{year, setYear, FIRST_YEAR, CURRENT_YEAR, RAWG_API_KEY, refetch}}>
      <div className="wrapper">
        {frontPageLoading ? 
        <LoadingScreen /> :
        <BentoContainer 
          data={nameAndImageData(frontPageData)}
          year={year}
        />}
      </div>
    </YearContext.Provider>
  );
}

export default App;
