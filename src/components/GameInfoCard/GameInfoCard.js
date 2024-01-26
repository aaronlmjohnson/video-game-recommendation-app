import useApiHandler from "../useGameAPI/useApiHandler";
import "./GameInfoCard.css";


const GameInfoCard = (props)=>{
    const {src, name, carouselClass, setGamePageOpen, setGame, id} = props;
    const handleClick = ()=>{
        setGamePageOpen(true);
        setGame(id);
    }
    
    return(
        <div className={`game-info-card ${carouselClass}`} style={{backgroundImage: `url(${src})`}}>
            <button 
                className={`game-name ${carouselClass.split(" ")[0] !== "game-info-card-2" ? "hidden" : ""}`}
                onClick={handleClick}
            >
                <p>{name}</p>
            </button>  
        </div>
    );
}

export default GameInfoCard;