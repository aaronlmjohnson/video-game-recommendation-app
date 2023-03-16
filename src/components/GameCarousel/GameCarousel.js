import './GameCarousel.css';
import GameInfoCard from "../GameInfoCard/GameInfoCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const PopularGames = ({ games, shiftLeft, shiftRight, positionNames, fetchGame, setGamePageOpen, animationNames, gamesExist, onDisplay })=>{
    return (
        <div id="popular-games">
            <button className="carousel-button carousel-left" onClick={shiftLeft}>
                <FontAwesomeIcon className="carousel-caret" icon={faCaretLeft} />
            </button>
            <div id="popular-games-carousel">
                {gamesExist && games.map((game, i)=>{
                    onDisplay(i);
                    return <GameInfoCard
                        carouselPosition = {onDisplay(i)}
                        name={game.name} 
                        src={game.background_image} 
                        key={game.id}
                        id={game.id}
                        fetchGame = {fetchGame}
                        setGamePageOpen={setGamePageOpen}
                        animationName={animationNames(i)}
                    />
                })}
            </div>
            <button className="carousel-button carousel-right" onClick={shiftRight}>
                <FontAwesomeIcon className="carousel-caret" icon={faCaretRight} />
            </button>
        </div>
    );
}

export default PopularGames;