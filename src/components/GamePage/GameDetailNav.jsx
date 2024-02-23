import useGameDataContext from "../../customHooks/useGameDataContext";
import RandomGameButton from "../RandomGameButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const GameDetailNav = ({ name })=>{
    const { setGameDetailOpen } = useGameDataContext();

    return (
        <nav className="game-detail-nav">
            <h1 >{name}</h1>
            <div className="nav-buttons">
                <RandomGameButton />
                <button className="close-button" onClick={()=> setGameDetailOpen(false)}>
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
            </div>
            
            
        </nav>
    );
}

export default GameDetailNav;