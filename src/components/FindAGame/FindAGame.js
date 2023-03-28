import './FindAGame.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import GameRecommendationForm from '../GameRecommendationForm/GameRecommendationForm';
import RecommendedGames from '../RecommendedGames/RecommendedGames';

const FindAGame = ({setRenderGameForm, recommendedGames, data, handleSubmit, loading})=>{
    

    return (
        <div id="find-a-game-form">
            <button className="exit-button" onClick={()=>{setRenderGameForm(false)}}>
                <FontAwesomeIcon icon={faXmark} />
            </button>

            <GameRecommendationForm 
                data={data}
                handleSubmit={handleSubmit}
                setRenderGameForm={null}
                loading={loading}
            />
            {!loading() ? 
                <RecommendedGames data={recommendedGames} /> : <>Loading</> 
            }
        </div>
    )
}

export default FindAGame;