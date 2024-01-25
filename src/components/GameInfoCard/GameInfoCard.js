import "./GameInfoCard.css";


const GameInfoCard = (props)=>{

    const {src, name, carouselClass, setGamePageOpen } = props;
    return(
        <div className={`game-info-card ${carouselClass}`} style={{backgroundImage: `url(${src})`}}>
            <button 
                className={`game-name ${carouselClass.split(" ")[0] !== "game-info-card-2" ? "hidden" : ""}`}
                onClick={()=>setGamePageOpen(true)}
            >
                <p>{name}</p>
            </button>  
        </div>
    );
}

export default GameInfoCard;