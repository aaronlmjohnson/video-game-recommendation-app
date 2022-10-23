import './App.css';
import ModeButtons from './components/ModeButtons/ModeButtons';
import PopularGames from './components/PopularGames/PopularGames';
import PopularGameData from './data.json';

function App() {
  console.log(PopularGameData.results);
  return (
    <div id="app-container">
      <h1>Video Game Recommender</h1>
      <ModeButtons />
      <PopularGames data={PopularGameData.results}/>
    </div>
  );
}

export default App;
