import GameInfoCard from '../GameInfoCard/GameInfoCard';

const RecommendedGames = ({data})=>{
    return (
        <div id="popular-games-for-this-year">
            <h1>You might like these games:</h1>

            {data && data.map((game)=>{
                return <GameInfoCard 
                    name={game.name}
                    releaseDate = {game.released}
                    rating={game.rating} 
                    src={game.background_image} 
                    key={game.id}
                />
            })}
        </div>
    );
}

export default RecommendedGames;