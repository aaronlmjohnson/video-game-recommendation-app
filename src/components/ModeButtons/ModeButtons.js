import './ModeButtons.css';
const ModeButtons = ({getRandomGame, setRenderGameForm})=>{
    return(
        <div id="mode-buttons">
            <button className="mode-button" onClick={(e)=>setRenderGameForm(true)}>Recommend a Game</button>
            <button className="mode-button"onClick={getRandomGame}>Random Game</button>
        </div>
    );
}

export default ModeButtons;