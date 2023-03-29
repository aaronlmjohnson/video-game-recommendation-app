import './FindAGame.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import GameRecommendationForm from '../GameRecommendationForm/GameRecommendationForm';
import RecommendedGames from '../RecommendedGames/RecommendedGames';

const FindAGame = ({setRenderGameForm, recommendedGames, data, handleSubmit, loading, setGamePageOpen, fetchGame})=>{
    
    return (
        <div id="find-a-game-form">
            <div id="find-a-game-nav">
                <button className="exit-button" onClick={()=>{setRenderGameForm(false)}}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
            <div id="find-a-game-main">
                <GameRecommendationForm 
                    data={data}
                    handleSubmit={handleSubmit}
                    setRenderGameForm={null}
                    loading={loading}
                />
                {!loading() ? 
                    <RecommendedGames data={recommendedGames} setGamePageOpen={setGamePageOpen} fetchGame={fetchGame} /> : <>Loading</> 
                }
            </div>
        </div>
    )
}

export default FindAGame;