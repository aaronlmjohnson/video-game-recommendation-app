const GameRecommendationForm = ({platforms, genres, developers})=>{
    const updateRating = (e)=>{
        document.getElementById("textInput").value = e.target.value;
    }
    return(
        <form>
            <div id="form-platforms">
                <h1>Platforms</h1>
                {platforms.results.map((platform)=>{
                    return (<div className="form-platform">
                        <label htmlFor={platform.name}>{platform.name}</label>
                        <input type="checkbox" name={platform.name} />
                    </div>)
                })}
            </div>
            <br/>
            <div id="form-genres">
                <h1>Genres</h1>
                {genres.results.map((genre)=>{
                    return (<div className="form-genre">
                        <label htmlFor={genre.name}>{genre.name}</label>
                        <input type="checkbox" name={genre.name} />
                    </div>)
                })}
            </div>

            <div id="form-released">
                <h1>Release Date</h1>
                <div id="form-released-start" >
                    <input type="date" name="start-date"/>
                </div>
                to
                <div id="form-released-end" >
                    <input type="date" name="end-date"/>
                </div>
            </div>

            <div id="form-rating"> 
                <label htmlFor="rating">Rating:</label>
                <input type="range" name="rating" min="0" max="100" onChange={updateRating}/>
                <input type="text" id="textInput" value=""></input>
            </div>

            <div id="form-developers">
                <h1>Developers</h1>
                <label htmlFor="developer-option">All</label>
                <input type="radio" name="developer-option"/>
                {developers.results.map((developer)=>{
                    return (<div className="form-genre">
                        <label htmlFor="developer-option">{developer.name}</label>
                        <input type="radio" name="developer-option" />
                    </div>)
                })}
            </div>
            <input type="submit" />
        </form>
    )
}

export default GameRecommendationForm;