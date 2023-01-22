import './PopularGames.css';
import GameInfoCard from "../GameInfoCard/GameInfoCard";

const PopularGames = ({ games, shiftLeft, shiftRight, positionNames })=>{
    return (
        <div id="popular-games">
            <button className="carousel-button carousel-left" onClick={shiftLeft}>{"<"}</button>
            <div id="popular-games-carousel">
                {games.map((game, i)=>{
                    //[secondary 0 , next 1, active 2, next 3, secondary 4]
                    //make carouselPosition method and put in useCarousel hook
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