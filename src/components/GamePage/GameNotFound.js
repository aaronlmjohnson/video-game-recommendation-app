import './GamePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faDice } from '@fortawesome/free-solid-svg-icons'
import GameInfoList from '../GameInfoList/GameInfoList';
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel';

const GameNotFound = ({getRandomGame, clear})=>{
    return(
        <div className="game-not-found">
            <div className="game-page-main">
                <div id="game-page-nav">
                    <button id="game-page-exit-button" onClick={clear}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div> 
                <button id="game-not-found-random-button"></button>
                Game Not Found!
            </div>
        </div>
    )
}

export default GameNotFound;