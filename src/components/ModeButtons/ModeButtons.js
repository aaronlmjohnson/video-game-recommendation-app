const ModeButtons = ({gameData, getRandomGame})=>{
    return(
        <div id="mode-buttons">
            <button className="mode-button">Recommend a Game</button>
            <button className="mode-button"onClick={(e)=>{
               getRandomGame();
               console.log(gameData); 
            }}>Random Game</button>
        </div>
    );
}

export default ModeButtons;