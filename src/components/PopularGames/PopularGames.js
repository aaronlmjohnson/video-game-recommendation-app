import GameInfoCard from "../GameInfoCard/GameInfoCard";

const PopularGames = ({data})=>{
    return (
        <div id="popular-games">
            {data && data.map((game)=>{
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