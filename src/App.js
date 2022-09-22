import './App.css';

function App() {
  return (
    <div className="App" role="app-container">
      <h1>Video Game Recommender</h1>
      <div id="mode-buttons">
        <button className="mode-button">Recommend a Game</button>
        <button className="mode-button">Random Game</button>
      </div>
      <div id="games-released-today">
        <h1>Games Released Today</h1>
      </div>
    </div>
  );
}

export default App;
