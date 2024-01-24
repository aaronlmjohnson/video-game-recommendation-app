import './GameCarousel.css';
import GameInfoCard from "../GameInfoCard/GameInfoCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import useApiHandler from '../useGameAPI/useApiHandler';

const PopularGames = ()=>{
    const {data:games, loading:gamesLoading, error} = useApiHandler();
    return (
        <div id="popular-games">
            {/* <button className="carousel-button carousel-left" onClick={shiftLeft}>
                <FontAwesomeIcon className="carousel-caret" icon={faCaretLeft} />
            </button> */}
            <div id="popular-games-carousel">
                {gamesLoading ?
                <>Loading...</> :
                games.map((game, i)=>{
                    return (
                        <GameInfoCard
                            name={game.name} 
                            src={game.background_image} 
                            key={game.id}
                            id={game.id}

                        />)
                })}
            </div>
            {/* <button className="carousel-button carousel-right" onClick={shiftRight}>
                <FontAwesomeIcon className="carousel-caret" icon={faCaretRight} />
            </button> */}
        </div>
    );
}

export default PopularGames;