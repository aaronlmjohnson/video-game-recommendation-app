import "./GameInfoCard.css";


const GameInfoCard = ({name, releaseDate, rating, src, carouselPosition, fetchGame, id, setGamePageOpen})=>{
    
    return(
        <div className={`game-info-card ${carouselPosition}`} onClick={()=>{
            if(carouselPosition === "active") setGamePageOpen(true);
            if(carouselPosition === "active")  fetchGame(id)}
        }>
            <img className="game-image" src={src} alt={'#'} />
            {carouselPosition === "active" 
            &&  <div className="game-name">
                    <h1>{name}</h1>
                </div>}
            
        </div>
    );
}

export default GameInfoCard;