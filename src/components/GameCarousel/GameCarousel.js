import './GameCarousel.css';
import GameInfoCard from "../GameInfoCard/GameInfoCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const PopularGames = ({ games, shiftLeft, shiftRight, positionNames })=>{
    return (
        <div id="popular-games">
            <button className="carousel-button carousel-left" onClick={shiftLeft}>
                <FontAwesomeIcon className="carousel-caret" icon={faCaretLeft} />
            </button>
            <div id="popular-games-carousel">
                {games.map((game, i)=>{
                    return <GameInfoCard
                        carouselPosition = {positionNames(i)}
                        name={game.name} 
                        src={game.background_image} 
                        key={game.id}
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