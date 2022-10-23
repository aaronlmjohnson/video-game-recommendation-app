const GameInfoCard = ({name, releaseDate, rating, src})=>{
    return(
        <div className="game-info-card">
            <img src={src} alt={'#'} width="300px"/>
            <h1 className="game-name">
                {name}
            </h1>
            <p className="game-release-date">
                {releaseDate}
            </p>
            <p className="game-rating">
                {rating}
            </p>
        </div>
    );
}

export default GameInfoCard;