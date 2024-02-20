import './GameDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faDice } from '@fortawesome/free-solid-svg-icons'
import GameInfoList from '../GameInfoList/GameInfoList';
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel';
import useGameDataContext from '../../customHooks/useGameDataContext';
import RandomGameButton from '../RandomGameButton';

const GameNotFound = ({setError})=>{
    const { setGameId } = useGameDataContext();
    const handleClick = (e)=>{
        e.preventDefault();
        setError(false);
        const MAX_GAMES = 863248 //As of February 2024 this is to avoid making another API call
        setGameId(Math.ceil(Math.random()* MAX_GAMES));
    }

    return(
        <div className="game-not-found">
            <RandomGameButton />
            <h1 id="game-not-found-prompt">Game Not Found! Roll again!</h1>
        </div>
    )
}

export default GameNotFound;