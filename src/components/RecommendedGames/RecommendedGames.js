import GameInfoCard from '../GameInfoCard/GameInfoCard';
import './RecommendedGames.css';

const RecommendedGames = ({data, loading, setGamePageOpen, fetchGame})=>{
    return (
        <div id="recommended-games">
            {data && data.map((game)=>{
                return (
                <GameInfoCard 
                    src={game.background_image}
                    carouselPosition={'active'}
                    recommendation = {true}
                    setGamePageOpen={setGamePageOpen}
                    fetchGame={fetchGame}
                    id={game.id}
                    name={game.name}
                />)
            })}
        </div>
    );
}

export default RecommendedGames;
