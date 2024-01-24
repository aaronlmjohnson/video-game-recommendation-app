import './GameCarousel.css';
import GameInfoCard from "../GameInfoCard/GameInfoCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import useApiHandler from '../useGameAPI/useApiHandler';
import { useState } from 'react';

const GamesCarousel = ({url})=>{
    const {data:games, loading:gamesLoading, error} = useApiHandler(`${url}&dates=2024-01-01,2024-12-31&page_size=16`);
    const [shift, setShift] = useState(0);
    const [shiftClass, setShiftClass] = useState('');

    const mod = (n, d)=> ((n % d) + d) % d;
    
    
    return (
        <div className="game-carousel">
            <button className="carousel-button carousel-left" onClick={()=> {
                setShiftClass('shift-left');
                setShift(prev => prev -= 1)
            }}>
                <FontAwesomeIcon className="carousel-caret" icon={faCaretLeft} />
            </button>
            {gamesLoading ?
            <>Loading...</> :
            games?.results.map((game, i)=>{
                let shiftedI = mod(i + shift, games.results.length);
                return (
                    <GameInfoCard
                        name={game.name} 
                        src={game.background_image} 
                        key={game.id}
                        id={game.id}
                        carouselClass = {shiftedI > 4 ? "hidden" : `game-info-card-${shiftedI} ${shiftClass}`}
                    />)
            })}
            <button className="carousel-button carousel-right" onClick={()=> {
                setShiftClass('shift-right');
                setShift(prev => prev += 1)
            }}>
                <FontAwesomeIcon className="carousel-caret" icon={faCaretRight} />
            </button>
        </div>
    );
}

export default GamesCarousel;