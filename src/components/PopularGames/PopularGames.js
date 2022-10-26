import GameInfoCard from '../GameInfoCard/GameInfoCard';

const PopularGames = ({data, year, updateYear})=>{
    return (
        <div id="popular-games-for-this-year">
            <h1>Popular Games of YEAR</h1>
            <input 
                type="number" 
                min="1971" 
                max="2022"
                value={year}
                onChange={(e)=>updateYear(e.target.value)}
            />

            {data.map((game)=>{
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

export default PopularGames;