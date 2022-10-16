const GameInfoCard = ({name, releaseDate, rating})=>{
    return(
        <div className="game-info-card">
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