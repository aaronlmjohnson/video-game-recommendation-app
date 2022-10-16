import './App.css';
import ModeButtons from './components/ModeButtons/ModeButtons';
import GamesReleasedToday from './components/GamesReleasedToday/GamesReleasedToday';

function App() {
  return (
    <div id="app-container">
      <h1>Video Game Recommender</h1>
      <ModeButtons />
      <GamesReleasedToday cards={[0, 1, 2, 3, 4, 5, 6, 7, 8]}/>
    </div>
  );
}

export default App;
