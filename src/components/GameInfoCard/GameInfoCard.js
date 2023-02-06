import "./GameInfoCard.css";


const GameInfoCard = ({name, releaseDate, rating, src, carouselPosition})=>{
    
    return(
        <div className={`game-info-card ${carouselPosition}`}>
            <img className="game-image" src={src} alt={'#'} />
            {carouselPosition === "active" 
            &&  <div className="game-name">
                    <h1>{name}</h1>
                </div>}
            
        </div>
    );
}

export default GameInfoCard;