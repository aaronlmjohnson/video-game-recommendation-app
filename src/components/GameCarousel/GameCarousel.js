import './GameCarousel.css';
import GameInfoCard from "../GameInfoCard/GameInfoCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import useApiHandler from '../useGameAPI/useApiHandler';

const GamesCarousel = ({url})=>{
    const {data:games, loading:gamesLoading, error} = useApiHandler(`${url}&dates=2024-01-01,2024-12-31&page_size=16`);
    return (
        <div className="game-carousel">
            {/* <button className="carousel-button carousel-left" onClick={shiftLeft}>
                <FontAwesomeIcon className="carousel-caret" icon={faCaretLeft} />
            </button> */}
            {gamesLoading ?
            <>Loading...</> :
            games?.results.map((game, i)=>{
                return (
                    <GameInfoCard
                        name={game.name} 
                        src={game.background_image} 
                        key={game.id}
                        id={game.id}

                    />)
            })}
            {/* <button className="carousel-button carousel-right" onClick={shiftRight}>
                <FontAwesomeIcon className="carousel-caret" icon={faCaretRight} />
            </button> */}
        </div>
    );
}

export default GamesCarousel;