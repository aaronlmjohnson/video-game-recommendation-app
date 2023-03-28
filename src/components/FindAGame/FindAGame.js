import './FindAGame.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const FindAGame = ({setRenderGameForm})=>{
    return (
        <div id="find-a-game-form">
            <button className="exit-button" onClick={()=>{setRenderGameForm(false)}}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    )
}

export default FindAGame;