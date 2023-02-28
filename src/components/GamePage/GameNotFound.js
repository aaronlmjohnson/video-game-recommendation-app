import './GamePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faDice } from '@fortawesome/free-solid-svg-icons'
import GameInfoList from '../GameInfoList/GameInfoList';
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel';

const GameNotFound = ({getRandomGame, clear})=>{
    return(
        <div className="game-not-found">
            
            <button className="random-button-styling random-button-large" >
                4<FontAwesomeIcon id="large-random-icon" icon={faDice} onClick={getRandomGame}/>4
            </button>
            
            <h1 id="game-not-found-prompt">Game Not Found! Roll again!</h1>
        </div>
    )
}

export default GameNotFound;