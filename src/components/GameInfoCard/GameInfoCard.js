import "./GameInfoCard.css";


const GameInfoCard = (props)=>{
    const {src, name, carouselClass } = props;
    return(
        //get rid of img and set div's background image instead
        <div className={`game-info-card ${carouselClass}`} style={{backgroundImage: `url(${src})`}}>
            <div className={`game-name ${carouselClass.split(" ")[0] !== "game-info-card-2" ? "hidden" : ""}`}>
                <p>{name}</p>
            </div>  
        </div>
    );
}

export default GameInfoCard;