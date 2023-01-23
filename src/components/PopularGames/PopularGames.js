import './PopularGames.css';
import GameInfoCard from "../GameInfoCard/GameInfoCard";

const PopularGames = ({ games, shiftLeft, shiftRight, positionNames })=>{
    return (
        <div id="popular-games">
            <button className="carousel-button carousel-left" onClick={shiftLeft}>{"<"}</button>
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
            <button className="carousel-button carousel-right" onClick={shiftRight}>{">"}</button>
        </div>
    );
}

export default PopularGames;