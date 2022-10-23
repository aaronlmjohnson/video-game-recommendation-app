import GameInfoCard from '../GameInfoCard/GameInfoCard';

const GamesReleasedToday = ({data})=>{
    return (
        <div id="popular-games-for-this-year">
            <h1>Popular Games of YEAR</h1>
            {data.map((game)=><GameInfoCard name={game.name} releaseDate = {game.released} rating={game.rating} src={game.background_image} />)}
        </div>
    );
}

export default GamesReleasedToday;