const GamePage = ({data})=>{
    return(
        <div className="game-page">
            <img src={data.background_image} alt={data.name} />
            <h1 className="game-title">{data.name}</h1>
            <p className="game-released">{data.released}</p>
            <p className="game-description">{data.description_raw}</p>
            <p className="game-rating">{data.rating}</p>

            <p>Genres:</p>
            <ul className="game-genres">
            {data.genres.slice(0, 4).map((genre)=>{
                return <li key={genre.id} className="genre">{genre.name}</li>
            })}
            </ul>

            <h1>Developers:</h1>
            <ul className="game-developers">
                {data.developers.map((developer)=>{
                    return <li key={developer.id} className="developer">
                        {developer.name}
                    </li>
                })}
            </ul>

            <h1>Publisher:</h1>
            <ul className="game-publishers">
                {
                    data.publishers.map((publisher)=>{
                        return <li key={publisher.id} className="publisher">
                            {publisher.name}
                        </li>
                    })
                }
            </ul>

            <h1>Platforms:</h1>
            <ul className="game-platforms">
                {
                    data.platforms.map((platform)=>{
                        return <li key={platform.id} className="platform">
                            {platform.platform.name}
                        </li>
                    })
                }
            </ul>

            


        </div>
    );
}

export default GamePage;