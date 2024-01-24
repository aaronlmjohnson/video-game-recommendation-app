import "./GameInfoCard.css";


const GameInfoCard = ({name, src, carouselPosition, fetchGame, id, setGamePageOpen, animationName, recommendation})=>{
    const animationStyle = `${animationName} .3s ease-in`

    return(
        //get rid of img and set div's background image instead
        <div className={`game-info-card `} >
            <img className="game-image" src={src} alt={'#'} />
            {
                carouselPosition === "active" &&  
                <div className="game-name">
                        <h1>{name}</h1>
                </div>
            }
            
        </div>
    );
}

export default GameInfoCard;