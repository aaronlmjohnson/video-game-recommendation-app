import GameInfoCard from '../GameInfoCard/GameInfoCard';
import './RecommendedGames.css';

const RecommendedGames = ({data, loading, setGamePageOpen, fetchGame})=>{
    return (
        <div id="recommended-games">
            {data && data.length > 0 ? <h1>You might like these games:</h1> : <></>}

            {data && data.map((game)=>{
                return (
                <GameInfoCard 
                    src={game.background_image}
                    carouselPosition={'active'}
                    setGamePageOpen={setGamePageOpen}
                    fetchGame={fetchGame}
                    id={game.id}
                />)
            })}
        </div>
    );
}

export default RecommendedGames;

{/* <div  className="recommended-game" key={game.id}>
                        <img src={game.background_image} />
                        <p>{game.name}</p>
                        
                    </div> */}