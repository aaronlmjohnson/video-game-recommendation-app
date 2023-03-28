import './FindAGame.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import GameRecommendationForm from '../GameRecommendationForm/GameRecommendationForm';

const FindAGame = ({setRenderGameForm, data, handleSubmit, loading})=>{
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
        </div>
    )
}

export default FindAGame;