import './App.css';
import PopularGamesSection from './components/PopularGamesSection/PopularGamesSection';
import Navbar from './components/Navbar/Navbar';
// import GamePage from './components/GamePage/GamePage';
import { useEffect, useState } from 'react';
// import useGamePageData from './components/CustomHooks/useGamePageData';
// import GameRecommendationForm from './components/GameRecommendationForm/GameRecommendationForm';
// import platforms from './platforms.json';
// import genres from './genres.json';
// import developers from './developers.json';
// import useRecommendedGames from './components/useRecommendedGames/useRecommendedGames';
// import RecommendedGames from './components/RecommendedGames/RecommendedGames';
// import FindAGame from './components/FindAGame/FindAGame';
import useApiHandler from './components/useGameAPI/useApiHandler';


function App () {

  const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const GAMES_URL = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`;
  // const [year, setYear] = useState(new Date().getFullYear()); 
  // const [renderGameForm, setRenderGameForm] = useState(false);
  const [gamePageOpen, setGamePageOpen] = useState(false);
  // const [formData, setFormData] = useState({platforms, genres, developers}); 
  // const {recommendedGames, fetchRecommendedGames, recommendedGamesLoading} = useRecommendedGames();


  useEffect(()=>{
    console.log(gamePageOpen);
  }, [gamePageOpen])
  const handleSubmit = (e, queryData)=>{
    e.preventDefault();
    
    const formData = new FormData(e.target);
    // fetchRecommendedGames(formData);
  }
  
  return (
    <div className="wrapper">
      <Navbar 
          // getRandomGame={game.fetchRandom}
          // setRenderGameForm={setRenderGameForm}
          // setGamePageOpen={setGamePageOpen}
        />
      <PopularGamesSection 
        url = {GAMES_URL}
        setGamePageOpen = {setGamePageOpen}
      />
        {/* 
        
      {gamePageOpen || renderGameForm ? <div id="overlay"></div> : null}
      
       
        {gamePageOpen && <GamePage 
         getRandomGame ={game.fetchRandom}
         data={game.data} 
         dataExists = {game.dataExists}
         loading={game.loading}
         clear = {game.clear}
         exists = {game.exists}
         screenshots = {game.screenshots}
         mainScreenshot = {game.mainScreenshot}
         setMainScreenshot = {game.setMainScreenshot}
         screenshotsExist = {game.screenshotsExist}
         setGamePageOpen= {setGamePageOpen}
         game={game}
      /> }

      {renderGameForm && 
        <FindAGame 
          recommendedGames = {recommendedGames}
          setRenderGameForm = {setRenderGameForm}
          data={formData}
          handleSubmit={handleSubmit}
          loading={recommendedGamesLoading}
          setGamePageOpen={setGamePageOpen}
          fetchGame = {game.fetchGame}
        />
      }

      {/* <GameRecommendationForm 
        data={formData}
        handleSubmit={handleSubmit}
        setRenderGameForm={setRenderGameForm}
        loading={recommendedGamesLoading}
      /> */}

    
    </div>
  );
}

export default App;
