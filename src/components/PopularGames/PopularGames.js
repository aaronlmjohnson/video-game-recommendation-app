import './PopularGames.css';
import GameInfoCard from "../GameInfoCard/GameInfoCard";

const PopularGames = ({ games, shiftLeft, shiftRight })=>{
    return (
        <div id="popular-games">
            <button className="carousel-button carousel-left" onClick={shiftLeft}>{"<"}</button>
            <div id="popular-games-carousel">
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
            <button className="carousel-button carousel-right" onClick={shiftRight}>{">"}</button>
        </div>
    );
}

export default PopularGames;