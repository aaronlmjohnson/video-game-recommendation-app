import './PopularGames.css';
import GameInfoCard from "../GameInfoCard/GameInfoCard";
import useCarousel from '../useCarousel/useCarousel';
import { useEffect } from 'react';

const PopularGames = ({ games })=>{

    return (
        <div id="popular-games">
            {games.map((game)=>{
                return <GameInfoCard 
                    name={game.name}
                    releaseDate = {game.released}
                    rating={game.metacritic || (Math.floor(game.rating * 20))} 
                    src={game.background_image} 
                    key={game.id}
                />
            })}
        </div>
    );
}

export default PopularGames;