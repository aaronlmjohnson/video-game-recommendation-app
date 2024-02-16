import './App.css';
import GameDetail from './components/GamePage/GameDetail';
import { createContext, useEffect, useState } from 'react';
import useApiHandler from './components/useGameAPI/useApiHandler';
import BentoContainer from './components/BentoContainer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import useYearContext from './customHooks/useYearContext';

export const YearContext = createContext();

function App () {
  const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const GAMES_URL = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`;
  const {year} = useYearContext();

  const [gameId, setGameId] = useState(null);
  const [gameDetailOpen, setGameDetailOpen] = useState(false);
  
  const {data:frontPageData, loading:frontPageLoading, refetch} = useApiHandler(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&dates=${year}-01-01,${year}-12-31&page_size=9`)

  const handleSubmit = (e, queryData)=>{
    e.preventDefault();
    
    const formData = new FormData(e.target);

  }

  const nameAndImageData = (data)=>{
    return data?.results.reduce((accum, game)=> {
      accum.push({src: game.background_image, name: game.name, id: game.id});
      return accum;
    }, [])
  }
  
  return (
    <>
    <YearContext.Provider value={{RAWG_API_KEY, refetch, setGameDetailOpen, gameId, setGameId, GAMES_URL}}>
      <div className="wrapper">
        {
          frontPageLoading ? 
          <LoadingScreen /> :
          <>
            {gameDetailOpen && <GameDetail />}
            <BentoContainer 
              data={nameAndImageData(frontPageData)}
            />
          </>
        }        
      </div>
    </YearContext.Provider>
    </>
  );
}

export default App;
