import './App.css';
// import ModeButtons from './components/ModeButtons/ModeButtons';
// import PopularGamesSection from './components/PopularGamesSection/PopularGamesSection';
// import useRandomGame from './components/useRandomGame/useRandomGame';

// import GameRecommendationForm from './components/GameRecommendationForm/GameRecommendationForm';
// import platforms from './platforms.json';
// import genres from './genres.json';
// import developers from './developers.json';
// import useRecommendedGames from './components/useRecommendedGames/useRecommendedGames';
// import RecommendedGames from './components/RecommendedGames/RecommendedGames';
// import useCarousel from './components/useCarousel/useCarousel';

// function App() {
//   const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;

//   // const [formData, setFormData] = useState({platforms, genres, developers}); 
//   // const GAMES_URL = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`;
//   // const {recommendedGames, fetchRecommendedGames, recommendedGamesLoading} = useRecommendedGames();
//   // const [popularGameData, setPopularGameData] = useState({});
//   // const {gameData, getRandomGame, gameDataIsEmpty, clearGameData, gameNotFound, loading} = useRandomGame();
//   // const [renderGameForm, setRenderGameForm] = useState(false);
//   // const {generateSubset, setGames, subset} = useCarousel([]);

//   // useEffect(()=>{
//   //   //setPopularGameData(data);
//   //   //setRenderGameForm(false);
//   // }, []); 



//   // const handleSubmit = (e, queryData)=>{
//   //   e.preventDefault();
//   //   const formData = new FormData(e.target);
//   //   fetchRecommendedGames(formData);
//   // }

//   return (
//     <div id="app-container">
// {/* 
//       <ModeButtons 
//         getRandomGame={getRandomGame}
//         setRenderGameForm={setRenderGameForm}
//       />
//       <GamePage 
//         data={gameData} 
//         loading={loading}
//         clearGameData={clearGameData} 
//         gameDataIsEmpty = {gameDataIsEmpty}
//         gameNotFound ={gameNotFound}
//       />

//        <PopularGamesSection
//         apiKey = {RAWG_API_KEY} 
//       /> 
 
//       {renderGameForm && <GameRecommendationForm 
//           data={formData}
//           handleSubmit={handleSubmit}
//           setRenderGameForm={setRenderGameForm}
//           loading={recommendedGamesLoading}
//       />}

//       {!recommendedGamesLoading()? <RecommendedGames data={recommendedGames} /> : <>Loading</> }       */}
      
//     </div>
//   );
// }

import './App.css';
import PopularGamesSection from './components/PopularGamesSection/PopularGamesSection';
import Navbar from './components/Navbar/Navbar';
// import useRandomGame from './components/useRandomGame/useRandomGame';
import GamePage from './components/GamePage/GamePage';
import { useEffect, useState } from 'react';
import useGamePageData from './components/CustomHooks/useGamePageData';
import GameNotFound from './components/GamePage/GameNotFound';

function App () {

  const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const GAMES_URL = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`;
  //const {gameData, screenshots, screenshotsLoading, loading} = useGamePageData("3498");
  //GTAV ID 3498
  const [year, setYear] = useState(new Date().getFullYear()); 
  const [renderGameForm, setRenderGameForm] = useState(false);
  const [gamePageOpen, setGamePageOpen] = useState(false);
  const game = useGamePageData();
 //const {gameData, getRandomGame, loading} = useRandomGame();
  // const {gameData, getRandomGame, gameDataIsEmpty, clearGameData, gameNotFound, loading} = useRandomGame();
  
  return (
    <div id="app-container">
        <Navbar 
          getRandomGame={game.fetchRandom}
          setRenderGameForm={setRenderGameForm}
          setGamePageOpen={setGamePageOpen}
        />
        <PopularGamesSection
          url = {GAMES_URL}
          year = {year}
          setYear = {setYear} 
        />
      {gamePageOpen ? <div id="overlay"></div> : null}
       
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
    

    </div>
  );

}

export default App;
