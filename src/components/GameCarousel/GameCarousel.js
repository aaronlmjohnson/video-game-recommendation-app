import './GameCarousel.css';
import GameInfoCard from "../GameInfoCard/GameInfoCard";
import useApiHandler from '../useGameAPI/useApiHandler';
import { useState } from 'react';
import CarouselButton from './CarouselButton';

const GamesCarousel = ({url, setGamePageOpen, setGame})=>{
    const {data:games, loading:gamesLoading, error} = useApiHandler(`${url}&dates=2024-01-01,2024-12-31&page_size=16`);
    const [shift, setShift] = useState(0);
    const [shiftClass, setShiftClass] = useState('');

    const mod = (n, d)=> ((n % d) + d) % d;
    
    return (
        gamesLoading ? 
        <>Loading...</> :
        <div className="game-carousel">
            <CarouselButton setShift = {setShift} setShiftClass = {setShiftClass} direction="left"/>
            {games?.results.map((game, i)=>{
                let shiftedI = mod(i + shift, games.results.length);
                return (
                    <GameInfoCard
                        game={game}
                        setGamePageOpen={ setGamePageOpen }
                        setGame={setGame}
                        name={game.name} 
                        src={game.background_image} 
                        key={game.id}
                        id={game.id}
                        carouselClass = {shiftedI > 4 ? "hidden" : `game-info-card-${shiftedI} ${shiftClass}`}
                    />)
            })}
            <CarouselButton setShift = {setShift} setShiftClass = {setShiftClass} direction="right"/>
        </div>
    );
}

export default GamesCarousel;