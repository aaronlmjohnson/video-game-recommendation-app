import './App.css';
import ModeButtons from './components/ModeButtons/ModeButtons';
import GamesReleasedToday from './components/GamesReleasedToday/GamesReleasedToday';

function App() {
  return (
    <div id="app-container">
      <h1>Video Game Recommender</h1>
      <ModeButtons />
      <GamesReleasedToday />
    </div>
  );
}

export default App;
