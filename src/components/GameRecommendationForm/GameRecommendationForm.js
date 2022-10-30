const GameRecommendationForm = ({platforms, genres})=>{
    console.log(platforms);
    return(
        <form>
            <div id="form-platforms">
                <h1>Platforms</h1>
                {platforms.results.map((platform)=>{
                    return (<div class="form-platform">
                        <label for={platform.name}>{platform.name}</label>
                        <input type="checkbox" name={platform.name} />
                    </div>)
                })}
            </div>
            <br/>
            <div id="form-genres">
                <h1>Genres</h1>
                {genres.results.map((genre)=>{
                    return (<div class="form-genre">
                        <label for={genre.name}>{genre.name}</label>
                        <input type="checkbox" name={genre.name} />
                    </div>)
                })}
            </div>

            <input type="submit" />
        </form>
    )
}

export default GameRecommendationForm;